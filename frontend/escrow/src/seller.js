import './App.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Seller() {
  const navigate = useNavigate();
  const [error, setError] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { houseId, sellerId, houseAdd } = Object.fromEntries(formData);

    // Validation logic (replace with actual API call)
    if (houseId === '123' && sellerId === 'abc' && houseAdd === '3k') {
      navigate('/success');
    } else {
      setError('Verification failed: Please check your information and try again.');
    }
  };

  return (
<<<<<<< HEAD
    <div className="seller-container">
      <div className="seller-card">
        <header className="seller-header">
          <h2>Welcome, Seller</h2>
          <p>Please enter your property information</p>
        </header>

        <form className="seller-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="houseId">House ID</label>
            <input 
              id="houseId"
              name="houseId" 
              type="text" 
              required 
              placeholder="Enter house ID"
            />
          </div>

          <div className="form-group">
            <label htmlFor="sellerId">Seller ID</label>
            <input
              id="sellerId"
              name="sellerId"
              type="text"
              required
              placeholder="Enter seller ID"
            />
          </div>

          <div className="form-group">
            <label htmlFor="houseAdd">House Address</label>
            <input
              id="houseAdd"
              name="houseAdd"
              type="text"
              required
              placeholder="Enter full address"
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="submit-button">
            Verify Information
          </button>
        </form>
      </div>
=======
    <div className="App">
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
  

          <p>Welcome, Seller</p>

>>>>>>> 8afbd243222f302dce5314189721b4078e832f17
    </div>
  );
}

export default Seller;
