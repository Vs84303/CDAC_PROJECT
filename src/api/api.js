// src/api/api.js
import axios from 'axios';

// Replace with your actual backend API base URL during development
const API_BASE_URL = 'https://localhost:44342/api';

// Create an Axios instance for API calls
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Axios interceptor to attach JWT token to Authorization header if token exists in localStorage
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Example API call: Login user
export const login = async (credentials) => {
  try {
    const response = await api.post('/Auth/login', credentials);
    return response.data; // Assuming backend sends token and user info in response.data
  } catch (error) {
    throw error.response || error;
  }
};

// Example API call: Register new user
export const register = async (userData) => {
  try {
    const response = await api.post('/Auth/register', userData);
    return response.data;
  } catch (error) {
    throw error.response || error;
  }
};

// Example API call: Fetch employees (protected endpoint)
export const getEmployees = async () => {
  try {
    const response = await api.get('/Employees');
    return response.data;
  } catch (error) {
    throw error.response || error;
  }
};

// Add more API functions as needed for your features...

export default api;
