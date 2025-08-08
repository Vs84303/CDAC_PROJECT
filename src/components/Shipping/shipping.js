// src/components/Shipping/Shipping.js
import React, { useState } from "react";

// Example form, update fields/labels as per your actual model.
const Shipping = () => {
  const [form, setForm] = useState({
    senderAddress: "",
    receiverAddress: "",
    parcelWeight: "",
    serviceType: "",
    deliveryBranch: ""
  });
  const [message, setMessage] = useState(null);

  // This would call your backend shipping API
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Parcel request submitted! (Integrate with backend here)");
    // TODO: Replace with actual API call using axios/fetch, etc.
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section style={shippingSectionStyle}>
      <h2>Book a Shipment</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          name="senderAddress"
          placeholder="Sender Address"
          value={form.senderAddress}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="receiverAddress"
          placeholder="Receiver Address"
          value={form.receiverAddress}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          min="0"
          name="parcelWeight"
          placeholder="Parcel Weight (kg)"
          value={form.parcelWeight}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="serviceType"
          placeholder="Service Type (e.g., Express/Standard)"
          value={form.serviceType}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="deliveryBranch"
          placeholder="Delivery Branch"
          value={form.deliveryBranch}
          onChange={handleChange}
        />
        <button type="submit">Create Shipment</button>
      </form>
      {message && <div style={{ color: "#09c4ed", marginTop: 12 }}>{message}</div>}
    </section>
  );
};

const shippingSectionStyle = {
  padding: "2rem",
  borderRadius: "16px",
  background: "#fff",
  boxShadow: "0 2px 10px #eef",
  maxWidth: "500px",
  margin: "2rem auto"
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem"
};

export default Shipping;
