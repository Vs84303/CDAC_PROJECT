
import React, { useState } from "react";

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingInfo, setTrackingInfo] = useState(null);
  const [error, setError] = useState(null);

  // Mock fetch function. Replace with API call to backend tracking endpoint.
  const fetchTrackingInfo = async (number) => {
    // Example: replace this mock with real API call like:
    // const response = await api.get(`/tracking/${number}`);
    // setTrackingInfo(response.data);

    if (number === "123456") {
      return {
        status: "In Transit",
        history: [
          { date: "2025-08-01", location: "Origin Warehouse", details: "Parcel received" },
          { date: "2025-08-03", location: "Distribution Center", details: "Parcel processed" },
          { date: "2025-08-05", location: "On Truck", details: "Out for delivery" },
        ],
      };
    } else {
      throw new Error("Tracking number not found");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setTrackingInfo(null);

    try {
      const data = await fetchTrackingInfo(trackingNumber);
      setTrackingInfo(data);
    } catch (err) {
      setError(err.message || "Failed to fetch tracking data.");
    }
  };

  return (
    <section style={trackingSectionStyle}>
      <h2>Track Your Parcel</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          placeholder="Enter Tracking Number"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          required
        />
        <button type="submit">Track</button>
      </form>

      {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}

      {trackingInfo && (
        <div style={trackingInfoStyle}>
          <h3>Status: {trackingInfo.status}</h3>
          <h4>History:</h4>
          <ul>
            {trackingInfo.history.map((event, index) => (
              <li key={index}>
                <strong>{event.date}</strong> - {event.location} — {event.details}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

const trackingSectionStyle = {
  padding: "2rem",
  borderRadius: "16px",
  background: "#fff",
  boxShadow: "0 2px 10px #eef",
  maxWidth: "600px",
  margin: "2rem auto",
};

const formStyle = {
  display: "flex",
  gap: "1rem",
};

const trackingInfoStyle = {
  marginTop: "1.5rem",
  backgroundColor: "#f9faff",
  padding: "1rem",
  borderRadius: "8px",
};

export default Tracking;
