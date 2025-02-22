// Buyer.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Buyer() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Grab form values
    const houseId = event.target.houseId.value;
    const sellerId = event.target.sellerId.value;

    // Simple example: compare with hard-coded values
    // Adjust to your real logic as needed
    const correctHouseId = '123';     
    const correctSellerId = 'abc';

    if (houseId === correctHouseId && sellerId === correctSellerId) {
      navigate('/success');
    } else {
      alert('Login failed: House ID or User ID for Seller is incorrect.');
    }
  };

  return (
    <div className="App">
      <div className="login-container">
        <div className="login-form">
<<<<<<< Updated upstream
          <h2>Enter The Information</h2>
          <form onSubmit={(e) => handleSubmit(e, 'Buyer')}>
            <label>House ID</label>
            {/* change the type to fit coinbase wallet */}
            <input name="email" required />
            <label>User ID Of The Seller</label>
            <input type="password" name="password" required />
            <label>Address of the house</label>
            <input name="password" required />
            <button type="submit">Enter</button>
          </form>
        </div>

        {/* <div className="login-form">
=======
>>>>>>> Stashed changes
          <h2>Enter the Information</h2>
          {/* Wrap inputs in a <form> so we can handle onSubmit properly */}
          <form onSubmit={handleSubmit}>
            <label>House ID</label>
            <input name="houseId" required />
            
            <label>User ID for Seller</label>
            <input type="password" name="sellerId" required />
            
            <button type="submit">Enter</button>
          </form>
        </div>
      </div>
      
    </div>
  );
}

export default Buyer;
