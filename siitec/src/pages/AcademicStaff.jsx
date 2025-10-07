import { useState } from "react";
import "../styles/AcademicStaff.css";

export default function AcademicStaff() {
  const [searchQuery, setSearchQuery] = useState("");

  const staffMembers = [
    {
      id: 1,
      name: "Dr. Michael Anderson",
      position: "Dean",
      department: "School of Integrated Innovative Technology (SIITEC)",
      expertise: "Industrial Automation, Robotics Systems",
      email: "michael.a@university.ac.th",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
      featured: true,
    },
    {
      id: 2,
      name: "Assoc. Prof. Dr. Sarah Williams",
      position: "Associate Professor",
      department: "School of Integrated Innovative Technology (SIITEC)",
      expertise: "CAD/CAM Systems, Product Design",
      email: "sarah.w@university.ac.th",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
    },
    {
      id: 3,
      name: "Asst. Prof. Dr. David Chen",
      position: "Assistant Professor",
      department: "School of Integrated Innovative Technology (SIITEC)",
      expertise: "Lean Manufacturing, Supply Chain Management",
      email: "david.c@university.ac.th",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
    },
    {
      id: 4,
      name: "Dr. Emily Rodriguez",
      position: "Lecturer",
      department: "School of Integrated Innovative Technology (SIITEC)",
      expertise: "Advanced Materials, Metallurgy",
      email: "emily.r@university.ac.th",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
    },
    {
      id: 5,
      name: "Asst. Prof. Dr. James Thompson",
      position: "Assistant Professor",
      department: "School of Integrated Innovative Technology (SIITEC)",
      expertise: "PLC Programming, Industrial IoT",
      email: "james.t@university.ac.th",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop",
    },
    {
      id: 6,
      name: "Dr. Lisa Martinez",
      position: "Lecturer",
      department: "School of Integrated Innovative Technology (SIITEC)",
      expertise: "Quality Control, Six Sigma",
      email: "lisa.m@university.ac.th",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
    },
    {
      id: 7,
      name: "Assoc. Prof. Dr. Robert Johnson",
      position: "Associate Professor",
      department: "School of Integrated Innovative Technology (SIITEC)",
      expertise: "Smart Factory, Industry 4.0",
      email: "robert.j@university.ac.th",
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=500&fit=crop",
    },
    {
      id: 8,
      name: "Asst. Prof. Dr. Jennifer Lee",
      position: "Assistant Professor",
      department: "School of Integrated Innovative Technology (SIITEC)",
      expertise: "Finite Element Analysis, Simulation",
      email: "jennifer.l@university.ac.th",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop",
    },
    {
      id: 9,
      name: "Dr. Patricia Davis",
      position: "Lecturer",
      department: "School of Integrated Innovative Technology (SIITEC)",
      expertise: "3D Printing, Rapid Prototyping",
      email: "patricia.d@university.ac.th",
      image:
        "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=400&h=500&fit=crop",
    },
    {
      id: 10,
      name: "Asst. Prof. Dr. Daniel Brown",
      position: "Assistant Professor",
      department: "School of Integrated Innovative Technology (SIITEC)",
      expertise: "Renewable Energy, Sustainable Manufacturing",
      email: "daniel.b@university.ac.th",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop",
    },
  ];

  // Filter staff members based on search query
  const filteredStaffMembers = staffMembers.filter((member) =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <section className="academic-staff-section">
      <div className="background-shapes-css">
        <div className="bg-stripe-1"></div>
        <div className="bg-stripe-2"></div>
        <div className="bg-stripe-3"></div>
      </div>
      {/* Hero Section */}
      <div className="staff-hero">
        <div className="container">
          <p className="hero-label">
            School of Integrated Innovative Technology (SIITEC)
          </p>
          <h1>Our Academic Staff</h1>
          <p className="hero-subtitle">
            The latest industry news, interviews, technologies, and resources.
          </p>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <span className="search-icon">🔍</span>
          </div>
        </div>
      </div>

      {/* Staff Grid */}
      <div className="staff-content">
        <div className="container">
          {filteredStaffMembers.length > 0 ? (
            <div className="staff-grid">
              {filteredStaffMembers.map((member) =>
                member.featured ? (
                  <div key={member.id} className="staff-card featured-card">
                    <div className="card-image">
                      <img src={member.image} alt={member.name} />
                    </div>
                    <div className="card-content">
                      <span className="card-category">{member.department}</span>
                      <h3>{member.name}</h3>
                      <p className="card-position">{member.position}</p>
                      <p className="card-description">{member.expertise}</p>
                      <p className="card-email">{member.email}</p>
                    </div>
                  </div>
                ) : (
                  <div key={member.id} className="staff-card">
                    <div className="card-image">
                      <img src={member.image} alt={member.name} />
                    </div>
                    <div className="card-content">
                      <span className="card-category">{member.department}</span>
                      <h4>{member.name}</h4>
                      <p className="card-position">{member.position}</p>
                      <p className="card-description">{member.expertise}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          ) : (
            <div
              style={{ textAlign: "center", padding: "40px 0", color: "#666" }}
            >
              <p>No staff members found matching "{searchQuery}"</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
