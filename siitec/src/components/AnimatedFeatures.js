import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/AnimatedFeatures.css';

// SVG Icons
const ResearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
    <path fill="none" d="M0 0h24v24H0z"/>
    <path fill="#B87333" d="M19.8 18.4L14 10.67V6.5l1.35-1.69c.26-.33.03-.81-.39-.81H9.04c-.42 0-.65.48-.39.81L10 6.5v4.17L4.2 18.4c-.53.67-.05 1.6.83 1.6h14c.88 0 1.36-.93.83-1.6z"/>
  </svg>
);

const InterdisciplinaryIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
    <path fill="none" d="M0 0h24v24H0z"/>
    <path fill="#B87333" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-7h10v-2H7v2z"/>
  </svg>
);

const PartnershipIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
    <path fill="none" d="M0 0h24v24H0z"/>
    <path fill="#B87333" d="M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"/>
  </svg>
);

const EducationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
    <path fill="none" d="M0 0h24v24H0z"/>
    <path fill="#B87333" d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
  </svg>
);

const AnimatedFeatures = () => {
  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  // Animation variants for items
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  // Tech-inspired features
  const features = [
    {
      id: 1,
      title: 'Innovative Research',
      description: 'Pushing boundaries with cutting-edge technology research and development.',
      icon: <ResearchIcon />,
      color: '#B87333', // Copper
    },
    {
      id: 2,
      title: 'Interdisciplinary Approach',
      description: 'Combining technology with various disciplines for comprehensive solutions.',
      icon: <InterdisciplinaryIcon />,
      color: '#4A5455', // Dark gray
    },
    {
      id: 3,
      title: 'Industry Partnerships',
      description: 'Collaborating with leading tech companies for real-world applications.',
      icon: <PartnershipIcon />,
      color: '#B87333', // Copper
    },
    {
      id: 4,
      title: 'Future-Ready Education',
      description: 'Preparing students for the evolving technological landscape.',
      icon: <EducationIcon />,
      color: '#4A5455', // Dark gray
    },
  ];

  // Ref for intersection observer
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <section className="animated-features-section">
      <div className="tech-background">
        <div className="tech-grid"></div>
        <div className="tech-particles"></div>
      </div>
      
      <motion.div
        className="section-title-container"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        ref={ref}
      >
        <h2 className="section-title">Innovative Technology</h2>
        <div className="title-underline">
          <motion.div 
            className="underline-animation"
            initial={{ width: 0 }}
            animate={inView ? { width: '100%' } : { width: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>
        <p className="section-subtitle">Exploring the intersection of technology and innovation</p>
      </motion.div>

      <motion.div
        className="features-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            className="feature-card"
            variants={itemVariants}
            style={{
              '--card-color': feature.color,
            }}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
            <div className="tech-circuit"></div>
          </motion.div>
        ))}
      </motion.div>

      <div className="parallax-tech-elements">
        <div className="floating-element elem-1"></div>
        <div className="floating-element elem-2"></div>
        <div className="floating-element elem-3"></div>
      </div>
    </section>
  );
};

export default AnimatedFeatures;