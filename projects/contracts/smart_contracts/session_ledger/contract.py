from algopy import ARC4Contract, BoxMap, String, UInt64, Account, Struct, Global, Txn, op, Bytes
from algopy.arc4 import abimethod

class SessionStruct(Struct):
    organizer: Account
    active: bool
    current_nonce: UInt64
    start_time: UInt64
    end_time: UInt64
    metadata_ipfs: String

class SessionLedger(ARC4Contract):
    admin: Account
    organizers: BoxMap[Account, bool]
    sessions: BoxMap[UInt64, SessionStruct]
    attendance: BoxMap[Bytes, bool] # Key: concat(session_id, student_account)

    def __init__(self) -> None:
        self.admin = Txn.sender

    @abimethod
    def add_organizer(self, account: Account) -> None:
        assert Txn.sender == self.admin, "Only admin can add organizers"
        self.organizers[account] = True

    @abimethod
    def create_session(self, session_id: UInt64, start_time: UInt64, end_time: UInt64, metadata_ipfs: String) -> None:
        assert self.organizers[Txn.sender], "Only authorized organizers can create sessions"
        assert session_id not in self.sessions, "Session ID already exists"
        
        self.sessions[session_id] = SessionStruct(
            organizer=Txn.sender,
            active=False,
            current_nonce=UInt64(0),
            start_time=start_time,
            end_time=end_time,
            metadata_ipfs=metadata_ipfs
        )

    @abimethod
    def start_session(self, session_id: UInt64) -> None:
        session = self.sessions[session_id]
        
        # Check if caller is organizer
        assert Txn.sender == session.organizer, "Only session organizer can start session"
        
        # Update session to active
        self.sessions[session_id] = SessionStruct(
            organizer=session.organizer,
            active=True,
            current_nonce=session.current_nonce,
            start_time=session.start_time,
            end_time=session.end_time,
            metadata_ipfs=session.metadata_ipfs
        )

    @abimethod
    def rotate_nonce(self, session_id: UInt64, new_nonce: UInt64) -> None:
        session = self.sessions[session_id]
        
        assert Txn.sender == session.organizer, "Only session organizer can rotate nonce"
        assert session.active, "Session must be active"

        self.sessions[session_id] = SessionStruct(
            organizer=session.organizer,
            active=session.active,
            current_nonce=new_nonce,
            start_time=session.start_time,
            end_time=session.end_time,
            metadata_ipfs=session.metadata_ipfs
        )

    @abimethod
    def mark_attendance(self, session_id: UInt64, nonce: UInt64) -> None:
        session = self.sessions[session_id]
        assert session.active, "Session is not active"
        assert nonce == session.current_nonce, "Invalid nonce"
        
        # Check time bounds
        current_time = Global.latest_timestamp
        assert current_time >= session.start_time, "Session has not started yet"
        assert current_time <= session.end_time, "Session has ended"

        # Unique key for attendance: session_id + sender
        # Convert session_id to bytes (8 bytes, big-endian)
        key = op.itob(session_id) + Txn.sender.bytes
        assert key not in self.attendance, "Attendance already marked"
        
        self.attendance[key] = True

    @abimethod
    def stop_session(self, session_id: UInt64) -> None:
        session = self.sessions[session_id]
        assert Txn.sender == session.organizer, "Only session organizer can stop session"
        
        self.sessions[session_id] = SessionStruct(
            organizer=session.organizer,
            active=False,
            current_nonce=session.current_nonce,
            start_time=session.start_time,
            end_time=session.end_time,
            metadata_ipfs=session.metadata_ipfs
        )
