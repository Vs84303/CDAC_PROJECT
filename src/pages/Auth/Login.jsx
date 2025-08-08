import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/api';
import { AuthContext } from '../../context/AuthContext';
import { jwtDecode } from 'jwt-decode';



const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  // Form state
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const getRedirectPath = (role) => {
    if (!role) return '/'; // fallback homepage/default

    const r = role.toLowerCase();
    if (r === 'admin') return '/dashboard/admin';
    if (r === 'employee') return '/dashboard/employee';
    if (r === 'user') return '/dashboard/user';
    return '/'; // fallback
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await api.post('/Auth/login', {
        email: credentials.email,
        password: credentials.password,
      });

      const { token } = response.data;

      const decoded = jwtDecode(token);
      console.log('Decoded token:', decoded);

      const rolesFromToken =
        decoded.roles ||
        decoded.role ||
        decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] ||
        [];

      const rolesArray = Array.isArray(rolesFromToken)
        ? rolesFromToken
        : [rolesFromToken];

      if (rolesArray.length === 0) {
        setError('No role assigned to user. Contact administrator.');
        setIsLoading(false);
        return;
      }

      const userRole = rolesArray[0];

      login(token, userRole);

      navigate(getRedirectPath(userRole));
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Login failed. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div style={containerStyle}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
          required
          autoComplete="email"
          disabled={isLoading}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
          autoComplete="current-password"
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      {error && <p style={{ color: 'red', marginTop: 10 }}>{error}</p>}
    </div>
  );
};

const containerStyle = {
  maxWidth: '400px',
  margin: '100px auto',
  textAlign: 'center',
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
};

export default Login;
