# SessionLedger 🎓⛓️

**Decentralized Attendance & Certification System on Algorand**

SessionLedger is an institutional-grade dApp designed to eliminate attendance fraud and issue immutable, verifiable certificates for lectures, events, and workshops. Powered by Algorand smart contracts, it ensures that every attendance record is cryptographically secure and permanently stored on-chain.

![SessionLedger UI](https://via.placeholder.com/800x400?text=SessionLedger+Dashboard+Preview)

---

## 🚀 Features

### 🏛️ For Organizers (Professors/Event Hosts)
*   **Create Sessions**: Define session details (ID, Duration) on-chain.
*   **Live Attendance Management**: Generate dynamic QR codes that change nonce every few seconds to prevent sharing.
*   **Session History**: View immutable logs of all past sessions and attendee counts.

### 🎓 For Students (Attendees)
*   **Instant Verification**: Scan QR codes to cryptographically prove presence.
*   **Certificate Wallet**: Automatically receive an NFT/Asset for every completed session.
*   **History**: View a permanent record of all attended events.

### 🛡️ For Administrators
*   **System Overview**: Monitor global metrics (Total Sessions, Active Users).
*   **User Management**: Oversee organizer permissions and flag anomalies.

---

## 🛠️ Tech Stack

*   **Blockchain**: Algorand (TestNet / LocalNet)
*   **Smart Contracts**: Python (Algorand Python / AlgoKit)
*   **Frontend**: React, Vite, TypeScript
*   **Styling**: Tailwind CSS, DaisyUI (Custom "Deep Charcoal" Institutional Theme)
*   **Routing**: React Router v6
*   **Wallets**: Pera, Defly, Kibisis, Lute (via `@txnlab/use-wallet-react`)

---

## 📋 Prerequisites

Ensure you have the following installed:
*   **Node.js** (v18+)
*   **Python** (v3.12+)
*   **Docker** (Required for running LocalNet)
*   **AlgoKit** (`pipx install algokit`)

---

## ⚡ Quick Start

### 1. Clone the Repository
```bash
git clone <repository-url>
cd SessionLedger
```

### 2. Setup Frontend
The frontend is a standard React/Vite application.
```bash
cd projects/frontend
npm install
npm run dev
```
> The app will run at `http://localhost:5173`.

### 3. Setup Backend (Smart Contracts)
*Note: This project uses `algorand-python` which requires Python 3.12+.*

**Option A: AlgoKit Bootstrap (Recommended)**
```bash
algokit project bootstrap all
```

**Option B: Manual Setup (If Bootstrap fails)**
```bash
# Navigate to contracts folder
cd projects/contracts

# Create virtual environment
python3.12 -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate

# Install dependencies
pip install --upgrade pip
pip install algokit-utils algorand-python python-dotenv
```

### 4. Run Local Blockchain (Optional - LocalNet)
**Note:** Docker is ONLY required if you want to deploy and test smart contracts on a local blockchain. The frontend works perfectly with mock clients for development without Docker.

To test the smart contracts locally:
```bash
algokit localnet start
```
This spins up a local Algorand network in Docker.

---

## 🧭 Usage Guide

1.  **Connect Wallet**: Click "Connect Wallet" in the top right. Use 'LocalNet Wallet' (KMD) if running locally, or Pera/Defly for TestNet.
2.  **Select Role**:
    *   **Organizer**: Go to "Organizer Portal" -> "Create Session".
    *   **Student**: Go to "Student Portal" -> "Scan Attendance".
3.  **Run Flow**:
    *   Organizer creates a session.
    *   Organizer goes to "Active Sessions" to show the QR code.
    *   Student mock-scans the QR code (Simulator provided in UI).
    *   Attendance is recorded on the ledger.

---

## ⚠️ Troubleshooting

### Frontend Issues
*   **`npm install` hangs**: Retry with `npm install --no-audit`.
*   **"Cannot find module 'react-router-dom'"**: Run `npm install` in the `projects/frontend` directory.

### Backend Issues
*   **"Command not found: algokit"**: Ensure AlgoKit is installed via `pipx install algokit`.
*   **Backend Build Fails**: Ensure you are using Python 3.12. Older versions are not supported by the latest Algorand Python SDK.
*   **Build command hangs**: Make sure you're running the command with the virtual environment activated:
    ```bash
    cd projects/contracts
    source .venv/bin/activate  # On Windows: .venv\Scripts\activate
    python -m smart_contracts build
    ```
*   **LocalNet fails to start**: You need Docker or Podman installed and running. Install Docker Desktop from [docker.com](https://www.docker.com/products/docker-desktop).

---

## 📜 License
MIT License.
