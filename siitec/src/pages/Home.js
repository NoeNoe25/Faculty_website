// src/pages/Home.js
import React from 'react';
import ParallaxSection from '../components/ParallaxSection';
import STEMSection from '../components/stem';
import TrekkersHighlights from '../components/TrekkersHighlights';
import LatestStories from '../components/LatestStories';
import Activities from '../components/activities';
import CTASection from '../components/CTASection';
import Testimonials from '../components/Testimonials';
import PartnersSection from '../components/PartnersSection';
import Newsletter from '../components/Newsletter';
import '../styles/App.css';

function Home() {
  return (
    <div className="Home">
      {/* Hero Section with Stats */}
      <ParallaxSection />
      
      {/* STEM Programs Overview */}
      <STEMSection />
      
      {/* Admission & Event Highlights */}
      <TrekkersHighlights />
      
      
      {/* Latest News & Stories */}
      <LatestStories />
      
      {/* Activities & Events */}
      <Activities />
      
      {/* Success Stories & Testimonials */}
      <Testimonials />
      
      {/* Industry & Academic Partners */}
      <PartnersSection />
      
  
    </div>
  );
}

export default Home;