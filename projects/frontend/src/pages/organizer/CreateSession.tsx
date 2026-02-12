import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import { mockClientInstance } from '../../interfaces/sessionLedgerClient';

const CreateSession: React.FC = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [sessionId, setSessionId] = useState<string>('');
    const [duration, setDuration] = useState<number>(60);

    const handleCreateSession = async () => {
        if (!sessionId) {
            enqueueSnackbar('Session ID is required', { variant: 'error' });
            return;
        }
        try {
            await mockClientInstance.createSession({ sessionId, duration });
            enqueueSnackbar('Session created successfully!', { variant: 'success' });
            setSessionId('');
        } catch (e) {
            enqueueSnackbar('Failed to create session', { variant: 'error' });
        }
    };

    return (
        <div className="card bg-base-100 shadow-xl border border-base-200 max-w-2xl mx-auto">
            <div className="card-body">
                <h3 className="card-title text-xl text-primary mb-4">Create New Session</h3>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Session ID</span>
                    </label>
                    <input
                        type="text"
                        placeholder="e.g. CS101-Lecture-12"
                        className="input input-bordered w-full"
                        value={sessionId}
                        onChange={(e) => setSessionId(e.target.value)}
                    />
                </div>

                <div className="form-control w-full mt-4">
                    <label className="label">
                        <span className="label-text font-semibold">Duration (minutes)</span>
                    </label>
                    <input
                        type="number"
                        className="input input-bordered w-full"
                        value={duration}
                        onChange={(e) => setDuration(Number(e.target.value))}
                    />
                </div>

                <div className="card-actions justify-end mt-6">
                    <button className="btn btn-primary btn-block" onClick={handleCreateSession}>
                        Create Session
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateSession;
