// App.js
import React, { useState, useEffect, useRef, useCallback, useMemo, useContext, createContext, Fragment  } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Components
const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(credentials);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">🏠 RealEstateChain</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              required
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              required
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
          </div>
          <button type="submit" className="primary-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

const Dashboard = ({ user, onLogout }) => {
  const [transactions, setTransactions] = useState([]);
  const [newTransaction, setNewTransaction] = useState({
    partnerEmail: '',
    contractKey: '',
    propertyDetails: ''
  });

  const createTransaction = () => {
    // API call to create smart contract
    setTransactions([...transactions, { ...newTransaction, status: 'pending' }]);
    setNewTransaction({ partnerEmail: '', contractKey: '', propertyDetails: '' });
  };

  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <h2>Welcome, {user.email}</h2>
        <button onClick={onLogout} className="secondary-btn">
          Logout
        </button>
      </nav>

      {user.role === 'lawyer' ? (
        <ValidationPanel transactions={transactions} />
      ) : (
        <div className="transaction-section">
          <h3>New Transaction</h3>
          <div className="transaction-form">
            <input
              placeholder="Partner Email"
              value={newTransaction.partnerEmail}
              onChange={(e) => setNewTransaction({ ...newTransaction, partnerEmail: e.target.value })}
            />
            <input
              placeholder="Shared Contract Key"
              value={newTransaction.contractKey}
              onChange={(e) => setNewTransaction({ ...newTransaction, contractKey: e.target.value })}
            />
            <textarea
              placeholder="Property Details"
              value={newTransaction.propertyDetails}
              onChange={(e) => setNewTransaction({ ...newTransaction, propertyDetails: e.target.value })}
            />
            <button onClick={createTransaction} className="primary-btn">
              Initiate Contract
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const ValidationPanel = ({ transactions }) => {
  const validateContract = (transactionId) => {
    // API call to validate contract
    alert(`Contract ${transactionId} validated!`);
  };

  return (
    <div className="validation-panel">
      <h3>Contracts Awaiting Validation</h3>
      <div className="contract-list">
        {transactions.map((tx) => (
          <div key={tx.contractKey} className="contract-card">
            <h4>{tx.propertyDetails}</h4>
            <p>Contract Key: {tx.contractKey}</p>
            <button onClick={() => validateContract(tx.contractKey)} className="validate-btn">
              Validate Contract
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const DownloadKeys = ({ contractKey }) => {
  const download = () => {
    const blob = new Blob([contractKey], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contract-key.txt';
    a.click();
  };

  return (
    <div className="download-container">
      <div className="download-card">
        <h2>Contract Ready!</h2>
        <p>Your secure contract key:</p>
        <code className="key-display">{contractKey}</code>
        <button onClick={download} className="download-btn">
          📥 Download Key File
        </button>
      </div>
    </div>
  );
};

// Main App Component
export default function App() {
  const [user, setUser] = useState(null);
  const [currentContract, setCurrentContract] = useState(null);

  const handleLogin = (credentials) => {
    setUser({
      email: credentials.email,
      role: credentials.email.includes('@lawyer.com') ? 'lawyer' : 'user'
    });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          user ? <Navigate to="/dashboard" replace /> : <Login onLogin={handleLogin} />
        }/>
        <Route path="/dashboard" element={
          user ? <Dashboard user={user} onLogout={() => setUser(null)} /> : <Navigate to="/" replace />
        }/>
        <Route path="/download" element={<DownloadKeys contractKey={currentContract} />} />
      </Routes>
    </Router>
  );
}