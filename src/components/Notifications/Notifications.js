// src/components/Notifications/Notifications.js
import React, { useState, useEffect } from "react";

const mockNotifications = [
  { id: 1, title: "Parcel Delivered", message: "Your parcel #123456 has been delivered.", read: false, date: "2025-08-06" },
  { id: 2, title: "Delayed Shipment", message: "Parcel #789101 delayed due to weather.", read: true, date: "2025-08-04" },
  { id: 3, title: "Reward Earned", message: "You earned 50 points on your last shipment.", read: false, date: "2025-07-30" },
];

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Replace with API fetch of notifications
    setNotifications(mockNotifications);
  }, []);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif))
    );
    // TODO: call backend to mark notification as read
  };

  return (
    <section style={notificationsSectionStyle}>
      <h2>Notifications</h2>
      {notifications.length === 0 && <p>No notifications.</p>}
      <ul style={notificationsListStyle}>
        {notifications.map((notif) => (
          <li key={notif.id} style={{ ...notificationItemStyle, backgroundColor: notif.read ? "#f0f0f0" : "#e0f7ff" }}>
            <strong>{notif.title}</strong> <small>({notif.date})</small>
            <p>{notif.message}</p>
            {!notif.read && (
              <button onClick={() => markAsRead(notif.id)} style={markReadBtnStyle}>
                Mark as read
              </button>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

const notificationsSectionStyle = {
  maxWidth: "700px",
  margin: "2rem auto",
  backgroundColor: "#fff",
  padding: "2rem",
  borderRadius: "16px",
  boxShadow: "0 2px 10px #eef",
};

const notificationsListStyle = {
  listStyleType: "none",
  padding: 0,
};

const notificationItemStyle = {
  padding: "1rem",
  marginBottom: "1rem",
  borderRadius: "8px",
};

const markReadBtnStyle = {
  background: "#09c4ed",
  color: "#fff",
  border: "none",
  padding: "0.3em 1em",
  borderRadius: "20px",
  cursor: "pointer",
};

export default Notifications;
