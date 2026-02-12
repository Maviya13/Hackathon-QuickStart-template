import { SupportedWallet, WalletId, WalletManager, WalletProvider } from '@txnlab/use-wallet-react'
import { SnackbarProvider } from 'notistack'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import AppLayout from './components/layout/AppLayout'
import OrganizerDashboard from './pages/OrganizerDashboard'
import StudentDashboard from './pages/StudentDashboard'
import CreateSession from './pages/organizer/CreateSession'
import ActiveSession from './pages/organizer/ActiveSession'
import SessionHistory from './pages/organizer/SessionHistory'
import StudentScan from './pages/student/StudentScan'
import StudentHistory from './pages/student/StudentHistory'
import AdminDashboard from './pages/admin/AdminDashboard'
import { getAlgodConfigFromViteEnvironment, getKmdConfigFromViteEnvironment } from './utils/network/getAlgoClientConfigs'

let supportedWallets: SupportedWallet[]
if (import.meta.env.VITE_ALGOD_NETWORK === 'localnet') {
  const kmdConfig = getKmdConfigFromViteEnvironment()
  supportedWallets = [
    {
      id: WalletId.KMD,
      options: {
        baseServer: kmdConfig.server,
        token: String(kmdConfig.token),
        port: String(kmdConfig.port),
      },
    },
  ]
} else {
  supportedWallets = [
    { id: WalletId.DEFLY },
    { id: WalletId.PERA },
    { id: WalletId.EXODUS },
    { id: WalletId.LUTE },
  ]
}

export default function App() {
  const algodConfig = getAlgodConfigFromViteEnvironment()

  const walletManager = new WalletManager({
    wallets: supportedWallets,
    defaultNetwork: algodConfig.network,
    networks: {
      [algodConfig.network]: {
        algod: {
          baseServer: algodConfig.server,
          port: algodConfig.port,
          token: String(algodConfig.token),
        },
      },
    },
    options: {
      resetNetwork: true,
    },
  })

  return (
    <SnackbarProvider maxSnack={3}>
      <WalletProvider manager={walletManager}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Home />} />

              {/* Organizer Routes */}
              <Route path="/organizer" element={<OrganizerDashboard />} />
              <Route path="/organizer/create" element={<CreateSession />} />
              <Route path="/organizer/active" element={<ActiveSession />} />
              <Route path="/organizer/history" element={<SessionHistory />} />

              {/* Student Routes */}
              <Route path="/student" element={<StudentDashboard />} />
              <Route path="/student/scan" element={<StudentScan />} />
              <Route path="/student/history" element={<StudentHistory />} />

              {/* Admin Routes */}
              <Route path="/admin" element={<AdminDashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </WalletProvider>
    </SnackbarProvider>
  )
}
