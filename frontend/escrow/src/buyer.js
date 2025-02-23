import './App.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Seller() {
  const navigate = useNavigate();
  const [error, setError] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.target);
    const { houseId, sellerId, houseAdd } = Object.fromEntries(formData);

    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (houseId === '123' && sellerId === 'abc' && houseAdd === '3k') {
        navigate('/success');
      } else {
        setError('Verification failed: Please check your information and try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Verifying...' : 'Verify Information'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Seller;