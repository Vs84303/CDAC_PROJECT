import React, { useState } from "react";
import Shipping from "../components/Shipping/shipping";
import Tracking from "../components/Tracking/Tracking";
import Support from "../components/Support/Support";
import Rewards from "../components/Rewards/Rewards";
import Notifications from "../components/Notifications/Notifications";
import Login from './Auth/Login';


const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // toggle to hide login on success
  const [showLogin, setShowLogin] = useState(false); // controls modal/section visibility

  // Optionally, you might manage login state globally via context or redux
  // Here, just basic local state for demo.

  return (
    <div style={{ maxWidth: 1200, margin: "auto" }}>
      <header style={{ textAlign: "center", margin: "2rem 0" }}>
        <h1>Welcome to RapidReach Courier Service</h1>
        {!isLoggedIn && (
          <button onClick={() => setShowLogin(true)} style={buttonStyle}>
            Log In / Sign Up
          </button>
        )}
      </header>

      {showLogin && !isLoggedIn && (
        <section>
          <Login
            onLoginSuccess={() => {
              setIsLoggedIn(true);
              setShowLogin(false);
            }}
            // Pass any props needed for Login component
          />
        </section>
      )}

      {isLoggedIn && (
        <main>
          <Shipping />
          <Tracking />
          <Support />
          <Rewards />
          <Notifications />
        </main>
      )}

      {!isLoggedIn && !showLogin && (
        <section>
          <Shipping />
          <Tracking />
          <Support />
          <Rewards />
          <Notifications />
        </section>
      )}
    </div>
  );
};

const buttonStyle = {
  background: "#09c4ed",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "25px",
  cursor: "pointer",
  fontWeight: "bold",
};

export default Home;
