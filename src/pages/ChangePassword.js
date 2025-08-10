import React, { useState } from "react";

function ChangePassword() {
  const [form, setForm] = useState({ oldPassword: '', newPassword: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: Call API to change password
    alert("Password updated!");
  };

  return (
    <div style={{ maxWidth: '380px', margin: '3rem auto', background: '#fff', boxShadow: '0 2px 12px #0002', borderRadius: '12px', padding: '2rem' }}>
      <h2 style={{ marginBottom: '1rem', color: '#0d6efd' }}>Change Password</h2>
      <form onSubmit={handleSubmit}>
        <input name="oldPassword" type="password" placeholder="Old Password" value={form.oldPassword} onChange={handleChange} style={{ marginBottom: '1rem', ...inputStyle }} required />
        <input name="newPassword" type="password" placeholder="New Password" value={form.newPassword} onChange={handleChange} style={inputStyle} required />
        <button style={{ padding: '10px 24px', background: '#0d6efd', border: 'none', color: '#fff', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>Update Password</button>
      </form>
    </div>
  );
}

const inputStyle = { width: '100%', padding: '7px', borderRadius: '5px', border: '1px solid #ccc' };
export default ChangePassword;
