import React, { useState } from 'react';
import '../styles/academiccalendar.css';

const AcademicCalendar = () => {
  const [activeSemester, setActiveSemester] = useState('fall2024');
  const [activeView, setActiveView] = useState('semester'); // 'semester' or 'year'

  // Academic calendar data
  const calendarData = {
    fall2024: {
      title: 'Fall Semester 2024',
      period: 'September 3, 2024 - December 20, 2024',
      events: [
        { date: 'Aug 26 - 30', event: 'Orientation Week', type: 'orientation' },
        { date: 'Sep 3', event: 'First Day of Classes', type: 'academic' },
        { date: 'Sep 6', event: 'Last Day to Add/Drop Courses', type: 'deadline' },
        { date: 'Oct 14', event: 'Thanksgiving Day - University Closed', type: 'holiday' },
        { date: 'Oct 28 - Nov 1', event: 'Mid-term Break', type: 'break' },
        { date: 'Nov 8', event: 'Last Day to Withdraw from Courses', type: 'deadline' },
        { date: 'Dec 6', event: 'Last Day of Classes', type: 'academic' },
        { date: 'Dec 9 - 14', event: 'Final Examinations', type: 'exam' },
        { date: 'Dec 20', event: 'Final Grades Available', type: 'academic' }
      ]
    },
    winter2025: {
      title: 'Winter Semester 2025',
      period: 'January 6, 2025 - April 25, 2025',
      events: [
        { date: 'Jan 6', event: 'First Day of Classes', type: 'academic' },
        { date: 'Jan 10', event: 'Last Day to Add/Drop Courses', type: 'deadline' },
        { date: 'Feb 17', event: 'Family Day - University Closed', type: 'holiday' },
        { date: 'Mar 3 - 7', event: 'Reading Week', type: 'break' },
        { date: 'Mar 14', event: 'Last Day to Withdraw from Courses', type: 'deadline' },
        { date: 'Apr 11', event: 'Last Day of Classes', type: 'academic' },
        { date: 'Apr 14 - 19', event: 'Final Examinations', type: 'exam' },
        { date: 'Apr 25', event: 'Final Grades Available', type: 'academic' }
      ]
    },
    spring2025: {
      title: 'Spring/Summer Term 2025',
      period: 'May 5, 2025 - August 15, 2025',
      events: [
        { date: 'May 5', event: 'First Day of Spring Classes', type: 'academic' },
        { date: 'May 9', event: 'Last Day to Add/Drop Spring Courses', type: 'deadline' },
        { date: 'May 19', event: 'Victoria Day - University Closed', type: 'holiday' },
        { date: 'Jun 20', event: 'Last Day of Spring Classes', type: 'academic' },
        { date: 'Jun 23 - 27', event: 'Spring Term Exams', type: 'exam' },
        { date: 'Jul 2', event: 'First Day of Summer Classes', type: 'academic' },
        { date: 'Jul 6', event: 'Last Day to Add/Drop Summer Courses', type: 'deadline' },
        { date: 'Aug 4', event: 'Civic Holiday - University Closed', type: 'holiday' },
        { date: 'Aug 8', event: 'Last Day of Summer Classes', type: 'academic' },
        { date: 'Aug 11 - 15', event: 'Summer Term Exams', type: 'exam' }
      ]
    }
  };

  // Important dates for the year view
  const importantDates = [
    { date: 'August 26, 2024', event: 'New Student Orientation Begins', category: 'orientation' },
    { date: 'September 3, 2024', event: 'Fall Semester Classes Begin', category: 'academic' },
    { date: 'October 14, 2024', event: 'Thanksgiving Day - No Classes', category: 'holiday' },
    { date: 'December 9-14, 2024', event: 'Fall Final Examinations', category: 'exam' },
    { date: 'January 6, 2025', event: 'Winter Semester Classes Begin', category: 'academic' },
    { date: 'February 17, 2025', event: 'Family Day - No Classes', category: 'holiday' },
    { date: 'March 3-7, 2025', event: 'Reading Week - No Classes', category: 'break' },
    { date: 'April 14-19, 2025', event: 'Winter Final Examinations', category: 'exam' },
    { date: 'May 5, 2025', event: 'Spring Term Classes Begin', category: 'academic' },
    { date: 'July 2, 2025', event: 'Summer Term Classes Begin', category: 'academic' },
    { date: 'August 15, 2025', event: 'Summer Term Ends', category: 'academic' }
  ];

  const getEventTypeClass = (type) => {
    const typeClasses = {
      academic: 'calendar-page__event--academic',
      deadline: 'calendar-page__event--deadline',
      exam: 'calendar-page__event--exam',
      holiday: 'calendar-page__event--holiday',
      break: 'calendar-page__event--break',
      orientation: 'calendar-page__event--orientation'
    };
    return typeClasses[type] || '';
  };

  const getEventIcon = (type) => {
    const icons = {
      academic: '📚',
      deadline: '⏰',
      exam: '📝',
      holiday: '🎉',
      break: '🏖️',
      orientation: '👋'
    };
    return icons[type] || '📅';
  };

  return (
    <div className="calendar-page">
      {/* Hero Section */}
      <section className="calendar-page__hero">
        <div className="calendar-page__container">
          <div className="calendar-page__hero-content">
            <h1 className="calendar-page__hero-title">Academic Calendar</h1>
            <p className="calendar-page__hero-subtitle">
              Important dates, deadlines, and events for the Nanotechnology Engineering program
            </p>
            <div className="calendar-page__view-toggle">
              <button 
                className={`calendar-page__toggle-btn ${activeView === 'semester' ? 'calendar-page__toggle-btn--active' : ''}`}
                onClick={() => setActiveView('semester')}
              >
                Semester View
              </button>
              <button 
                className={`calendar-page__toggle-btn ${activeView === 'year' ? 'calendar-page__toggle-btn--active' : ''}`}
                onClick={() => setActiveView('year')}
              >
                Year at a Glance
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="calendar-page__main-wrapper">
        {/* Side Navigation */}
        <nav className="calendar-page__side-nav">
          <div className="calendar-page__nav-header">
            <h3>Academic Terms</h3>
          </div>
          <ul className="calendar-page__nav-links">
            <li>
              <button 
                className={`calendar-page__nav-link ${activeSemester === 'fall2024' ? 'calendar-page__nav-link--active' : ''}`}
                onClick={() => setActiveSemester('fall2024')}
              >
                <span className="calendar-page__nav-icon">🍂</span>
                Fall 2024
              </button>
            </li>
            <li>
              <button 
                className={`calendar-page__nav-link ${activeSemester === 'winter2025' ? 'calendar-page__nav-link--active' : ''}`}
                onClick={() => setActiveSemester('winter2025')}
              >
                <span className="calendar-page__nav-icon">❄️</span>
                Winter 2025
              </button>
            </li>
            <li>
              <button 
                className={`calendar-page__nav-link ${activeSemester === 'spring2025' ? 'calendar-page__nav-link--active' : ''}`}
                onClick={() => setActiveSemester('spring2025')}
              >
                <span className="calendar-page__nav-icon">🌞</span>
                Spring/Summer 2025
              </button>
            </li>
          </ul>
          <div className="calendar-page__nav-footer">
            <button className="calendar-page__btn calendar-page__btn--outline calendar-page__nav-cta">
              Download Calendar
            </button>
          </div>
        </nav>

        {/* Main Content */}
        <main className="calendar-page__main-content">
          {activeView === 'semester' ? (
            /* Semester View */
            <section className="calendar-page__content-section">
              <div className="calendar-page__section-header">
                <h2>{calendarData[activeSemester].title}</h2>
                <p>{calendarData[activeSemester].period}</p>
              </div>

              <div className="calendar-page__semester-calendar">
                <div className="calendar-page__legend">
                  <h4>Legend</h4>
                  <div className="calendar-page__legend-items">
                    <div className="calendar-page__legend-item">
                      <span className="calendar-page__legend-color calendar-page__legend-color--academic"></span>
                      <span>Academic</span>
                    </div>
                    <div className="calendar-page__legend-item">
                      <span className="calendar-page__legend-color calendar-page__legend-color--deadline"></span>
                      <span>Deadline</span>
                    </div>
                    <div className="calendar-page__legend-item">
                      <span className="calendar-page__legend-color calendar-page__legend-color--exam"></span>
                      <span>Examination</span>
                    </div>
                    <div className="calendar-page__legend-item">
                      <span className="calendar-page__legend-color calendar-page__legend-color--holiday"></span>
                      <span>Holiday</span>
                    </div>
                    <div className="calendar-page__legend-item">
                      <span className="calendar-page__legend-color calendar-page__legend-color--break"></span>
                      <span>Break</span>
                    </div>
                    <div className="calendar-page__legend-item">
                      <span className="calendar-page__legend-color calendar-page__legend-color--orientation"></span>
                      <span>Orientation</span>
                    </div>
                  </div>
                </div>

                <div className="calendar-page__events-timeline">
                  {calendarData[activeSemester].events.map((event, index) => (
                    <div key={index} className={`calendar-page__event ${getEventTypeClass(event.type)}`}>
                      <div className="calendar-page__event-icon">
                        {getEventIcon(event.type)}
                      </div>
                      <div className="calendar-page__event-content">
                        <div className="calendar-page__event-date">{event.date}</div>
                        <div className="calendar-page__event-title">{event.event}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Important Notes */}
              <div className="calendar-page__notes">
                <h4>Important Notes</h4>
                <ul>
                  <li>All dates are subject to change. Please check this calendar regularly for updates.</li>
                  <li>Add/Drop deadlines are strict. Late course changes may not be permitted.</li>
                  <li>Final examination schedules are typically released 4-6 weeks before exam period.</li>
                  <li>For course-specific deadlines, please refer to your course syllabus.</li>
                </ul>
              </div>
            </section>
          ) : (
            /* Year at a Glance View */
            <section className="calendar-page__content-section">
              <div className="calendar-page__section-header">
                <h2>2024-2025 Academic Year at a Glance</h2>
                <p>Key dates for the entire academic year</p>
              </div>

              <div className="calendar-page__year-view">
                <div className="calendar-page__year-timeline">
                  {importantDates.map((date, index) => (
                    <div key={index} className="calendar-page__year-event">
                      <div className="calendar-page__year-date">
                        {date.date}
                      </div>
                      <div className="calendar-page__year-content">
                        <div className={`calendar-page__year-category calendar-page__year-category--${date.category}`}>
                          {date.category.toUpperCase()}
                        </div>
                        <div className="calendar-page__year-title">{date.event}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Semester Overview Cards */}
              <div className="calendar-page__semester-cards">
                <div className="calendar-page__semester-card">
                  <h4>Fall Semester 2024</h4>
                  <div className="calendar-page__card-dates">
                    <span>Sep 3 - Dec 20, 2024</span>
                  </div>
                  <ul>
                    <li>Orientation: Aug 26-30</li>
                    <li>Thanksgiving Break: Oct 14</li>
                    <li>Mid-term Break: Oct 28-Nov 1</li>
                    <li>Exams: Dec 9-14</li>
                  </ul>
                </div>
                <div className="calendar-page__semester-card">
                  <h4>Winter Semester 2025</h4>
                  <div className="calendar-page__card-dates">
                    <span>Jan 6 - Apr 25, 2025</span>
                  </div>
                  <ul>
                    <li>Family Day: Feb 17</li>
                    <li>Reading Week: Mar 3-7</li>
                    <li>Exams: Apr 14-19</li>
                  </ul>
                </div>
                <div className="calendar-page__semester-card">
                  <h4>Spring/Summer 2025</h4>
                  <div className="calendar-page__card-dates">
                    <span>May 5 - Aug 15, 2025</span>
                  </div>
                  <ul>
                    <li>Spring Term: May 5 - Jun 20</li>
                    <li>Summer Term: Jul 2 - Aug 15</li>
                    <li>Victoria Day: May 19</li>
                    <li>Civic Holiday: Aug 4</li>
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* Contact Information */}
          <section className="calendar-page__contact-section">
            <div className="calendar-page__contact-grid">
              <div className="calendar-page__contact-card">
                <h4>Registrar's Office</h4>
                <p>For official academic calendar and registration questions</p>
                <div className="calendar-page__contact-info">
                  <p>📞 (555) 123-4567</p>
                  <p>✉️ registrar@university.edu</p>
                  <p>🏢 Administration Building, Room 100</p>
                </div>
              </div>
              <div className="calendar-page__contact-card">
                <h4>Nanotechnology Department</h4>
                <p>For program-specific scheduling and course information</p>
                <div className="calendar-page__contact-info">
                  <p>📞 (555) 123-4568</p>
                  <p>✉️ nano@university.edu</p>
                  <p>🏢 Engineering Building, Room 305</p>
                </div>
              </div>
              <div className="calendar-page__contact-card">
                <h4>Academic Advising</h4>
                <p>For personalized academic planning and guidance</p>
                <div className="calendar-page__contact-info">
                  <p>📞 (555) 123-4569</p>
                  <p>✉️ advising@university.edu</p>
                  <p>🏢 Student Services Building, Room 210</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AcademicCalendar;