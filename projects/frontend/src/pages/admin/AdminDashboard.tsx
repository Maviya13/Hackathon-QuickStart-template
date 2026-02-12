import React from 'react';

const AdminDashboard: React.FC = () => {
    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold text-accent">Admin Dashboard</h2>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="stat bg-base-100 shadow rounded-box border border-base-200">
                    <div className="stat-title">Total Sessions</div>
                    <div className="stat-value text-primary">156</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat bg-base-100 shadow rounded-box border border-base-200">
                    <div className="stat-title">Total Organizers</div>
                    <div className="stat-value text-secondary">12</div>
                    <div className="stat-desc">Active wallets</div>
                </div>

                <div className="stat bg-base-100 shadow rounded-box border border-base-200">
                    <div className="stat-title">Total Students</div>
                    <div className="stat-value">1,204</div>
                    <div className="stat-desc">Unique attendees</div>
                </div>

                <div className="stat bg-base-100 shadow rounded-box border border-base-200">
                    <div className="stat-title">Anomalies Detected</div>
                    <div className="stat-value text-warning">5</div>
                    <div className="stat-desc text-warning">Action required</div>
                </div>
            </div>

            {/* Organizers Table */}
            <div className="card bg-base-100 shadow-xl border border-base-200">
                <div className="card-body">
                    <h3 className="card-title text-xl mb-4">Manage Organizers</h3>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Wallet Address</th>
                                    <th>Sessions Created</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="font-mono text-sm">NM2...K7Q</td>
                                    <td>45</td>
                                    <td><div className="badge badge-success">Active</div></td>
                                    <td><button className="btn btn-xs btn-error">Revoke</button></td>
                                </tr>
                                <tr>
                                    <td className="font-mono text-sm">XJ9...P2L</td>
                                    <td>12</td>
                                    <td><div className="badge badge-success">Active</div></td>
                                    <td><button className="btn btn-xs btn-error">Revoke</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
