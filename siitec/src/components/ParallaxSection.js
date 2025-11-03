import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import '../styles/components/ParallaxSection.css';
import AnimatedNumber from '../components/AnimatedNumber';  
import bgimg from "../assets/albums/KMITL.12.jpg";

const ParallaxSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
      <section className="parallax-section" ref={sectionRef}>
        <div className="parallax-banner" style={{ height: '80vh' }}>
          <div className="parallax-background" style={{ backgroundImage:`url(${bgimg})`  }}></div>
          
          <div className="overlay">
            <div className="tech-grid-overlay"></div>
          </div>
          
          <div className="content-container">
            <motion.div
              className="parallax-content"
              variants={textVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              <h2 className="parallax-title">Innovate. Integrate. Inspire.</h2>
              <p className="parallax-subtitle">
                At the School of Integrated Innovative Technology, we're shaping the future through
                cutting-edge research and interdisciplinary education.
              </p>
              <motion.button 
                className="tech-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discover Our Programs
                <span className="button-glow"></span>
              </motion.button>
            </motion.div>
          </div>
        </div>
        
        <div className="tech-stats-container">
  <motion.div 
    className="tech-stat"
    initial={{ opacity: 0, y: 20 }}
    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    transition={{ duration: 0.4, delay: 0.1 }}
  >
    <AnimatedNumber value={15} suffix="+" />
    <div className="stat-label">Research Labs</div>
  </motion.div>
  
  <motion.div 
    className="tech-stat"
    initial={{ opacity: 0, y: 20 }}
    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    transition={{ duration: 0.4, delay: 0.2 }}
  >
    <AnimatedNumber value={50} suffix="+" />
    <div className="stat-label">Industry Partners</div>
  </motion.div>
  
  <motion.div 
    className="tech-stat"
    initial={{ opacity: 0, y: 20 }}
    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    transition={{ duration: 0.4, delay: 0.3 }}
  >
    <AnimatedNumber value={200} suffix="+" />
    <div className="stat-label">Publications</div>
  </motion.div>
  
  <motion.div 
    className="tech-stat"
    initial={{ opacity: 0, y: 20 }}
    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    transition={{ duration: 0.4, delay: 0.4 }}
  >
    <AnimatedNumber value={95} suffix="%" />
    <div className="stat-label">Graduate Employment</div>
  </motion.div>
</div>
      </section>
  );
};

export default ParallaxSection;