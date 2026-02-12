// src/Home.tsx
import { useNavigate } from 'react-router-dom';

interface HomeProps { }

const Home: React.FC<HomeProps> = () => {
  const navigate = useNavigate();

  const handleRoleSelect = (role: 'organizer' | 'student') => {
    // In a real app, we might check for wallet connection here
    // For now, simple navigation
    if (role === 'organizer') navigate('/organizer');
    if (role === 'student') navigate('/student');
  }

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <div className="hero min-h-[50vh] rounded-3xl bg-base-200 mb-12 border border-base-300 shadow-xl">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-base-content mb-6">Decentralized Attendance & Certification</h1>
            <p className="py-6 text-xl text-base-content/70">
              Secure, immutable, and automated session management on the Algorand blockchain.
              Say goodbye to fake certificates and attendance fraud.
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <button
                className="btn btn-primary btn-lg"
                onClick={() => handleRoleSelect('organizer')}
              >
                I am an Organizer
              </button>
              <button
                className="btn btn-outline btn-secondary btn-lg"
                onClick={() => handleRoleSelect('student')}
              >
                I am a Student
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-12">
        <div className="card bg-base-100 shadow-xl border border-base-200">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl text-primary font-bold">Secure</h2>
            <p className="text-base-content/60">Powered by Algorand smart contracts. All data is on-chain and immutable.</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl border border-base-200">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl text-secondary font-bold">Automated</h2>
            <p className="text-base-content/60">Smart contracts handle attendance verification and certificate issuance automatically.</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl border border-base-200">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl text-accent font-bold">Transparent</h2>
            <p className="text-base-content/60">Verify any certificate instantly. No more reliance on centralized authorities.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

