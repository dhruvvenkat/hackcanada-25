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
    <div>
      <div className = "glass-card">
        <header className="seller-header">
          <h2>Welcome, Seller</h2>
          <h3>Please enter your property information</h3>
        </header>

        <form className="seller-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="houseId">Property ID</label>
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
            <label htmlFor="houseAdd">Property Address</label>
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
    </div>
  );
}

export default Seller;
