import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

import Buyer from './buyer';
import Seller from './seller';
import Success from './success';
import Sellerpre from "./sellerpre"
import Add from './addproperties';

function App() {
  const [walletAddress, setWalletAddress] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleConnectWallet = async () => {
    try {
      if (!window.ethereum) {
        window.open('https://metamask.io/download/', '_blank');
        setError('MetaMask not installed - redirecting to download page');
        return;
      }

      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      setWalletAddress(accounts[0]);
      setError('');
    } catch (err) {
      setError('Error connecting to wallet: ' + err.message);
    }
  };

  const handleSubmit = () => {

    if (!walletAddress) {
      setError('Please connect your wallet first');
      return;
    }
    if (!selectedRole) {
      setError('Please select a role');
      return;
    }

    console.log('Connected wallet:', walletAddress);
    console.log('Selected role:', selectedRole);

    if (selectedRole === 'seller') {
      navigate('/sellerPre');
    } else if (selectedRole === 'buyer') {
      navigate('/buyer');
    }
  };

  return (
    <div className="App">
      
      <img src={`${process.env.PUBLIC_URL}/Logo.png`} alt="Logo" />
      <h1>EscrowShield</h1>

      
      <Routes>
        <Route
          path="/"
          element={
            <div className="login-container">
              <div className="button-group">
                <button
                  className={`connect-button ${
                    walletAddress ? 'connected' : ''
                  }`}
                  onClick={handleConnectWallet}
                >
                  {walletAddress
                    ? `✔ Connected: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
                    : 'Connect MetaMask'}
                </button>

                <div className="dropdown-container">
                  <select
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="role-dropdown"
                  >
                    <option value="">Select Role</option>
                    <option value="seller">Seller</option>
                    <option value="buyer">Buyer</option>
                  </select>
                </div>

                <button
                  className="submit-button"
                  onClick={handleSubmit}
                  disabled={!walletAddress || !selectedRole}
                >
                  Continue
                </button>

                {error && <div className="error-message">{error}</div>}
              </div>
            </div>
          }
        />
        
        <Route path="/buyer" element={<Buyer />} />
        <Route path= "/sellerpre" element = {<Sellerpre />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/success" element={<Success />} />
        <Route path="/addproperties" element={<Add />} />
      </Routes>
    </div>
  );
}

export default App;
