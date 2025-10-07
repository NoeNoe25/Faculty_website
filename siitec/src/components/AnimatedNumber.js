import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const AnimatedNumber = ({ value, suffix = '', duration = 2000 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const incrementTime = Math.max(Math.floor(duration / end), 20);

    const timer = setInterval(() => {
      start += 1;
      setDisplayValue(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className="stat-value">
      {displayValue}
      {suffix}
    </div>
  );
};

export default AnimatedNumber;