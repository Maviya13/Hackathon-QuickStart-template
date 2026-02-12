export interface SessionData {
    sessionId: string;
    organizer: string;
    startTime: number;
    endTime: number;
    active: boolean;
    currentNonce: number;
    totalAttendees: number;
}

export interface AttendanceRecord {
    sessionId: string;
    student: string;
    timestamp: number;
    verified: boolean;
}
