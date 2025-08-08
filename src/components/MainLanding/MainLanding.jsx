// src/components/MainLanding/MainLanding.jsx
import React, { useState } from 'react';

const MainLanding = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [message, setMessage] = useState(null);

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    // Here you can integrate real tracking logic
    setMessage(`Tracking info requested for: ${trackingNumber}`);
  };

  return (
    <section style={containerStyle}>
      <div style={leftSideStyle}>
        <h2 style={headingStyle}>Services</h2>

        <div style={servicesListStyle}>
          <button style={serviceButtonStyle}>Track</button>
          <button style={serviceButtonStyle}>Ship</button>
          <button style={serviceButtonStyle}>Quote</button>
        </div>

        <form onSubmit={handleTrackSubmit} style={trackingFormStyle}>
          <input
            type="text"
            placeholder="Enter Tracking Number"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            style={inputStyle}
            required
          />
          <button type="submit" style={trackButtonStyle}>
            Track
          </button>
        </form>

        {message && <p style={messageStyle}>{message}</p>}
      </div>

      <div style={rightSideStyle}>
        <img
          src="/image.jpg"
          alt="Person holding parcels"
          style={imageStyle}
        />
      </div>
    </section>
  );
};

const containerStyle = {
  display: 'flex',
  maxWidth: '1100px',
  margin: '2rem auto',
  padding: '0 1rem',
  gap: '2rem',
  alignItems: 'center',
};

const leftSideStyle = {
  flex: 1,
  backgroundColor: '#ffffff',
  padding: '2rem',
  borderRadius: '16px',
  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
};

const headingStyle = {
  color: '#09c4ed',
  fontWeight: '700',
  fontSize: '2rem',
  marginBottom: '0.5rem',
};

const servicesListStyle = {
  display: 'flex',
  gap: '1rem',
  marginBottom: '1rem',
};

const serviceButtonStyle = {
  flex: 1,
  padding: '12px 0',
  backgroundColor: '#09c4ed',
  color: 'white',
  border: 'none',
  borderRadius: '25px',
  fontWeight: '600',
  cursor: 'pointer',
  fontSize: '1rem',
  boxShadow: '0 2px 6px rgba(0, 196, 237, 0.5)',
};

const trackingFormStyle = {
  display: 'flex',
  gap: '1rem',
};

const inputStyle = {
  flex: 1,
  padding: '12px 16px',
  borderRadius: '25px',
  border: '1px solid #ccc',
  fontSize: '1rem',
  outline: 'none',
};

const trackButtonStyle = {
  padding: '12px 24px',
  backgroundColor: '#09c4ed',
  color: 'white',
  border: 'none',
  borderRadius: '25px',
  fontWeight: '600',
  cursor: 'pointer',
  fontSize: '1rem',
  boxShadow: '0 2px 6px rgba(0, 196, 237, 0.5)',
};

const messageStyle = {
  color: '#09c4ed',
  fontWeight: '600',
  marginTop: '0.5rem',
};

const rightSideStyle = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
};

const imageStyle = {
  maxWidth: '100%',
  borderRadius: '20px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
};

export default MainLanding;
