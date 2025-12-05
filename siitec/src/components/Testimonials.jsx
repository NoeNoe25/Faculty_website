import React, { useState } from 'react';
import '../styles/components/Testimonials.css';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Computer Science Graduate '23",
      company: "Tech Innovations Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      quote: "The hands-on research experience and mentorship I received prepared me perfectly for my career in AI development. The interdisciplinary approach opened doors I never imagined."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Robotics Engineering Graduate '22",
      company: "Future Robotics Lab",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      quote: "Working on cutting-edge projects with industry partners gave me real-world experience that set me apart. I landed my dream job before graduation."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Data Science Graduate '24",
      company: "Global Analytics Corp",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      quote: "The collaborative environment and access to state-of-the-art facilities made learning exciting. Every professor was invested in our success."
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <span className="testimonials-subtitle">Success Stories</span>
          <h2 className="testimonials-title">What Our Alumni Say</h2>
          <p className="testimonials-description">
            Hear from graduates who are making an impact in technology and innovation
          </p>
        </div>

        <div className="testimonials-carousel">
          <div className="testimonial-card">
            <div className="quote-icon">"</div>
            <p className="testimonial-quote">
              {testimonials[activeIndex].quote}
            </p>
            
            <div className="testimonial-author">
              <img 
                src={testimonials[activeIndex].image} 
                alt={testimonials[activeIndex].name}
                className="author-image"
              />
              <div className="author-info">
                <h4 className="author-name">{testimonials[activeIndex].name}</h4>
                <p className="author-role">{testimonials[activeIndex].role}</p>
                <p className="author-company">{testimonials[activeIndex].company}</p>
              </div>
            </div>
          </div>

          <div className="carousel-controls">
            <button onClick={prevTestimonial} className="carousel-btn prev">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            
            <div className="carousel-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`dot ${index === activeIndex ? 'active' : ''}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button onClick={nextTestimonial} className="carousel-btn next">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
        
      </div>

    </section>
  );
}