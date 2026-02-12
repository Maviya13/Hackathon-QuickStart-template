import React from 'react';

const StudentHistory: React.FC = () => {
    return (
        <div className="card bg-base-100 shadow-xl border border-base-200">
            <div className="card-body">
                <h3 className="card-title text-xl text-secondary mb-4">My Certificates</h3>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Session</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover">
                                <td className="font-semibold">Intro to Algo</td>
                                <td>2023-10-24</td>
                                <td><div className="badge badge-success gap-2">Verified</div></td>
                                <td><button className="btn btn-xs btn-outline">View NFT</button></td>
                            </tr>
                            <tr className="hover">
                                <td className="font-semibold">Smart Contracts 101</td>
                                <td>2023-11-02</td>
                                <td><div className="badge badge-success gap-2">Verified</div></td>
                                <td><button className="btn btn-xs btn-outline">View NFT</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default StudentHistory;
