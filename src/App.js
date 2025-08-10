import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CreateShipment from './pages/CreateShipment';
import Profile from './pages/Profile';
import ShipmentHistory from './pages/ShipmentHistory';
import ChangePassword from './pages/ChangePassword';
import Support from './pages/Support';
import Shipping from './pages/Shipping';
import Tracking from './pages/Tracking';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import AboutUs from './components/Footer/AboutUs';
import Privacy from './components/Footer/PrivacyPolicy';
import Terms from './components/Footer/TermsAndConditions';


function App() {
  return (
    <div className="app">
      <Navbar />
      <main style={{minHeight: '80vh'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/support" element={<Support />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/PrivacyPolicy" element={<Privacy />} />
          <Route path="/TermsAndConditions" element={<Terms />} />
       <Route path="/forgot-password" element={<ForgotPassword />} />
<Route path="/reset-password" element={<ResetPassword />} />
 <Route path="/" element={<Navigate to="/dashboard/create-shipment" />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="create-shipment" element={<CreateShipment />} />
        <Route path="profile" element={<Profile />} />
        <Route path="shipment-history" element={<ShipmentHistory />} />
        <Route path="change-password" element={<ChangePassword />} />
      </Route>
 </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
