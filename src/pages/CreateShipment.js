import React, { useState } from "react";

function CreateShipment() {
  const [form, setForm] = useState({
    from: '', to: '', weight: '', size: '', description: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send to API
    alert("Shipment created!\n" + JSON.stringify(form, null, 2));
  };

  const labelStyle = { fontWeight: 'bold', marginBottom: '0.3rem' };
  const inputStyle = { width: '100%', padding: '7px', marginBottom: '1.2rem', borderRadius: '4px', border: '1px solid #ccc' };

  return (
    <div style={{ maxWidth: '510px', margin: '3rem auto', background: '#fff', boxShadow: '0 2px 12px #0002', borderRadius: '12px', padding: '2rem' }}>
      <h2 style={{ marginBottom: '1rem', color: '#0d6efd' }}>Create Shipment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label style={labelStyle}>From</label>
          <input name="from" style={inputStyle} value={form.from} onChange={handleChange} required />
        </div>
        <div>
          <label style={labelStyle}>To</label>
          <input name="to" style={inputStyle} value={form.to} onChange={handleChange} required />
        </div>
        <div>
          <label style={labelStyle}>Weight (kg)</label>
          <input name="weight" style={inputStyle} value={form.weight} onChange={handleChange} required type="number" min="0" />
        </div>
        <div>
          <label style={labelStyle}>Size (cm)</label>
          <input name="size" style={inputStyle} value={form.size} onChange={handleChange} required />
        </div>
        <div>
          <label style={labelStyle}>Description</label>
          <input name="description" style={inputStyle} value={form.description} onChange={handleChange} />
        </div>
        <button style={{ padding: '10px 28px', background: '#0d6efd', border: 'none', color: '#fff', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>Create Shipment</button>
      </form>
    </div>
  );
}
export default CreateShipment;
