// sellerpre.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Sellerpre() {
  const navigate = useNavigate();

  return (
    <div className="Dash">
      <div className="login-container">
        <div className="bg" style={{ flexDirection: 'column', gap: '20px' }}>
				<h2>Seller Dashboard</h2>
					<button
            className="submit-button"
            onClick={() => navigate('/seller')}
          >
            Go to Seller Page
          </button>
          
          <button
            className="submit-button"
            onClick={() => navigate('/addproperties')}
          >
            Add New Property
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sellerpre;