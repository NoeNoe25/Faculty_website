// src/pages/Appointment.jsx
import React from 'react';
import { FaCalendarCheck, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/ServiceRequest.css';
import { usePhrases } from '../i18n/LanguageContext';
import phrases from '../i18n/content/serviceRequest';
import { OFFICE_EMAIL, APPOINTMENT_BOOKING_URL } from '../config/site';

const Appointment = () => {
  const tx = usePhrases(phrases);

  return (
    <div className="page-service">
      <div className="service-container">
        <header className="service-header">
          <FaCalendarCheck className="service-header-icon" />
          <h1>{tx('Schedule Appointment')}</h1>
          <p>
            {tx('Book a meeting with our office about admissions, programs, documents or partnerships. Pick a free time slot below and you will receive a confirmation email.')}
          </p>
        </header>

        {APPOINTMENT_BOOKING_URL ? (
          <section className="service-card service-booking">
            <iframe src={APPOINTMENT_BOOKING_URL} title={tx('Appointment booking calendar')} loading="lazy" />
            <a className="service-booking-link" href={APPOINTMENT_BOOKING_URL} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt /> {tx('Open the booking page in a new tab')}
            </a>
          </section>
        ) : (
          <section className="service-card">
            <div className="service-message" role="status">
              <FaEnvelope />
              <div>
                <h2>{tx('Online booking coming soon')}</h2>
                <p>{tx('Please email us with your preferred dates and times:')} <a href={`mailto:${OFFICE_EMAIL}`}>{OFFICE_EMAIL}</a></p>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Appointment;
