import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import { mockClientInstance } from '../../interfaces/sessionLedgerClient';

const StudentScan: React.FC = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [scanResult, setScanResult] = useState<string | null>(null);

    const startScanner = () => {
        enqueueSnackbar('Camera started (Check permissions)', { variant: 'info' });

        setTimeout(async () => {
            const mockData = { sid: 'CS101-Lecture-12', nonce: 12345 };
            setScanResult(JSON.stringify(mockData));

            try {
                await mockClientInstance.markAttendance({ sessionId: mockData.sid, nonce: mockData.nonce });
                enqueueSnackbar('Attendance marked successfully! (Mock)', { variant: 'success' });
            } catch (e) {
                enqueueSnackbar('Failed to mark attendance', { variant: 'error' });
            }
        }, 2000);
    };

    return (
        <div className="card bg-base-100 shadow-xl border border-base-200 max-w-xl mx-auto">
            <div className="card-body items-center text-center">
                <h3 className="card-title text-xl text-primary mb-4">Mark Attendance</h3>
                <div className="bg-base-200 p-8 rounded-box mb-6 w-full flex flex-col items-center justify-center min-h-[250px] border-2 border-dashed border-base-content/20">
                    {scanResult ? (
                        <div className="text-success animate-bounce">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <p className="font-bold text-lg">Scan Complete</p>
                        </div>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-base-content/30 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    )}
                    <p className="text-base-content/60">{scanResult ? "Processing..." : "Camera inactive"}</p>
                </div>

                {!scanResult && (
                    <button className="btn btn-primary btn-lg w-full" onClick={startScanner}>
                        Open Camera
                    </button>
                )}
            </div>
        </div>
    );
};

export default StudentScan;
