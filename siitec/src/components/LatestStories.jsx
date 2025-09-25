// src/components/LatestStories.jsx
import React from "react";
import  StoriesSection  from "../components/ui/StoriesSection";
import image1 from "../assets/albums/DSC_3844.jpg";

const LatestStories = () => {
  const mainStory = {
    image: image1,
    title: "Los Angeles food & drink guide: 10 things to try in Los Angeles, California",
    description: "Discover the best eats and drinks across Los Angeles with our top 10 recommendations for foodies.",
    category: "Food & Drink"
  };

  const sideStories = [
    {
      image: image1,
      title: "15 South London Markets You'll Love (Best Markets in South London)",
      date: "March 15, 2024",
      readTime: "5 min read"
    },
    {
      image: image1,
      title: "Incredible lakes across the world to visit with photos in 2024",
      date: "March 12, 2024",
      readTime: "7 min read"
    },
    {
      image: image1,
      title: "Walking Chicago on Budget: Street food, free museums & more",
      date: "March 10, 2024",
      readTime: "4 min read"
    }
  ];

  return (
    <StoriesSection 
      mainStory={mainStory}
      sideStories={sideStories}
      title="Latest Stories"
    />
  );
};

export default LatestStories;