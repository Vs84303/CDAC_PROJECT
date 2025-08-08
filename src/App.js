import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';

import Home from './pages/Home';
import Login from './pages/Auth/Login';

import AdminDashboard from './pages/Admin/AdminDashboard';
import EmployeeDashboard from './pages/Employee/EmployeeDashboard';
import UserDashboard from './pages/User/UserDashboard';
import CourierRequestForm from './pages/User/CourierRequestForm';

import ProtectedRoute from './routes/ProtectedRoute';

const App = () => {
  // Basic login state --- in real app, replace with AuthContext or similar
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Example effect: check for auth token in localStorage on app load
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  // Logout handler clears token and sets state
  const handleLogout = () => {
    localStorage.removeItem('token');  // Remove auth token from storage
    setIsLoggedIn(false);
    // Optionally redirect user on logout here, e.g. navigate('/')
  };

  return (
    <Router>
      <NavBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
       <div>
      <MainLanding />
    </div>

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* Employee Routes */}
        <Route
          path="/employee"
          element={
            <ProtectedRoute allowedRoles={['employee']}>
              <EmployeeDashboard />
            </ProtectedRoute>
          }
        />

        {/* User Routes */}
        <Route
          path="/user"
          element={
            <ProtectedRoute allowedRoles={['user']}>
              <UserDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/user/courier-request"
          element={
            <ProtectedRoute allowedRoles={['user']}>
              <CourierRequestForm />
            </ProtectedRoute>
          }
        />

        {/* Catch-all */}
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
