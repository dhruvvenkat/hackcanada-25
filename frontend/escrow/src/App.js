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
























// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [role, setRole] = useState(null);
//   const [welcomeMessage, setWelcomeMessage] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const email = event.target.email.value;
//     const password = event.target.password.value;
//     const userRole = event.target.role.value;
    
//     if (email && password) {
//       setRole(userRole);
//       setWelcomeMessage(`Welcome, ${userRole}! You are now logged in.`);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Real Estate Escrow Service</h1>
      
//       <div className="login-container">
//         <div className="login-form">
//           <h2>User Login</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label>Enter Your Wallet Credentials</label>
//               <input type="email" name="email" required />
//             </div>
            
//             <div className="form-group">
//               <label>Password:</label>
//               <input type="password" name="password" required />
//             </div>

//             <div className="form-group">
//               <label>Role:</label>
//               <select name="role" required>
//                 <option value="">Select Role</option>
//                 <option value="Buyer">Buyer</option>
//                 <option value="Seller">Seller</option>
//               </select>
//             </div>

//             <button type="submit" className="submit-btn">Login</button>
//           </form>
//         </div>
//       </div>

//       {welcomeMessage && (
//         <div className="welcome-message">
//           <p>{welcomeMessage}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;











// import './App.css';
// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [role, setRole] = useState(null);
//   const [welcomeMessage, setWelcomeMessage] = useState('');

//   const handleSubmit = (event, userRole) => {
//     event.preventDefault();
//     const email = event.target.email.value;
//     const password = event.target.password.value;
//     if (email && password) {
//       setRole(userRole);
//       setWelcomeMessage(`Welcome, ${userRole}! You are now logged in.`);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Real Estate Escrow Service</h1>
//       <div className="login-container">
//         <div className="login-form">
//           <h2>Buyer Login</h2>
//           <form onSubmit={(e) => handleSubmit(e, 'Buyer')}>
//             <label>Email:</label>
//             <input type="email" name="email" required />
//             <label>Password:</label>
//             <input type="password" name="password" required />
//             <button type="submit">Login as Buyer</button>
//           </form>
//         </div>

//         <div className="login-form">
//           <h2>Login with your Wallet</h2>
//           <form onSubmit={(e) => handleSubmit(e, 'Seller')}>
//             <label>Email:</label>
//             <input type="email" name="email" required />
//             <label>Password:</label>
//             <input type="password" name="password" required />
//             <button type="submit">Login</button>
//           </form>
//         </div>
//       </div>

//       {welcomeMessage && (
//         <div className="welcome-message">
//           <p>{welcomeMessage}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// //branch test