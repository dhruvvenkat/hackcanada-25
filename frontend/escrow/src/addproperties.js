import React, { useState, useEffect } from 'react';
import './App.css';

function Add() {
  const [formData, setFormData] = useState({
    address: '',
    postalCode: ''
  });
  const [generatedCode, setGeneratedCode] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (formData.address && formData.postalCode) {
      const parts = [
        Math.random().toString().slice(2, 4),
        Math.random().toString().slice(2, 5),
        Math.random().toString().slice(2, 5),
        Math.random().toString().slice(2, 4)
      ];
      setGeneratedCode(parts.join(':'));
    } else {
      setGeneratedCode('');
    }
  }, [formData.address, formData.postalCode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.address || !formData.postalCode) {
      setError('Please fill in all fields');
      return;
    }
    console.log('Form Data:', { ...formData, uniqueCode: generatedCode });
    alert('Submission successful!\nUnique Code: ' + generatedCode);
  };

  return (
    <div>
      <div className="glass-card">
        <h1 className="title">Property Registration</h1>
        
        <form onSubmit={handleSubmit} className="form-content">
          <div className="input-field">
            <label className="input-label">Property Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter full address"
              className="modern-input"
              required
            />
          </div>

          <div className="input-field">
            <label className="input-label">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              placeholder="Enter postal code"
              className="modern-input"
              required
            />
          </div>

          {generatedCode && (
            <div className="code-display animate-fade-in">
              <span className="code-label">Unique Identifier:</span>
              <span className="code-value">{generatedCode}</span>
            </div>
          )}

          {error && <div className="error-message animate-shake">{error}</div>}

          <button type="submit" className="submit-btn">
            <span className="btn-text">Register Property</span>
            <div className="hover-effect"></div>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Add;
