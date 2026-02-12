import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useWallet } from '@txnlab/use-wallet-react';

const Sidebar: React.FC = () => {
    const { activeAddress } = useWallet();
    const location = useLocation();

    // Simple logic to determine "context" based on URL
    // In a real app, this would be based on user claims
    const isOrganizerContext = location.pathname.startsWith('/organizer');
    const isStudentContext = location.pathname.startsWith('/student');
    const isAdminContext = location.pathname.startsWith('/admin');

    return (
        <div className="drawer-side z-40 h-full">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex flex-col gap-2 border-r border-base-300">
                <li className="mb-4">
                    <div className="flex items-center gap-2 px-2">
                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-bold text-primary-content">SL</div>
                        <span className="font-bold text-xl tracking-tight">SessionLedger</span>
                    </div>
                </li>

                {/* Home */}
                <li><NavLink to="/" className={({ isActive }: { isActive: boolean }) => isActive ? 'active' : ''}>Landing Page</NavLink></li>

                <div className="divider my-2"></div>

                {/* Organizer Section - Always visible or enhanced when active */}
                <li className={`menu-title ${isOrganizerContext ? 'text-primary' : ''}`}>Organizer Portal</li>
                <li><NavLink to="/organizer">Dashboard Home</NavLink></li>
                <li><NavLink to="/organizer/create">Create Session</NavLink></li>
                <li><NavLink to="/organizer/active">Active Sessions</NavLink></li>
                <li><NavLink to="/organizer/history">Past Sessions</NavLink></li>

                <div className="divider my-2"></div>

                {/* Student Section */}
                <li className={`menu-title ${isStudentContext ? 'text-secondary' : ''}`}>Student Portal</li>
                <li><NavLink to="/student">Dashboard Home</NavLink></li>
                <li><NavLink to="/student/scan">Scan Attendance</NavLink></li>
                <li><NavLink to="/student/history">My Certificates</NavLink></li>

                <div className="divider my-2"></div>

                {/* Admin Section */}
                <li className={`menu-title ${isAdminContext ? 'text-accent' : ''}`}>Administration</li>
                <li><NavLink to="/admin">System Overview</NavLink></li>

                <div className="mt-auto p-4 bg-base-300 rounded-xl">
                    <p className="text-xs text-base-content/50">Current Network</p>
                    <p className="font-mono text-sm text-success">TestNet</p>
                </div>
            </ul>

        </div>
    );
};

export default Sidebar;
