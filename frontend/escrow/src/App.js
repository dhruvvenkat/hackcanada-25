// App.js
import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

// 引入 Buyer、Seller 两个页面组件
import Buyer from './buyer';
import Seller from './seller';
import Success from './success';

function App() {
  const [walletAddress, setWalletAddress] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [error, setError] = useState('');

  // React Router 提供的钩子，用于在函数里实现编程式导航
  const navigate = useNavigate();

  const handleConnectWallet = async () => {
    try {
      if (!window.ethereum) {
        // Open MetaMask download page in new tab
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
    // 1. 检查是否连接了钱包
    if (!walletAddress) {
      setError('Please connect your wallet first');
      return;
    }
    // 2. 检查是否选择了角色
    if (!selectedRole) {
      setError('Please select a role');
      return;
    }

    console.log('Connected wallet:', walletAddress);
    console.log('Selected role:', selectedRole);

    // 3. 根据角色跳转到对应页面
    if (selectedRole === 'seller') {
      navigate('/seller');
    } else if (selectedRole === 'buyer') {
      navigate('/buyer');
    }
  };

  return (
    <div className="App">
      <h1>Real Estate Escrow Service</h1>

      {/* 
        这里相当于“主页面”或者“登录页面”，
        只有在 path="/" 时才会显示 
      */}
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
        {/* 
          当路径是 "/buyer" 时，渲染 Buyer 组件 
        */}
        <Route path="/buyer" element={<Buyer />} />
        {/* 
          当路径是 "/seller" 时，渲染 Seller 组件 
        */}
        <Route path="/seller" element={<Seller />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;
