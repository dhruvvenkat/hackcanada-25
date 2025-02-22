import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';

const App = () => {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const loadWeb3 = async () => {
      const provider = await detectEthereumProvider();
      if (provider) {
        const web3 = new Web3(provider);
        await provider.request({ method: 'eth_requestAccounts' });
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
      } else {
        setStatus('Please install MetaMask!');
      }
    };

    loadWeb3();
  }, []);

  const handleEscrow = async () => {
    if (contract && account) {
      // Add your smart contract interaction code here
      setStatus('Escrow transaction completed!');
    } else {
      setStatus('Contract not loaded or account not connected.');
    }
  };

  return (
    <div>
      <h1>Escrow DApp</h1>
      {account ? (
        <p>Connected Account: {account}</p>
      ) : (
        <p>Connecting to MetaMask...</p>
      )}
      <button onClick={handleEscrow}>Initiate Escrow</button>
      <p>{status}</p>
    </div>
  );
};

export default App;