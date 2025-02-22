import './App.css';
import React, { useState } from 'react';
import './App.css';

function Seller() {
  return (
    <div className="App">
      <div className="login-container">
        <div className="login-form">
          <h2>Enter the Information</h2>
            <label>House ID</label>
            <input name="email" required />
            <label>User ID for Seller</label>
            <input type="password" name="password" required />
            <label>House Address</label>
            <input name="password" required />
            <button type="submit">Enter</button>
        </div>
      </div>

          <p>Welcome, Seller</p>

    </div>
  );
}

export default Seller;