import React from "react";
import "../styles/components/NanotechContest.css";

const NanotechContest = () => {
  return (
    <section className="nanotech-contest">
      <h2>Nanotech Innovation Contest 2025</h2>
      <p>
        Join the frontier of technology! Showcase your groundbreaking ideas in
        nanotechnology and compete for recognition, prizes, and opportunities to
        collaborate with global innovators.
      </p>

      <div className="contest-details">
        <div className="contest-box">
          <h4>Deadline</h4>
          <p>December 15, 2025</p>
        </div>
        <div className="contest-box">
          <h4>Prizes</h4>
          <p>$10,000 + Research Grants</p>
        </div>
        <div className="contest-box">
          <h4>Eligibility</h4>
          <p>Students, Researchers & Startups</p>
        </div>
      </div>

      <button>Apply Now</button>
    </section>
  );
};

export default NanotechContest;
