// src/components/TrekkersHighlights.jsx
import React from "react";
import HighlightSection from "../components/ui/HighlightSection";
import img1 from '../assets/albums/NANO-cover-02.jpg';
import img2 from '../assets/albums/KMITL.11.jpg';
import img3 from '../assets/albums/KMITL.13.jpg';

const TrekkersHighlights = () => {
  const highlightsData = [
    {
      image: img1,
      title: "New Admission Announcement 2026",
      description: "Latest updates on application timelines, requirements, and important deadlines.",
      author: "Campus Admissions Office"
    },
    {
      image: img2,
      title: "Scholarship Opportunities Now Open",
      description: "Explore newly released scholarships for outstanding and financially supported students.",
      author: "Student Affairs"
    },
    {
      image: img3,
      title: "Upcoming Orientation Week Highlights",
      description: "Get a sneak peek into campus tours, welcome activities, and student networking events.",
      author: "Orientation Team"
    }
  ];

  return (
    <HighlightSection 
      // title="Trekker's Highlights"
      highlights={highlightsData}
      columns={3}
    />
  );
};

export default TrekkersHighlights;
