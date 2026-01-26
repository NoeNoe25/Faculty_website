// import React from "react";
// import "../styles/components/NanotechContest.css";

// const NanotechContest = () => {
//   return (
//     <section className="nanotech-contest">
//       <h2>Nanotech Innovation Contest 2025</h2>
//       <p>
//         Join the frontier of technology! Showcase your groundbreaking ideas in
//         nanotechnology and compete for recognition, prizes, and opportunities to
//         collaborate with global innovators.
//       </p>

//       <div className="contest-details">
//         <div className="contest-box">
//           <h4>Deadline</h4>
//           <p>December 15, 2025</p>
//         </div>
//         <div className="contest-box">
//           <h4>Prizes</h4>
//           <p>$10,000 + Research Grants</p>
//         </div>
//         <div className="contest-box">
//           <h4>Eligibility</h4>
//           <p>Students, Researchers & Startups</p>
//         </div>
//       </div>

//       <button>Apply Now</button>
//     </section>
//   );
// };

// export default NanotechContest;


import React from "react";
import "../styles/components/NanotechContest.css";
import stema2018 from "../assets/albums/stema2018.webp";

const NanotechContest = () => {
  return (
    <section className="nanotech-section">
      <div className="nanotech-content">
        <h2 className="title">Nanotech Innovation Contest 2025</h2>
        <p className="subtitle">
          Join the frontier of technology! Showcase your groundbreaking ideas in
          nanotechnology and compete for recognition, prizes, and opportunities
          to collaborate with global innovators.
        </p>

        <div className="info-cards">
          <div className="info-card">
            <h4>Deadline</h4>
            <p>December 15, 2025</p>
          </div>
          <div className="info-card">
            <h4>Prizes</h4>
            <p>$10,000 + Research Grants</p>
          </div>
          <div className="info-card">
            <h4>Eligibility</h4>
            <p>Students, Researchers & Startups</p>
          </div>
        </div>

        <button className="apply-btn">Apply Now</button>

        {/* Additional Contests Section */}
        <div className="extra-contests">
          <h3>More Competitions</h3>

          <div className="contest-posters">
            <div className="poster-card">
              <img src={stema2018} alt="Hackathon Poster" />
              <p>Innovation Hackathon 2025</p>
            </div>

            <div className="poster-card">
              <img src={stema2018} alt="STEMa Contest Poster" />
              <p>STEMa Challenge 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NanotechContest;
