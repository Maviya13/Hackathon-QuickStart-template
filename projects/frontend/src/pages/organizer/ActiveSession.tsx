import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import { QRCodeSVG } from 'qrcode.react';
import { mockClientInstance } from '../../interfaces/sessionLedgerClient';
import { SessionData } from '../../interfaces/session';

const ActiveSession: React.FC = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [sessionIdSearch, setSessionIdSearch] = useState<string>('');
    const [activeSession, setActiveSession] = useState<SessionData | null>(null);

    const handleLoadSession = async () => {
        const session = await mockClientInstance.getSession(sessionIdSearch);
        if (session.sessionId) {
            setActiveSession(session);
        } else {
            enqueueSnackbar('Session not found', { variant: 'warning' });
        }
    };

    const handleStartSession = async () => {
        if (activeSession) {
            await mockClientInstance.startSession({ sessionId: activeSession.sessionId });
            setActiveSession({ ...activeSession, active: true });
            enqueueSnackbar('Session started', { variant: 'success' });
        }
    };

    const handleRotateNonce = async () => {
        if (activeSession) {
            const newNonce = await mockClientInstance.rotateNonce({ sessionId: activeSession.sessionId });
            setActiveSession({ ...activeSession, currentNonce: newNonce });
            enqueueSnackbar('Nonce rotated', { variant: 'info' });
        }
    };

    return (
        <div className="card bg-base-100 shadow-xl border border-base-200 max-w-2xl mx-auto">
            <div className="card-body">
                <h3 className="card-title text-xl text-secondary mb-4">Active Session Control</h3>

                {/* Search for Session to Manage */}
                <div className="flex gap-2 mb-6">
                    <input
                        type="text"
                        placeholder="Enter Session ID to Manage"
                        className="input input-bordered w-full"
                        value={sessionIdSearch}
                        onChange={(e) => setSessionIdSearch(e.target.value)}
                    />
                    <button className="btn btn-neutral" onClick={handleLoadSession}>Load</button>
                </div>

                {activeSession ? (
                    <div className="flex flex-col items-center">
                        <div className="badge badge-lg badge-outline mb-4 font-mono">{activeSession.sessionId}</div>

                        <div className="bg-white p-4 rounded-xl shadow-inner border border-base-200">
                            <QRCodeSVG
                                value={JSON.stringify({
                                    sid: activeSession.sessionId,
                                    nonce: activeSession.currentNonce
                                })}
                                size={200}
                            />
                        </div>

                        <p className="mt-4 text-sm text-base-content/70">Scan to mark attendance</p>
                        <div className="stat place-items-center p-2">
                            <div className="stat-title">Current Nonce</div>
                            <div className="stat-value text-secondary text-2xl font-mono">{activeSession.currentNonce}</div>
                        </div>

                        <div className="flex gap-4 justify-center mt-6 w-full">
                            {!activeSession.active ? (
                                <button className="btn btn-success flex-1" onClick={handleStartSession}>
                                    Start Session
                                </button>
                            ) : (
                                <>
                                    <button className="btn btn-warning flex-1" onClick={handleRotateNonce}>
                                        Rotate Nonce
                                    </button>
                                    <button className="btn btn-error flex-1">Stop</button>
                                </>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="h-full flex flex-col items-center justify-center text-base-content/30 py-12">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <p>Load a session to manage it.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ActiveSession;
