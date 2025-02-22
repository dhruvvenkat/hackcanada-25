import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [transactionTime] = useState(new Date());
  const [amount] = useState(
    Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000
  );

  return (
    <div className="App">
      <div className="transaction-container">
        <div className="success-animation">
          <div className="checkmark">✓</div>
          <h1>Successful Transaction</h1>
        </div>
        
        <div className="transaction-details">
          <div className="detail-item">
            <span className="detail-label">Time:</span>
            <span className="detail-value">
              {transactionTime.toLocaleTimeString()}
            </span>
          </div>
          
          <div className="detail-item">
            <span className="detail-label">Amount:</span>
            <span className="detail-value amount">
              ${amount.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;