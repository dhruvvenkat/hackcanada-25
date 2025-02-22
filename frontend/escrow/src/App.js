
import './App.css';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [role, setRole] = useState(null);
  const [welcomeMessage, setWelcomeMessage] = useState('');

  const handleSubmit = (event, userRole) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (email && password) {
      setRole(userRole);
      setWelcomeMessage(`Welcome, ${userRole}! You are now logged in.`);
    }
  };

  return (
    <div className="App">
      <h1>Real Estate Escrow Service</h1>
      <div className="login-container">
        <div className="login-form">
          <h2>Buyer Login</h2>
          <form onSubmit={(e) => handleSubmit(e, 'Buyer')}>
            <label>Email:</label>
            <input type="email" name="email" required />
            <label>Password:</label>
            <input type="password" name="password" required />
            <button type="submit">Login as Buyer</button>
          </form>
        </div>

        <div className="login-form">
          <h2>Seller Login</h2>
          <form onSubmit={(e) => handleSubmit(e, 'Seller')}>
            <label>Email:</label>
            <input type="email" name="email" required />
            <label>Password:</label>
            <input type="password" name="password" required />
            <button type="submit">Login as Seller</button>
          </form>
        </div>
      </div>

      {welcomeMessage && (
        <div className="welcome-message">
          <p>{welcomeMessage}</p>
        </div>
      )}
    </div>
  );
}

export default App;

//branch test