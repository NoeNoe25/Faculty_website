// src/pages/VisitRequest.jsx
import React, { useState } from 'react';
import { FaUsers, FaCalendarAlt, FaEnvelope, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import '../styles/ServiceRequest.css';
import { usePhrases } from '../i18n/LanguageContext';
import phrases from '../i18n/content/serviceRequest';
import { OFFICE_EMAIL, WEB3FORMS_ACCESS_KEY } from '../config/site';

const VISITOR_TYPES = ['School', 'University', 'Company / Industry', 'Government agency', 'Other'];
const VISIT_TIMES = ['Morning (9:00–12:00)', 'Afternoon (13:00–16:00)', 'Flexible'];

const EMPTY_FORM = {
  name: '',
  organization: '',
  visitorType: '',
  email: '',
  phone: '',
  lineId: '',
  preferredDate: '',
  alternateDate: '',
  preferredTime: '',
  groupSize: '',
  purpose: '',
};

// Visits need a few days to arrange, so the earliest selectable date is three days out.
const earliestVisitDate = () => {
  const date = new Date();
  date.setDate(date.getDate() + 3);
  return date.toISOString().slice(0, 10);
};

const VisitRequest = () => {
  const tx = usePhrases(phrases);
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const minDate = earliestVisitDate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Hidden field that people never see; bots that fill it are ignored by Web3Forms.
    const botcheck = event.target.elements.botcheck.checked;
    setStatus('sending');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Faculty visit request: ${form.organization} (${form.preferredDate})`,
          from_name: 'SIITEC website',
          replyto: form.email,
          botcheck,
          'Contact name': form.name,
          Organization: form.organization,
          'Visitor type': form.visitorType,
          Email: form.email,
          Phone: form.phone,
          'LINE ID': form.lineId || '-',
          'Preferred date': form.preferredDate,
          'Alternate date': form.alternateDate || '-',
          'Preferred time': form.preferredTime,
          'Group size': form.groupSize,
          Purpose: form.purpose,
        }),
      });
      const result = await response.json();
      if (!result.success) throw new Error(result.message);
      setStatus('success');
      setForm(EMPTY_FORM);
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="page-service">
      <div className="service-container">
        <header className="service-header">
          <FaUsers className="service-header-icon" />
          <h1>{tx('Faculty Visit Request')}</h1>
          <p>
            {tx('Schools, universities and organizations are welcome to visit our labs and research centers. Send us your details and our office will reply by email to confirm.')}
          </p>
        </header>

        <div className="service-layout">
          <section className="service-card">
            {status === 'success' ? (
              <div className="service-message success" role="status">
                <FaCheckCircle />
                <div>
                  <h2>{tx('Request sent')}</h2>
                  <p>{tx('Thank you. We will contact you within 3 working days to confirm your visit.')}</p>
                  <button type="button" className="service-button secondary" onClick={() => setStatus('idle')}>
                    {tx('Send another request')}
                  </button>
                </div>
              </div>
            ) : !WEB3FORMS_ACCESS_KEY ? (
              <div className="service-message" role="status">
                <FaEnvelope />
                <div>
                  <h2>{tx('Online form coming soon')}</h2>
                  <p>{tx('Please email your visit request to')} <a href={`mailto:${OFFICE_EMAIL}`}>{OFFICE_EMAIL}</a>.</p>
                </div>
              </div>
            ) : (
              <form className="service-form" onSubmit={handleSubmit}>
                <input type="checkbox" name="botcheck" className="service-honeypot" tabIndex={-1} autoComplete="off" />

                <div className="service-row">
                  <label>
                    {tx('Contact name')} *
                    <input name="name" value={form.name} onChange={handleChange} required autoComplete="name" />
                  </label>
                  <label>
                    {tx('Organization')} *
                    <input name="organization" value={form.organization} onChange={handleChange} required autoComplete="organization" />
                  </label>
                </div>

                <div className="service-row">
                  <label>
                    {tx('Visitor type')} *
                    <select name="visitorType" value={form.visitorType} onChange={handleChange} required>
                      <option value="" disabled>{tx('Select…')}</option>
                      {VISITOR_TYPES.map((type) => (
                        <option key={type} value={type}>{tx(type)}</option>
                      ))}
                    </select>
                  </label>
                  <label>
                    {tx('Number of visitors')} *
                    <input type="number" name="groupSize" min="1" max="300" value={form.groupSize} onChange={handleChange} required />
                  </label>
                </div>

                <div className="service-row">
                  <label>
                    {tx('Email')} *
                    <input type="email" name="email" value={form.email} onChange={handleChange} required autoComplete="email" />
                  </label>
                  <label>
                    {tx('Phone')} *
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} required autoComplete="tel" />
                  </label>
                </div>

                <div className="service-row">
                  <label>
                    {tx('LINE ID')}
                    <input name="lineId" value={form.lineId} onChange={handleChange} autoComplete="off" />
                  </label>
                  <label>
                    {tx('Preferred time')} *
                    <select name="preferredTime" value={form.preferredTime} onChange={handleChange} required>
                      <option value="" disabled>{tx('Select…')}</option>
                      {VISIT_TIMES.map((time) => (
                        <option key={time} value={time}>{tx(time)}</option>
                      ))}
                    </select>
                  </label>
                </div>

                <div className="service-row">
                  <label>
                    {tx('Preferred date')} *
                    <input type="date" name="preferredDate" min={minDate} value={form.preferredDate} onChange={handleChange} required />
                  </label>
                  <label>
                    {tx('Alternate date')}
                    <input type="date" name="alternateDate" min={minDate} value={form.alternateDate} onChange={handleChange} />
                  </label>
                </div>

                <label>
                  {tx('Purpose of visit and areas of interest')} *
                  <textarea name="purpose" rows="5" value={form.purpose} onChange={handleChange} required />
                </label>

                {status === 'error' && (
                  <p className="service-error" role="alert">
                    <FaExclamationTriangle /> {tx('Sorry, the request could not be sent. Please try again or email')}{' '}
                    <a href={`mailto:${OFFICE_EMAIL}`}>{OFFICE_EMAIL}</a>.
                  </p>
                )}

                <button type="submit" className="service-button" disabled={status === 'sending'}>
                  {status === 'sending' ? tx('Sending…') : tx('Submit request')}
                </button>
              </form>
            )}
          </section>

          <aside className="service-card service-aside">
            <h2><FaCalendarAlt /> {tx('Before you visit')}</h2>
            <ul>
              <li>{tx('Submit your request at least 3 days before the visit.')}</li>
              <li>{tx('Visits are available Monday to Friday, 9:00–16:00.')}</li>
              <li>{tx('Groups larger than 50 may be split into smaller sessions.')}</li>
              <li>{tx('Your visit is confirmed only after you receive our reply.')}</li>
            </ul>
            <p className="service-aside-contact">
              <FaEnvelope /> <a href={`mailto:${OFFICE_EMAIL}`}>{OFFICE_EMAIL}</a>
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default VisitRequest;
