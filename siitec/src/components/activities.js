// src/components/Activities.js
import React from 'react';
import '../styles/components/Activities.css';
import { FiCalendar, FiUsers } from "react-icons/fi";

const Activities = () => {
  const activities = [
    {
      title: "Research Labs Tour",
      description: "Weekly tours of our campus research facilities",
      schedule: "Every Friday, 2:00 PM",
      participants: "Open to all students"
    },
    {
      title: "Innovation Hackathons",
      description: "24-hour coding and innovation challenges",
      schedule: "Monthly - Check schedule",
      participants: "Teams of 3-5 students"
    },
    {
      title: "Industry Speaker Series",
      description: "Talks from leading tech industry professionals",
      schedule: "Bi-weekly, Tuesdays",
      participants: "All faculty and students"
    }
  ];

  return (
    <section id="activities" className="section activities-section">
      <div className="container">
        <div className="section-title">
          <h2>Campus Activities</h2>
          <p>Engage with our vibrant community through various activities</p>
        </div>
        <div className="activities-list">
          {activities.map((activity, index) => (
            <div key={index} className="activity-item card">
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
              <div className="activity-details">
                <span><FiCalendar size={20} /> {activity.schedule}</span>
                <span><FiUsers size={20} /> {activity.participants}</span>
              </div>
              <button className="btn btn-secondary">
                <span>Join Activity</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;