import React, { useState } from 'react';
import '../styles/internationalstudent.css';

// Import all your images
import dorm1 from '../assets/International students/dorm4.jpg';
import dorm2 from '../assets/International students/dorm2.jpg';
import dorm3 from '../assets/International students/dorm3.jpg';  
import dorm4 from '../assets/International students/dorm1.jpg';
import canteenA from '../assets/International students/canteen_A.jpg';
import canteenB from '../assets/International students/canteen_B.jpg';
import canteenC from '../assets/International students/canteen_c.png';
import eccFoodCourt from '../assets/International students/canteen_ecc.jpg';
import archiCafe from '../assets/International students/canteen_archi.png';

const InternationalStudentPage = () => {
  const [activeSection, setActiveSection] = useState('home');

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

  // Dining options with images
  const diningOptions = [
    { 
      id: 1, 
      name: 'Canteen A', 
      description: 'Main student canteen with Thai rice dishes, noodles, halal food and drinks.',
      hours: '7:00 AM - 5:00 PM',
      price: '35-80 THB per meal',
      image: canteenA,
      badges: ['thai', 'halal']
    },
    { 
      id: 2, 
      name: 'Canteen B', 
      description: 'Low-cost Thai meals, vegetarian food, and fresh fruit drinks.',
      hours: '7:00 AM - 5:00 PM',
      price: '35-80 THB per meal',
      image: canteenB,
 
    },
    { 
      id: 3, 
      name: 'Canteen C', 
      description: 'Street-food style stalls with noodles, fried rice, and snacks.',
      hours: '7:00 AM - 5:00 PM',
      price: '35-80 THB per meal',
      image: canteenC,

    },
    { 
      id: 4, 
      name: 'ECC Food Court', 
      description: 'Modern food court with Thai and international fast-food options.',
      hours: '7:00 AM - 5:00 PM',
      price: '35-80 THB per meal',
      image: eccFoodCourt,
 
    },
    { 
      id: 5, 
      name: 'Archi Café & Shops', 
      description: 'Coffee, bakery, western snacks and international drinks.',
      hours: '8:00 AM - 10:00 PM',
      price: '35-80 THB per meal',
      image: archiCafe,
 
    },
  ];

  // Transportation options
  const transportOptions = [
    { id: 1, name: 'Campus Shuttle', schedule: 'Every 15 minutes', hours: '9:00 AM - 4:00 PM', coverage: 'Campus-wide' },
    { id: 2, name: 'Public Bus System', schedule: 'Varies by route', hours: '5:00 AM - 12:00 AM', coverage: 'City-wide' },
    { id: 3, name: 'Any Wheel', schedule: '24/7', hours: 'Always available', coverage: 'Campus and nearby areas' }
    
  ];

  // Activities data
  const activities = [
    { id: 1, name: 'International Student Association', day: 'Every Friday', time: '5:00 PM', location: 'Student Union' },
    { id: 2, name: 'Cultural Exchange Events', day: 'Monthly', time: 'Varies', location: 'International Center' },
    { id: 3, name: 'Language Exchange Cafe', day: 'Every Tuesday', time: '3:00 PM - 6:00 PM', location: 'Library Cafe' },
    { id: 4, name: 'Weekend Excursions', day: 'Select Saturdays', time: '9:00 AM - 5:00 PM', location: 'Various destinations' },
  ];

  // Google Maps embed URL for campus dining locations
  const campusMapUrl = "https://www.google.com/maps/d/embed?mid=1UEUU0ZbmX0mktzMBgfRVX1l7BCwbqq8&ehbc=2E312F";

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
              <h2>On-Campus Housing</h2>
              <p className="international-section-intro">
                Our on-campus dormitories provide safe, affordable, and convenient living for international students.
              </p>

              <div className="international-accommodation-grid">
                <div className="international-card international-accommodation-card">
                  <div className="international-image-gallery">
                    <img src={dorm1} alt="No AC Dormitory" className="international-image" />
                    <img src={dorm2} alt="No AC Dormitory Interior" className="international-image" />
                  </div>
                  <h3>No-Air-Conditioned Dormitory (Buildings 1,2,3,4,6)</h3>
                  <p>Shared rooms with essential facilities for budget-friendly student living.</p>
                  <div className="international-price-tag">6,000 – 10,000 THB / semester</div>
                  <ul>
                    <li>Bunk bed, desk, wardrobe</li>
                    <li>Free Wi-Fi</li>
                    <li>Shared bathrooms</li>
                    <li>Electricity: 7 THB/unit</li>
                  </ul>
                </div>

                <div className="international-card international-accommodation-card">
                  <img src={dorm3} alt="Air-Conditioned Dormitory" className="international-image" />
                  <h3>Air-Conditioned Dormitory (Buildings 7 & 8)</h3>
                  <p>Comfortable air-conditioned rooms suitable for 1–2 students.</p>
                  <div className="international-price-tag">20,000 – 24,000 THB / semester</div>
                  <ul>
                    <li>Air-conditioner, double bed</li>
                    <li>Free Wi-Fi</li>
                    <li>Shared bathrooms</li>
                    <li>Electricity: 16 THB/unit</li>
                  </ul>
                </div>

                <div className="international-card international-accommodation-card">
                  <img src={dorm4} alt="Type C Dormitory" className="international-image" />
                  <h3>Type A, B, C Dormitory (Buildings 9 & 12)</h3>
                  <p>Premium ensuite rooms with private bathroom and refrigerator.</p>
                  <div className="international-price-tag">24,000 – 28,000 THB / semester</div>
                  <ul>
                    <li>Private bathroom</li>
                    <li>Refrigerator & water heater</li>
                    <li>Free Wi-Fi</li>
                    <li>Air-conditioning included</li>
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* Dining Section with Google Maps */}
          {activeSection === 'dining' && (
            <section className="international-section">
              <h2>Campus Dining & Canteens</h2>
              <p className="international-section-intro">
                Enjoy affordable Thai food and international dishes at multiple locations across campus.
              </p>

              <div className="international-dining-grid">
                {diningOptions.map(option => (
                  <div key={option.id} className="international-card international-dining-card">
                    <img src={option.image} alt={option.name} className="international-image" />
                    <h3>{option.name}</h3>
                    <p>{option.description}</p>
                    
                    <div className="international-hours-badge">{option.hours}</div>
                    <div className="international-price-tag">{option.price}</div>
                    
                    
                  </div>
                ))}
              </div>

              {/* Google Maps Integration */}
              <div className="international-dining-map">
                <h3>Campus Dining Locations</h3>
                <p className="international-map-description">
                  Find all dining locations on campus with this interactive map. 
                  Click on the markers to see more details about each dining option.
                </p>
                
                <div className="international-map-container">
                  <iframe
                    src={campusMapUrl}
                    className="international-map-iframe"
                    title="Campus Dining Locations"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                
               
               
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
              <h2>Estimated Monthly Living Cost</h2>
              <p className="international-section-intro">
                These are typical living costs for international students living on campus.
              </p>

              <div className="international-finance-grid">
                <div className="international-card international-finance-card">
                  <h3>🏠 Accommodation</h3>
                  <div className="international-cost-breakdown">
                    <div className="international-cost-item">
                      <span>Basic Dorm:</span>
                      <span className="international-cost">1,000 - 1,700 THB</span>
                    </div>
                    <div className="international-cost-item">
                      <span>AC Dorm:</span>
                      <span className="international-cost">3,300 - 4,000 THB</span>
                    </div>
                    <div className="international-cost-item">
                      <span>Premium Dorm:</span>
                      <span className="international-cost">4,000 - 4,700 THB</span>
                    </div>
                  </div>
                </div>

                <div className="international-card international-finance-card">
                  <h3>🍜 Food & Dining</h3>
                  <div className="international-cost-breakdown">
                    <div className="international-cost-item">
                      <span>Canteen Meals:</span>
                      <span className="international-cost">3,000 - 4,000 THB</span>
                    </div>
                    <div className="international-cost-item">
                      <span>Groceries:</span>
                      <span className="international-cost">1,000 - 2,000 THB</span>
                    </div>
                    <div className="international-cost-item">
                      <span>Eating Out:</span>
                      <span className="international-cost">500 - 1,500 THB</span>
                    </div>
                  </div>
                </div>

                <div className="international-card international-finance-card">
                  <h3>🚍 Transportation</h3>
                  <div className="international-cost-breakdown">
                    <div className="international-cost-item">
                      <span>Campus Shuttle:</span>
                      <span className="international-cost">Free</span>
                    </div>
                    <div className="international-cost-item">
                      <span>Public Bus:</span>
                      <span className="international-cost">20 - 30 THB</span>
                    </div>
                    <div className="international-cost-item">
                      <span>Bike Rental:</span>
                      <span className="international-cost">10 THB for 30 minutes</span>
                    </div>
                  </div>
                </div>
                <div className="international-card international-finance-card">
                  <h3>Visa Extension</h3>
                  <div className="international-cost-breakdown">
                    <div className="international-cost-item">
                    <span>90 days Report:</span>
                      <span className="international-cost">Free</span>
                      </div>
                    <div className="international-cost-item">
                      <span>Visa Extension:</span>
                      <span className="international-cost">1900 THB</span>
                    </div>
            
                  </div>
                </div>

                <div className="international-card international-finance-card highlight">
                  <h3>💵 Total Monthly Estimate</h3>
                  <div className="international-cost-breakdown">
                    <div className="international-cost-item">
                      <span><strong>Basic Budget:</strong></span>
                      <span className="international-cost">5,000 - 7,000 THB</span>
                    </div>
                    <div className="international-cost-item">
                      <span><strong>Comfort Budget:</strong></span>
                      <span className="international-cost">8,000 - 12,000 THB</span>
                    </div>
                    <div className="international-cost-item">
                      <span><strong>Premium Budget:</strong></span>
                      <span className="international-cost">13,000 - 18,000 THB</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="international-important-notice">
                <h3>💰 Important Financial Notes:</h3>
                <ul>
                  <li>All prices are approximate and in Thai Baht (THB)</li>
                  <li>Living costs vary based on personal lifestyle</li>
                  <li>Emergency funds of 10,000-20,000 THB recommended</li>
                  <li>Health insurance is mandatory for all international students</li>
                </ul>
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
};

export default InternationalStudentPage;