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
    else {
      alert("Login failed, try again")
    }
  };

  return (
    <div className="App">
      <div className="login-container">
        <div className="login-form">
          <h2>Enter the Information</h2>
          <form onSubmit={(e) => handleSubmit(e, 'Seller')}>
            <label>House ID</label>
            <input name="email" required />
            <label>User ID for Seller</label>
            <input type="password" name="password" required />
            <button type="submit">Enter</button>
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