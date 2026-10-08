import React, { useState, useEffect } from 'react';
import '../styles/components/Testimonials.css';
import { interpolate, useContent } from '../i18n/LanguageContext';
import homeContent from '../i18n/content/home';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const { testimonials: text } = useContent(homeContent);
  const people = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "Tech Innovations Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Future Robotics Lab",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "Global Analytics Corp",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    }
  ];
  const testimonials = people.map((person, index) => ({ ...person, ...text.items[index] }));

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance every 3 seconds; the timer restarts after manual navigation.
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex, testimonials.length]);

  return (
    <section className="testimonials-section home-testimonials">
      <div className="testimonials-container">

        <div className="testimonials-header">
          <span className="testimonials-subtitle">{text.subtitle}</span>
          <h2 className="testimonials-title">{text.title}</h2>
          <p className="testimonials-description">
            {text.description}
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
            <button onClick={prevTestimonial} className="carousel-btn prev" aria-label={text.previous}>
              ‹
            </button>

            <div className="carousel-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`dot ${index === activeIndex ? 'active' : ''}`}
                  aria-label={interpolate(text.goTo, { number: index + 1 })}
                />
              ))}
            </div>

            <button onClick={nextTestimonial} className="carousel-btn next" aria-label={text.next}>
              ›
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
