import React, { useState } from 'react';
import '../styles/internationalstudent.css';

const InternationalStudentPage = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'programs', label: 'Programs' },
    { id: 'accommodation', label: 'Accommodation' },
    { id: 'dining', label: 'Dining' },
    { id: 'transportation', label: 'Transportation' },
    { id: 'activities', label: 'Activities' },
    { id: 'finances', label: 'Finances' },
  ];

  // Programs data
  const programs = [
    { id: 1, name: 'Free Program: KLLd', description: 'Language and cultural immersion program for new students', duration: '6 months', eligibility: 'All international students' },
    { id: 2, name: 'Griswor Program', description: 'Graduate research and internship opportunities', duration: '1-2 years', eligibility: 'Graduate students' },
    { id: 3, name: 'Nym/Pod Initiative', description: 'Peer mentorship and community building program', duration: 'Full academic year', eligibility: 'First-year students' },
  ];

  // Dining options
  const diningOptions = [
    { id: 1, name: 'Main Campus Dining Hall', hours: '7:00 AM - 9:00 PM', cuisine: 'International', mealPlan: 'Required' },
    { id: 2, name: 'อาหารไทย Restaurant', hours: '10:00 AM - 10:00 PM', cuisine: 'Thai', mealPlan: 'Optional' },
    { id: 3, name: 'International Food Court', hours: '8:00 AM - 11:00 PM', cuisine: 'Various', mealPlan: 'Optional' },
  ];

  // Transportation options
  const transportOptions = [
    { id: 1, name: 'Campus Shuttle', schedule: 'Every 15 minutes', hours: '6:00 AM - 12:00 AM', coverage: 'Campus-wide' },
    { id: 2, name: 'Public Bus System', schedule: 'Varies by route', hours: '5:00 AM - 1:00 AM', coverage: 'City-wide' },
    { id: 3, name: 'Bike Share Program', schedule: '24/7', hours: 'Always available', coverage: 'Campus and nearby areas' },
    { id: 4, name: 'OLA Rideshare', schedule: 'On-demand', hours: '24/7', coverage: 'Entire metropolitan area' },
  ];

  // Activities data
  const activities = [
    { id: 1, name: 'International Student Association', day: 'Every Friday', time: '5:00 PM', location: 'Student Union' },
    { id: 2, name: 'Cultural Exchange Events', day: 'Monthly', time: 'Varies', location: 'International Center' },
    { id: 3, name: 'Language Exchange Cafe', day: 'Every Tuesday', time: '3:00 PM - 6:00 PM', location: 'Library Cafe' },
    { id: 4, name: 'Weekend Excursions', day: 'Select Saturdays', time: '9:00 AM - 5:00 PM', location: 'Various destinations' },
  ];

  // Financial information
  const financialInfo = [
    { id: 1, name: 'Visa Requirements', details: 'Student visa required for all international students. Must maintain full-time enrollment.' },
    { id: 2, name: 'Banking & Money', details: 'International students can open local bank accounts. Major credit cards (Visa, Mastercard) widely accepted.' },
    { id: 3, name: 'Scholarships', details: 'Merit-based and need-based scholarships available for qualified international students.' },
    { id: 4, name: 'Part-time Work', details: 'Up to 20 hours per week on-campus employment allowed with valid student visa.' },
  ];

  // Accommodation options
  const accommodationOptions = [
    { id: 1, name: 'On-Campus Dormitory', type: 'Shared room', cost: '$1200/semester', amenities: 'WiFi, laundry, meal plan included' },
    { id: 2, name: 'International Student Housing', type: 'Single room', cost: '$1800/semester', amenities: 'Private bath, kitchen access, WiFi' },
    { id: 3, name: 'Off-Campus Apartments', type: 'Studio/1BR', cost: '$600-$900/month', amenities: 'Varies by location' },
  ];

  return (
    <div className="international-student-page">
      {/* Header */}
      <header className="international-header">
        <div className="international-container">
          <h1 className="international-logo">International Student Portal</h1>
          <p className="international-tagline">Your comprehensive guide to university life abroad</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="international-navbar">
        <div className="international-container">
          <ul className="international-nav-list">
            {navItems.map(item => (
              <li key={item.id}>
                <button 
                  className={`international-nav-button ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => setActiveSection(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="international-main-content">
        <div className="international-container">
          
          {/* Home Section */}
          {activeSection === 'home' && (
            <section className="international-section">
              <div className="international-welcome-section">
                <h2>Welcome, International Students!</h2>
                <p className="international-intro-text">
                  This portal provides all the essential information you need for your academic journey. 
                  From programs and accommodation to dining and transportation, we've got you covered.
                </p>
                
                <div className="international-quick-links">
                  <h3>Quick Access</h3>
                  <div className="international-quick-links-grid">
                    <div className="international-quick-link-card" onClick={() => setActiveSection('programs')}>
                      <h4>Academic Programs</h4>
                      <p>Explore study options including free programs</p>
                    </div>
                    <div className="international-quick-link-card" onClick={() => setActiveSection('finances')}>
                      <h4>Visa & Finances</h4>
                      <p>Information about visas, banking, and money matters</p>
                    </div>
                    <div className="international-quick-link-card" onClick={() => setActiveSection('transportation')}>
                      <h4>Transportation</h4>
                      <p>Campus and city transport options</p>
                    </div>
                    <div className="international-quick-link-card" onClick={() => setActiveSection('activities')}>
                      <h4>Student Activities</h4>
                      <p>Get involved in campus life and events</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Programs Section */}
          {activeSection === 'programs' && (
            <section className="international-section">
              <h2>Academic Programs</h2>
              <p className="international-section-intro">
                Our university offers various programs tailored for international students, 
                including free programs to help you adapt and succeed.
              </p>
              
              <div className="international-programs-grid">
                {programs.map(program => (
                  <div key={program.id} className="international-card international-program-card">
                    <h3>{program.name}</h3>
                    <p>{program.description}</p>
                    <div className="international-program-details">
                      <div className="international-detail-item">
                        <span className="international-detail-label">Duration:</span>
                        <span>{program.duration}</span>
                      </div>
                      <div className="international-detail-item">
                        <span className="international-detail-label">Eligibility:</span>
                        <span>{program.eligibility}</span>
                      </div>
                    </div>
                    {program.name.includes('Free') && (
                      <div className="international-free-badge">Free Program</div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Accommodation Section */}
          {activeSection === 'accommodation' && (
            <section className="international-section">
              <h2>Accommodation Options</h2>
              <p className="international-section-intro">
                Find the perfect place to live during your studies. We offer on-campus and off-campus housing options.
              </p>
              
              <div className="international-accommodation-grid">
                {accommodationOptions.map(option => (
                  <div key={option.id} className="international-card international-accommodation-card">
                    <h3>{option.name}</h3>
                    <div className="international-accommodation-details">
                      <div className="international-detail-item">
                        <span className="international-detail-label">Type:</span>
                        <span>{option.type}</span>
                      </div>
                      <div className="international-detail-item">
                        <span className="international-detail-label">Cost:</span>
                        <span className="international-cost">{option.cost}</span>
                      </div>
                      <div className="international-detail-item">
                        <span className="international-detail-label">Amenities:</span>
                        <span>{option.amenities}</span>
                      </div>
                    </div>
                    <button className="international-action-button">Learn More</button>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Dining Section */}
          {activeSection === 'dining' && (
            <section className="international-section">
              <h2>Dining & Food Options</h2>
              <p className="international-section-intro">
                Enjoy diverse culinary experiences on campus, including traditional Thai cuisine and international options.
              </p>
              
              <div className="international-dining-grid">
                {diningOptions.map(option => (
                  <div key={option.id} className="international-card international-dining-card">
                    <h3>{option.name}</h3>
                    <div className="international-dining-details">
                      <div className="international-detail-item">
                        <span className="international-detail-label">Hours:</span>
                        <span>{option.hours}</span>
                      </div>
                      <div className="international-detail-item">
                        <span className="international-detail-label">Cuisine:</span>
                        <span>{option.cuisine}</span>
                      </div>
                      <div className="international-detail-item">
                        <span className="international-detail-label">Meal Plan:</span>
                        <span>{option.mealPlan}</span>
                      </div>
                    </div>
                    {option.name.includes('อาหารไทย') && (
                      <div className="international-thai-food-badge">Thai Cuisine</div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Transportation Section */}
          {activeSection === 'transportation' && (
            <section className="international-section">
              <h2>Transportation Services</h2>
              <p className="international-section-intro">
                Navigate the campus and city with our comprehensive transportation options, 
                including public transit and rideshare services.
              </p>
              
              <div className="international-transport-grid">
                {transportOptions.map(option => (
                  <div key={option.id} className="international-card international-transport-card">
                    <h3>{option.name}</h3>
                    <div className="international-transport-details">
                      <div className="international-detail-item">
                        <span className="international-detail-label">Schedule:</span>
                        <span>{option.schedule}</span>
                      </div>
                      <div className="international-detail-item">
                        <span className="international-detail-label">Hours:</span>
                        <span>{option.hours}</span>
                      </div>
                      <div className="international-detail-item">
                        <span className="international-detail-label">Coverage:</span>
                        <span>{option.coverage}</span>
                      </div>
                    </div>
                    {option.name.includes('OLA') && (
                      <div className="international-ola-badge">Rideshare Partner</div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Activities Section */}
          {activeSection === 'activities' && (
            <section className="international-section">
              <h2>Student Activities & Events</h2>
              <p className="international-section-intro">
                Get involved in campus life through various student activities, cultural exchanges, and social events.
              </p>
              
              <div className="international-activities-grid">
                {activities.map(activity => (
                  <div key={activity.id} className="international-card international-activity-card">
                    <h3>{activity.name}</h3>
                    <div className="international-activity-details">
                      <div className="international-detail-item">
                        <span className="international-detail-label">Day:</span>
                        <span>{activity.day}</span>
                      </div>
                      <div className="international-detail-item">
                        <span className="international-detail-label">Time:</span>
                        <span>{activity.time}</span>
                      </div>
                      <div className="international-detail-item">
                        <span className="international-detail-label">Location:</span>
                        <span>{activity.location}</span>
                      </div>
                    </div>
                    <button className="international-action-button">Join Activity</button>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Finances Section */}
          {activeSection === 'finances' && (
            <section className="international-section">
              <h2>Financial Information & Visa Requirements</h2>
              <p className="international-section-intro">
                Essential information about visas, banking, scholarships, and financial matters for international students.
              </p>
              
              <div className="international-finance-grid">
                {financialInfo.map(item => (
                  <div key={item.id} className="international-card international-finance-card">
                    <h3>{item.name}</h3>
                    <p>{item.details}</p>
                    {item.name.includes('Visa') && (
                      <div className="international-visa-badge">Important</div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="international-important-notice">
                <h3>Important Reminders</h3>
                <ul>
                  <li>Maintain valid visa status throughout your stay</li>
                  <li>Notify the international office of any changes to your enrollment status</li>
                  <li>Keep copies of important documents (passport, visa, I-20/DS-2019)</li>
                  <li>Set up a local bank account upon arrival for easier financial management</li>
                </ul>
              </div>
            </section>
          )}

        </div>
      </main>

      {/* Footer */}
      <footer className="international-footer">
        <div className="international-container">
          <div className="international-footer-content">
            <div className="international-footer-section">
              <h4>International Student Office</h4>
              <p>123 University Avenue</p>
              <p>City, Country 12345</p>
              <p>Phone: +1 (123) 456-7890</p>
              <p>Email: international@university.edu</p>
            </div>
            <div className="international-footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><button onClick={() => setActiveSection('programs')}>Academic Programs</button></li>
                <li><button onClick={() => setActiveSection('finances')}>Visa Information</button></li>
                <li><button onClick={() => setActiveSection('transportation')}>Transportation</button></li>
                <li><button onClick={() => setActiveSection('activities')}>Student Activities</button></li>
              </ul>
            </div>
            <div className="international-footer-section">
              <h4>Emergency Contacts</h4>
              <p>Campus Security: 911 (or local emergency number)</p>
              <p>International Office: +1 (123) 456-7890 (24/7)</p>
              <p>Health Services: +1 (123) 456-7891</p>
            </div>
          </div>
          <div className="international-footer-bottom">
            <p>&copy; {new Date().getFullYear()} International Student Portal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InternationalStudentPage;