import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from './HeroSection';
import BreadcrumbSection from './BreadcrumbSection';
import MainContent from './MainContent';


const ProgramDetails = () => {
  return (

    <>
      <Helmet>
        <title>Bachelor of Engineering in Manufacturing System Engineering | SIIT Academic Programs</title>
        <meta 
          name="description" 
          content="Explore SIIT's comprehensive Bachelor of Engineering program in Manufacturing System Engineering. Interdisciplinary curriculum covering electrical, industrial, mechanical engineering with modern facilities, expert faculty, and industry partnerships for career success." 
        />
        <meta property="og:title" content="Bachelor of Engineering in Manufacturing System Engineering | SIIT Academic Programs" />
        <meta property="og:description" content="Explore SIIT's comprehensive Bachelor of Engineering program in Manufacturing System Engineering. Interdisciplinary curriculum covering electrical, industrial, mechanical engineering with modern facilities, expert faculty, and industry partnerships for career success." />
      </Helmet>

      <main className="w-full bg-secondary-light">
        
        <HeroSection />
        <BreadcrumbSection />
        <MainContent />
    
    

      </main>
    </>
  );
};

export default ProgramDetails;