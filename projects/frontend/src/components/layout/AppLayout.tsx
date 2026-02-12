import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import ConnectWallet from '../../components/ConnectWallet';
import { useWallet } from '@txnlab/use-wallet-react';

const AppLayout: React.FC = () => {
    const [openWalletModal, setOpenWalletModal] = useState<boolean>(false);
    const { activeAddress } = useWallet();

    const toggleWalletModal = () => {
        setOpenWalletModal(!openWalletModal);
    };

    return (
        <div className="drawer lg:drawer-open font-sans antialiased text-base-content bg-base-100 min-h-screen">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <Navbar toggleWalletModal={toggleWalletModal} />

                {/* Main Page Content */}
                <main className="flex-1 p-6 bg-base-300">
                    <div className="container mx-auto max-w-7xl">
                        <Outlet />
                    </div>
                </main>
            </div>

            {/* Sidebar (Drawer Side) */}
            <Sidebar />

            {/* Wallet Modal Overlay */}
            <ConnectWallet openModal={openWalletModal} closeModal={toggleWalletModal} />
        </div>
    );
};

export default AppLayout;
