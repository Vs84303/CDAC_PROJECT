import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Example NavBar component
const NavBar = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <nav style={navBarStyle}>
      <div style={logoStyle}>
        <Link to="/" style={logoLinkStyle}>RapidReach</Link>
      </div>
      <ul style={navLinksStyle}>
        <li><Link to="/shipping" style={linkStyle}>Shipping</Link></li>
        <li><Link to="/tracking" style={linkStyle}>Tracking</Link></li>
        <li><Link to="/support" style={linkStyle}>Support</Link></li>
        <li><Link to="/notifications" style={linkStyle}>Notifications</Link></li>
        <li><Link to="/rewards" style={linkStyle}>Rewards</Link></li>
      </ul>
      <div>
        {isLoggedIn ? (
          <button onClick={onLogout} style={buttonStyle}>Logout</button>
        ) : (
          <button onClick={handleLoginClick} style={buttonStyle}>Login</button>
        )}
      </div>
    </nav>
  );
};

const navBarStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#09c4ed',
  padding: '0 20px',
  height: '60px',
  color: 'white',
  boxShadow: '0 1px 6px rgba(0,0,0,0.12)',
};

const logoStyle = {
  fontWeight: 'bold',
  fontSize: '1.6rem',
};

const logoLinkStyle = {
  color: 'white',
  textDecoration: 'none',
};

const navLinksStyle = {
  listStyle: 'none',
  display: 'flex',
  gap: '20px',
  margin: 0,
  padding: 0,
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: '500',
};

const buttonStyle = {
  backgroundColor: 'white',
  color: '#09c4ed',
  border: 'none',
  padding: '8px 16px',
  borderRadius: '20px',
  cursor: 'pointer',
  fontWeight: 'bold',
};

export default NavBar;
