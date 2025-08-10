import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const styles = {
    navbar: {
      background: '#0d6efd',
      color: '#fff',
      padding: '0.8rem 1.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: '1.2rem'
    },
    navLinks: {
      listStyle: 'none',
      display: 'flex',
      margin: 0,
      padding: 0
    },
    navItem: {
      marginLeft: '15px'
    },
    logout: {
      marginLeft: '15px',
      cursor: 'pointer',
      color: '#ffe5e5'
    }
  };

  return (
    <nav style={styles.navbar}>
      <Link style={styles.link} to="/">📦 RapidReach</Link>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}><Link style={styles.link} to="/">Home</Link></li>
        {!token && <li style={styles.navItem}><Link style={styles.link} to="/register">Register</Link></li>}
        {!token && <li style={styles.navItem}><Link style={styles.link} to="/login">Login</Link></li>}
        {token && <li style={styles.navItem}><Link style={styles.link} to="/dashboard">Dashboard</Link></li>}
        {token && <li style={styles.logout} onClick={handleLogout}>Logout</li>}
      </ul>
    </nav>
  );
}
export default Navbar;
