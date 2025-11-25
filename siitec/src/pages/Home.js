// src/pages/Home.js
import React from 'react';
import ParallaxSection from '../components/ParallaxSection';
import STEMSection from '../components/stem';
import Activities from '../components/activities';
import NanotechContest from '../components/nanotechcontest';
import LatestStories from '../components/LatestStories';
import AnimatedFeatures from '../components/AnimatedFeatures';
import ScrollRevealSection from '../components/ScrollRevealSection';
import TrekkersHighlights from '../components/TrekkersHighlights';
import '../styles/App.css';


function Home() {
  return (
    <div className="Home">
      <ParallaxSection />
      <STEMSection />
      <Activities />
    
      <LatestStories/>
      <TrekkersHighlights/>
   
    </div>
  );
}

export default Home;