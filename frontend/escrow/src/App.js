import React, { useState } from 'react';
import './App.css';

function App() {
  const [walletAddress, setWalletAddress] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [error, setError] = useState('');

  const handleConnectWallet = async () => {
    try {
      if (!window.ethereum) {
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
    if (!selectedRole) {
      setError('Please select a role');
      return;
    }
    
    console.log('Connected wallet:', walletAddress);
    console.log('Selected role:', selectedRole);
  };

  return (
    <div className="App">
      <h1>Real Estate Escrow Service</h1>
      
      <div className="login-container">
        <div className="button-group">
          <button 
            className={`connect-button ${walletAddress ? 'connected' : ''}`}
            onClick={handleConnectWallet}
          >
            {walletAddress ? 
              `✔ Connected: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 
              'Connect MetaMask'
            }
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
    </div>
  );
}

export default App;













// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [walletAddress, setWalletAddress] = useState('');
//   const [error, setError] = useState('');

//   const handleConnectWallet = async () => {
//     try {
//       if (!window.ethereum) {
//         window.open('https://metamask.io/download/', '_blank');
//         setError('MetaMask not installed - redirecting to download page');
//         return;
//       }

//       const accounts = await window.ethereum.request({ 
//         method: 'eth_requestAccounts' 
//       });
      
//       setWalletAddress(accounts[0]);
//       setError('');
//     } catch (err) {
//       setError('Error connecting to wallet: ' + err.message);
//     }
//   };

//   const handleSubmit = () => {
//     if (!walletAddress) {
//       setError('Please connect your wallet first');
//       return;
//     }
    
//     // Handle submission logic here
//     console.log('Connected wallet:', walletAddress);
//   };


//   return (
//     <div className="App">
//       <h1>Real Estate Escrow Service</h1>
      
//       <div className="login-container">
//         <div className="button-group">
//           <button 
//             className={`connect-button ${walletAddress ? 'connected' : ''}`}
//             onClick={handleConnectWallet}
//           >
//             {walletAddress ? 
//               `✔ Connected: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 
//               'Connect MetaMask'
//             }
//           </button>
//           <button 
//             className="submit-button"
//             onClick={handleSubmit}
//             disabled={!walletAddress}
//           >
//             Continue
//           </button>
//           {error && <div className="error-message">{error}</div>}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;