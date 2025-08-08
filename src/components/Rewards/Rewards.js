// src/components/Rewards/Rewards.js
import React, { useState, useEffect } from "react";

const mockRewards = {
  pointsBalance: 350,
  transactions: [
    { id: 1, date: "2025-07-15", description: "Shipment bonus", points: 50 },
    { id: 2, date: "2025-06-30", description: "Referral bonus", points: 100 },
    { id: 3, date: "2025-06-10", description: "Redeemed discount", points: -30 },
  ],
};

const Rewards = () => {
  const [points, setPoints] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Replace with API call to fetch user's reward info
    setPoints(mockRewards.pointsBalance);
    setTransactions(mockRewards.transactions);
  }, []);

  return (
    <section style={rewardsSectionStyle}>
      <h2>Your Rewards</h2>
      <p>
        Current Points Balance: <strong>{points}</strong>
      </p>
      <h3>Transaction History</h3>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id}>
              <td>{tx.date}</td>
              <td>{tx.description}</td>
              <td style={{ color: tx.points > 0 ? "green" : "red" }}>{tx.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

const rewardsSectionStyle = {
  maxWidth: "700px",
  margin: "2rem auto",
  backgroundColor: "#fff",
  padding: "2rem",
  borderRadius: "16px",
  boxShadow: "0 2px 10px #eef",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
};

export default Rewards;
