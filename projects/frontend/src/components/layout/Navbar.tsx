import React from 'react';
import { useWallet } from '@txnlab/use-wallet-react';
import { Link } from 'react-router-dom';

interface NavbarProps {
    toggleWalletModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleWalletModal }) => {
    const { activeAddress } = useWallet();

    return (
        <div className="navbar bg-base-100 border-b border-base-200 sticky top-0 z-50">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost normal-case text-2xl text-primary font-bold">
                    SessionLedger
                </Link>
            </div>
            <div className="flex-none gap-4">
                {activeAddress ? (
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar placeholder">
                            <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                                <span className="text-xs">{activeAddress.slice(0, 4)}</span>
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 border border-base-200">
                            <li><button onClick={toggleWalletModal}>Wallet Details</button></li>
                            <li><Link to="/profile">Profile</Link></li>
                            {/* Add logout or other dropdown items here */}
                        </ul>
                    </div>
                ) : (
                    <button className="btn btn-primary btn-sm" onClick={toggleWalletModal}>
                        Connect Wallet
                    </button>
                )}
            </div>
        </div>
    );
};

export default Navbar;
