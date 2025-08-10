import axios from 'axios';

// Base API URL — set in .env for flexibility
const API_URL = process.env.REACT_APP_API_URL || 'https://localhost:44324/api';

const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' }
});

// ================== AUTH APIs ==================

// Login
export const loginUser = (data) => api.post('/Auth/login', data);

// Register
export const registerUser = (data) => api.post('/Auth/register', data);

// Request a password reset link
export const requestPasswordReset = (email) =>
  api.post('/Auth/request-password-reset', { email });

// Verify if reset token is valid
export const verifyResetToken = (token) =>
  api.get(`/Auth/verify-reset-token?token=${token}`);

// Reset password with token
export const resetPassword = (token, newPassword) =>
  api.post('/Auth/reset-password', { token, newPassword });

// ================== SHIPMENT APIs ==================

export const createShipment = (token, shipment) =>
  api.post('/Shipments', shipment, {
    headers: { Authorization: `Bearer ${token}` }
  });

export const getShipments = (token) =>
  api.get('/Shipments', {
    headers: { Authorization: `Bearer ${token}` }
  });

export default api;
