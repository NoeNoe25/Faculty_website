// src/components/TrekkersHighlights.jsx
import React from "react";
import  HighlightSection  from "../components/ui/HighlightSection";

const TrekkersHighlights = () => {
  const highlightsData = [
    {
      image: "https://via.placeholder.com/400x200",
      title: "An Unforgettable Journey Through Turkey",
      description: "Explore breathtaking landscapes and rich cultural heritage.",
      author: "Maria Angelica"
    },
    {
      image: "https://via.placeholder.com/400x200",
      title: "Hot Air Balloon in Cappadocia",
      description: "A magical ride above fairy chimneys and valleys.",
      author: "Adventure Seekers"
    },
    {
      image: "https://via.placeholder.com/400x200",
      title: "Sunset from Bosphorus",
      description: "Golden views of Istanbul's skyline at dusk.",
      author: "Travel Photography"
    }
  ];

  return (
    <HighlightSection 
      title="Trekker's Highlights"
      highlights={highlightsData}
      columns={3}
    />
  );
};

export default TrekkersHighlights;