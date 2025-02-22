/**
 * Escrow System - Frontend Documentation
 * --------------------------------------
 * This React-based frontend handles user authentication and trade interactions
 * for a blockchain escrow system. Users can log in, enter trade details, and 
 * interact with a backend smart contract system.
 * 
 * Features:
 * - User authentication (Login)
 * - Trade submission
 * - API communication with the backend
 * - Modular component structure
 * 
 * Setup Instructions:
 * 1. Ensure Node.js is installed on your machine.
 * 2. Clone the repository: `git clone <repo-url>`
 * 3. Navigate to the frontend directory: `cd frontend`
 * 4. Install dependencies: `npm install`
 * 5. Start the development server: `npm start`
 * 6. Access the application at `http://localhost:3000`
 * 
 * Directory Structure:
 * - `src/components/` : Reusable UI elements (buttons, inputs, modals, etc.)
 * - `src/pages/` : Different pages of the application (Login, Dashboard, Trade Submission)
 * - `src/services/` : API service functions for backend communication
 * - `src/App.js` : Main application file with routing
 * - `src/index.js` : Entry point for React application
 * 
 * File: src/pages/Login.js
 * ---------------------------
 * This file handles user authentication by collecting email and password inputs
 * and sending them to the backend for validation. On success, a token is stored
 * and the user is redirected to the dashboard.
 */

// src/pages/Login.js
import { useState } from "react";
import { loginUser } from "../services/authService";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /**
   * Handles user login by sending credentials to the backend.
   * If authentication is successful, a token is stored and the user is redirected.
   */
  const handleLogin = async () => {
    const response = await loginUser(email, password);
    if (response.success) {
      localStorage.setItem("token", response.token); // Store token
      window.location.href = "/dashboard"; // Redirect
    } else {
      alert("Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;