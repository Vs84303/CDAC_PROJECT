// src/components/Support/Support.js
import React, { useState } from "react";

const Support = () => {
  const [form, setForm] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const faqList = [
    { q: "How do I track my parcel?", a: "Use the Tracking feature and enter your tracking number." },
    { q: "How can I change delivery address?", a: "Contact support with your order details ASAP." },
    { q: "What payment methods are accepted?", a: "We accept all major credit cards and PayPal." },
  ];

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (!form.email || !form.subject || !form.message) {
      setError("Please fill in all fields.");
      return;
    }

    // TODO: Submit form to backend support or feedback API
    setSubmitted(true);
  };

  return (
    <section style={supportSectionStyle}>
      <h2>Support</h2>

      {!submitted && (
        <form onSubmit={handleSubmit} style={formStyle}>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Submit</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      )}

      {submitted && <p style={{ color: "#09c4ed" }}>Thank you for contacting support. We will get back to you shortly.</p>}

      <div style={{ marginTop: "2rem" }}>
        <h3>Frequently Asked Questions</h3>
        <ul>
          {faqList.map((faq, idx) => (
            <li key={idx}>
              <strong>{faq.q}</strong>
              <p>{faq.a}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const supportSectionStyle = {
  maxWidth: "600px",
  margin: "2rem auto",
  padding: "2rem",
  backgroundColor: "#fff",
  borderRadius: "16px",
  boxShadow: "0 2px 10px #eef",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

export default Support;
