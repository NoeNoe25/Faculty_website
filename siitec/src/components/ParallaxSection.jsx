import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "../styles/components/ParallaxSection.css";
import AnimatedNumber from "./AnimatedNumber";
import bgimg from "../assets/albums/KMITL.8.jpg";
import bgimg1 from "../assets/albums/KMITL.11.jpg";
import bgimg2 from "../assets/albums/KMITL.12.jpg";
import bgimg3 from "../assets/albums/KMITL.18.jpg";
import news1 from "../assets/images/news/news1.webp";
import siitecgroups from "../assets/images/news/SIITecgroups.jpg";
import ureview from "../assets/images/news/ureview.png";
import { useNavigate } from "react-router-dom";
import { interpolate, useContent } from "../i18n/LanguageContext";
import homeContent from "../i18n/content/home";
const ParallaxSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef(null);

  //  background images
  const backgroundImages = [bgimg, bgimg1, bgimg2, bgimg3];
  const navigate = useNavigate();
  const { hero } = useContent(homeContent);
  const newsLinks = [
    {
      id: 1,
      image: news1,
      link: "http://www.cmit.kmitl.ac.th/news/direct-admission-1-1-2025-copy/",
    },
    {
      id: 2,
      image: siitecgroups,
      link: "https://www.facebook.com/SIITec.KMITL/posts/pfbid07bGYUgCvXajBWH484sXyHCiqVYmdVGRBqAbx3inw2rGcaLyy47tLoh33Kh1jQfFjl",
    },
    {
      id: 3,
      image: ureview,
      link: "https://www.u-review.in.th/th/article/655",
    },
  ];
  const newsItems = newsLinks.map((item, index) => ({ ...item, ...hero.news[index] }));

  // Slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="parallax-section" ref={sectionRef}>
      <div className="parallax-banner" style={{ height: "90vh" }}>
        {/* Slideshow backgrounds */}
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`parallax-background ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}

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
            <img
              src={require("../assets/logos/siitec.png")}
              alt={hero.logoAlt}
              className="parallax-logo"
            />
            <h1 className="parallax-main-title">
              {hero.titleLine1}
              <br />
              {hero.titleLine2}
            </h1>
            <p className="parallax-subtitle">
              {hero.subtitle}
            </p>
            <motion.button
              className="tech-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/programs")}
            >
              {hero.explorePrograms}
              <span className="button-arrow">▶</span>
              <span className="button-glow"></span>
            </motion.button>

            {/* Horizontal News Card*/}
            <motion.div
              className="news-cards-container"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {newsItems.map((item, index) => (
                <a
                  key={item.id}
                  href={item.link}
                  className="news-read-more"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    className="horizontal-card"
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="card-image">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-date">{item.date}</p>
                    </div>
                  </motion.div>
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Slideshow indicators */}
        <div className="slideshow-indicators">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={interpolate(hero.goToSlide, { number: index + 1 })}
            />
          ))}
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
          <div className="stat-label">{hero.stats.researchLabs}</div>
        </motion.div>

        <motion.div
          className="tech-stat"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <AnimatedNumber value={50} suffix="+" />
          <div className="stat-label">{hero.stats.industryPartners}</div>
        </motion.div>

        <motion.div
          className="tech-stat"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <AnimatedNumber value={200} suffix="+" />
          <div className="stat-label">{hero.stats.publications}</div>
        </motion.div>

        <motion.div
          className="tech-stat"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <AnimatedNumber value={95} suffix="%" />
          <div className="stat-label">{hero.stats.graduateEmployment}</div>
        </motion.div>
      </div>
    </section>
  );
};

export default ParallaxSection;
