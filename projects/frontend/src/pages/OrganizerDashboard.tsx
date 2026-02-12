import React from 'react';
import { Link } from 'react-router-dom';
import { useWallet } from '@txnlab/use-wallet-react';

const OrganizerDashboard: React.FC = () => {
    const { activeAddress } = useWallet();

    if (!activeAddress) {
        return (
            <div className="alert alert-warning shadow-lg">
                <div>
                    <span>Please connect your wallet to manage sessions.</span>
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card bg-base-100 shadow-xl border border-base-200">
                <div className="card-body">
                    <h2 className="card-title text-primary">Create Session</h2>
                    <p>Start a new lecture or event session.</p>
                    <div className="card-actions justify-end">
                        <Link to="/organizer/create" className="btn btn-primary">Create</Link>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 shadow-xl border border-base-200">
                <div className="card-body">
                    <h2 className="card-title text-secondary">Active Sessions</h2>
                    <p>Manage currently running sessions.</p>
                    <div className="card-actions justify-end">
                        <Link to="/organizer/active" className="btn btn-secondary">Manage</Link>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 shadow-xl border border-base-200">
                <div className="card-body">
                    <h2 className="card-title">History</h2>
                    <p>View past sessions and attendance.</p>
                    <div className="card-actions justify-end">
                        <Link to="/organizer/history" className="btn btn-neutral">View</Link>
                    </div>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="col-span-full mt-8">
                <h3 className="text-2xl font-bold mb-4">Overview</h3>
                <div className="stats shadow w-full bg-base-100 border border-base-200">
                    <div className="stat">
                        <div className="stat-title">Total Sessions</div>
                        <div className="stat-value">3</div>
                        <div className="stat-desc">Lifetime</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title">Total Attendees</div>
                        <div className="stat-value">120</div>
                        <div className="stat-desc">Across all sessions</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title">Avg. Attendance</div>
                        <div className="stat-value">40</div>
                        <div className="stat-desc">Per session</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrganizerDashboard;
