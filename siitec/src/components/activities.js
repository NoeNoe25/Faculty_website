// src/components/Activities.js
import React from 'react';
import '../styles/components/Activities.css';
import { FiCalendar, FiUsers, FiArrowRight } from "react-icons/fi";
import stema from '../assets/albums/stema2018.webp';

const Activities = () => {
  const activities = [
    {
      title: "Research Labs Tour",
      image: stema,
      description: "Get an inside look at our state-of-the-art research facilities and cutting-edge equipment used by students and faculty for groundbreaking research.",
      // schedule: "Every Friday, 2:00 PM",
      // participants: "Open to all students",
      link: "/activities/research-labs"
    },
    {
      title: "Innovation Hackathons",
      image: stema,
      description: "Participate in exciting 24-hour coding challenges where students collaborate to solve real-world problems and showcase their technical skills.",
      // schedule: "Monthly - Check schedule",
      // participants: "Teams of 3-5 students",
      link: "/activities/hackathons"
    },
    {
      title: "Industry Speaker Series",
      image: stema,
      description: "Learn from industry leaders and professionals who share their experiences, insights, and career advice in our regular talk series.",
      // schedule: "Bi-weekly, Tuesdays",
      // participants: "All faculty and students",
      link: "/activities/speaker-series"
    }
  ];

  return (
    <section id="activities" className="section activities-section">
      <div className="container">
        <div className="section-title">
          <h2>Campus Activities</h2>
          <p>Engage with our vibrant community through various activities and events</p>
        </div>
        
        <div className="activities-list">
          {activities.map((activity, index) => (
            <div key={index} className={`activity-item ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="activity-image">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  loading="lazy"
                />
              </div>
              
              <div className="activity-content">
                <h3>{activity.title}</h3>
                <p className="activity-description">{activity.description}</p>
                
                {/* <div className="activity-details">
                  <div className="detail-item">
                    <FiCalendar className="detail-icon" />
                    <span>{activity.schedule}</span>
                  </div>
                  <div className="detail-item">
                    <FiUsers className="detail-icon" />
                    <span>{activity.participants}</span>
                  </div>
                </div> */}
                
                <a href={activity.link} className="btn btn-secondary">
                  <span>Learn More</span>
                  <FiArrowRight className="btn-icon" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;