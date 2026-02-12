import React from 'react';

const SessionHistory: React.FC = () => {
    return (
        <div className="card bg-base-100 shadow-xl border border-base-200">
            <div className="card-body">
                <h3 className="card-title text-xl text-primary mb-4">Past Sessions</h3>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Session ID</th>
                                <th>Date</th>
                                <th>Attendees</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover">
                                <td className="font-mono">CS101-Lecture-10</td>
                                <td>2023-10-20</td>
                                <td>45</td>
                                <td><div className="badge badge-ghost">Completed</div></td>
                            </tr>
                            <tr className="hover">
                                <td className="font-mono">CS101-Lecture-11</td>
                                <td>2023-10-22</td>
                                <td>42</td>
                                <td><div className="badge badge-ghost">Completed</div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SessionHistory;
