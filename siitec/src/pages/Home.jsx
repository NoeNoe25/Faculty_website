// src/pages/Home.js
import React from 'react';
import ParallaxSection from '../components/ParallaxSection';
import STEMSection from '../components/stem';
import HighlightsSection from '../components/HighlightsSection';
import LatestStories from '../components/LatestStories';
import Activities from '../components/activities';
import Testimonials from '../components/Testimonials';
import PartnersSection from '../components/PartnersSection';
import VideoSection from '../components/Video';
import '../styles/App.css';

function Home() {
  return (
    <div className="Home">
      {/* Hero Section with Stats */}
      <ParallaxSection />
      
      {/* STEM Programs Overview */}
      <STEMSection />
      
      {/* Admission & Event Highlights
      <HighlightsSection /> */}
      
      
      {/* Latest News & Stories */}
      
      {/* Activities & Events */}
      <Activities />
      <VideoSection />
      {/* Success Stories & Testimonials */}
      <Testimonials />
      
      {/* Industry & Academic Partners */}
      <PartnersSection />
      
  
    </div>
  );
}

export default Home;