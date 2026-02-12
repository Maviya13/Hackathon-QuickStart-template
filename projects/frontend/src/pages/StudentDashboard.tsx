import React from 'react';
import { Link } from 'react-router-dom';
import { useWallet } from '@txnlab/use-wallet-react';

const StudentDashboard: React.FC = () => {
    const { activeAddress } = useWallet();

    if (!activeAddress) {
        return (
            <div className="alert alert-warning shadow-lg">
                <div><span>Please connect your wallet to view dashboard.</span></div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
            {/* Action Card */}
            <div className="card bg-base-100 shadow-xl border border-base-200">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-primary text-2xl">Mark Attendance</h2>
                    <p>Scan a QR code from your lecture.</p>
                    <div className="card-actions mt-4">
                        <Link to="/student/scan" className="btn btn-primary btn-lg">Open Scanner</Link>
                    </div>
                </div>
            </div>

            {/* History Card */}
            <div className="card bg-base-100 shadow-xl border border-base-200">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-secondary text-2xl">My Certificates</h2>
                    <p>View your earned attendance NFTs.</p>
                    <div className="card-actions mt-4">
                        <Link to="/student/history" className="btn btn-secondary btn-lg">View Wallet</Link>
                    </div>
                </div>
            </div>

            <div className="col-span-full mt-8">
                <h3 className="text-2xl font-bold mb-4">My Stats</h3>
                <div className="stats shadow w-full bg-base-100 border border-base-200">
                    <div className="stat">
                        <div className="stat-title">Sessions Attended</div>
                        <div className="stat-value">12</div>
                        <div className="stat-desc">This semester</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title">Certificates</div>
                        <div className="stat-value text-secondary">8</div>
                        <div className="stat-desc">Minted on-chain</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;
