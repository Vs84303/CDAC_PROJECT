import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  const styles = {
    sidebar: {
      width: '220px',
      height: '100%',
      background: '#0d6efd',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      paddingTop: '1rem',
      position: 'sticky',
      top: '48px' // below navbar height
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      padding: '1rem 1.5rem',
      margin: '0.3rem 0',
      fontSize: '1rem',
      borderRadius: '6px'
    },
    active: {
      background: 'rgba(255,255,255,0.18)'
    }
  };

  return (
    <div style={styles.sidebar}>
      <NavLink to="/dashboard/create-shipment"
        style={({ isActive }) => ({ ...styles.link, ...(isActive ? styles.active : {}) })}>
        Create Shipment
      </NavLink>
      <NavLink to="/dashboard/profile"
        style={({ isActive }) => ({ ...styles.link, ...(isActive ? styles.active : {}) })}>
        Profile
      </NavLink>
      <NavLink to="/dashboard/shipment-history"
        style={({ isActive }) => ({ ...styles.link, ...(isActive ? styles.active : {}) })}>
        View Shipment History
      </NavLink>
      <NavLink to="/dashboard/change-password"
        style={({ isActive }) => ({ ...styles.link, ...(isActive ? styles.active : {}) })}>
        Change Password
      </NavLink>
    </div>
  );
}
export default Sidebar;