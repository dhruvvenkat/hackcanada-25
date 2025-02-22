import React, { useState } from 'react';
import './App.css';

function App() {
  const [walletAddress, setWalletAddress] = useState('');
  const [error, setError] = useState('');

  const handleConnectWallet = async () => {
    try {
      if (!window.ethereum) {
        // Open MetaMask download page in new tab
        window.open('https://metamask.io/download/', '_blank');
        setError('MetaMask not installed - redirecting to download page');
        return;
      }

      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
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
    
    // Handle submission logic here
    console.log('Connected wallet:', walletAddress);
  };

  return (
    <div className="App">
      <h1>Real Estate Escrow Service</h1>
      
      <div className="login-container">
        <div className="wallet-card">
          <h2>Connect Your Wallet</h2>
          <button 
            className={`connect-button ${walletAddress ? 'connected' : ''}`}
            onClick={handleConnectWallet}
          >
            {walletAddress ? 
              `Connected: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 
              'Connect MetaMask'
            }
          </button>
        </div>

        {error && <div className="error-message">{error}</div>}

        <button 
          className="submit-button"
          onClick={handleSubmit}
          disabled={!walletAddress}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default App;