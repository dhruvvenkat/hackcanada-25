import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    address: '',
    postalCode: ''
  });
  const [generatedCode, setGeneratedCode] = useState('');
  const [error, setError] = useState('');

  // Generate unique code when both fields are filled
  useEffect(() => {
    if (formData.address && formData.postalCode) {
      const parts = [
        Math.random().toString().slice(2, 4),  // 2 digits
        Math.random().toString().slice(2, 5),  // 3 digits
        Math.random().toString().slice(2, 5),  // 3 digits
        Math.random().toString().slice(2, 4)   // 2 digits
      ];
      setGeneratedCode(parts.join(':'));
    } else {
      setGeneratedCode('');
    }
  }, [formData.address, formData.postalCode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.address || !formData.postalCode) {
      setError('Please fill in all fields');
      return;
    }

    console.log('Form Data:', {
      ...formData,
      uniqueCode: generatedCode
    });
    alert('Submission successful!\nUnique Code: ' + generatedCode);
  };

  return (
    <div className="App">
      <h1>Real Estate Escrow Service</h1>
      
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="postalCode">Postal Code</label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              placeholder="Enter your postal code"
              required
            />
          </div>

          {generatedCode && (
            <div className="generated-code">
              Your Unique Code: <span>{generatedCode}</span>
            </div>
          )}

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="submit-button">
            Submit Address
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;