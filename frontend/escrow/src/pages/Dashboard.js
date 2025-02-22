// src/pages/Dashboard.js

import { useState } from "react"; // Import useState hook for state management
import { submitTrade } from "../services/contractService"; // Import function to submit trade to backend

function Dashboard() {
  const [tradeKey, setTradeKey] = useState(""); // State to store the trade key input by the user

  const handleSubmit = async () => {
    const response = await submitTrade(tradeKey); // Call backend service to submit trade
    const handleDownloadKey = async () => {
        window.location.href = "YOUR_BACKEND_API/download-key";
      };
      <button onClick={handleDownloadKey}>Download Key</button>;
    if (response.success) { // Check if the trade was submitted successfully
      alert("Trade submitted! Downloading credentials..."); // Show success alert
      window.location.href = response.downloadLink; // Redirect to download credentials
    } else {
      alert("Failed to submit trade"); // Show failure alert if trade submission fails
    }
  };

  return (
    <div>
      <h2>Trade Dashboard</h2> {/* Display dashboard heading */}
      <input type="text" placeholder="Enter Trade Key" onChange={(e) => setTradeKey(e.target.value)} /> {/* Input for trade key */}
      <button onClick={handleSubmit}>Submit Trade</button> {/* Button to submit trade */}
    </div>
  );
}

export default Dashboard; // Export Dashboard component for use in the application