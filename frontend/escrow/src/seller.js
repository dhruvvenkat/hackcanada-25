import './App.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Seller() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Grab form values
    const houseId = event.target.houseId.value;
    const sellerId = event.target.sellerId.value;
    const houseAdd = event.target.houseAdd.value;

    // Simple example: compare with hard-coded values
    // Adjust to your real logic as needed
    const correctHouseId = '123';     
    const correctSellerId = 'abc';
    const correctHouseAdd = "3k"

    if (houseId === correctHouseId && sellerId === correctSellerId && houseAdd === correctHouseAdd) {
      navigate('/success');
    } else {
      alert('Login failed: House ID or User ID for Seller is incorrect.');
    }
  };
  return (
    <div className="App">
      <div className="login-container">
        <div className="login-form">
          <h2>Enter the Information</h2>
          <form onSubmit={handleSubmit}>
            <label>House ID</label>
            <input name="houseId" required />
            <label>User ID for Seller</label>
            <input name="sellerId" required />
            <label>House Address</label>
            <input name="houseAdd" required />
            <button type="submit">Enter</button>
          </form>
        </div>
      </div>

          <p>Welcome, Seller</p>

    </div>
  );
}

export default Seller;