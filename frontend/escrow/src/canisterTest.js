import React, { useEffect, useState } from 'react';
import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory } from './declarations/EscrowDeed';
import detectEthereumProvider from '@metamask/detect-provider';

const EscrowDeedCanisterId = 'your-canister-id';

const App = () => {
  const [account, setAccount] = useState(null);
  const [escrowDeedActor, setEscrowDeedActor] = useState(null);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const loadWeb3 = async () => {
      const provider = await detectEthereumProvider();
      if (provider) {
        const web3 = new Web3(provider);
        await provider.request({ method: 'eth_requestAccounts' });
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);

        // Set up connection to ICP
        const agent = new HttpAgent();
        const escrowDeed = Actor.createActor(idlFactory, {
          agent,
          canisterId: EscrowDeedCanisterId,
        });
        setEscrowDeedActor(escrowDeed);
      } else {
        setStatus('Please install MetaMask!');
      }
    };

    loadWeb3();
  }, []);

  const handleEscrow = async () => {
    if (escrowDeedActor && account) {
      try {
        // Call your Motoko smart contract functions
        await escrowDeedActor.depositDeed(1); // Example tokenId
        setStatus('Escrow transaction completed!');
      } catch (error) {
        setStatus('Transaction failed: ' + error.message);
      }
    } else {
      setStatus('Contract not loaded or account not connected.');
    }
  };

  return (
    <div>
      <h1>Escrow DApp