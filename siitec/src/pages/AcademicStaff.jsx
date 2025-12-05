import { useState } from "react";
import "../styles/AcademicStaff.css";
import { LuMail, LuPhone, LuMapPin, LuSearch } from "react-icons/lu";

export default function AcademicStaff() {
  const [searchQuery, setSearchQuery] = useState("");

  const staffMembers = [
    {
      id: 1,
      name: "Ms. Kannika Thammarakwattana",
      position: "Parcel Officer",
      catagory: "Academic Staff",
      department: "Department of Nanoscience and Nanotechnology",
      email: "kanniga.tu@kmitl.ac.th",
      phone: "02-3298000 ext. 3144",
      office: "CMIT Building",
      image:
        "https://i0.wp.com/www.cmit.kmitl.ac.th/wp-content/uploads/2023/08/CMIT-Lek.png?w=703",
      // featured: true,
    },
    {
      id: 2,
      name: "Ms. Wichithra appointed",
      position: "Financial Officer",
      catagory: "Academic Staff",
      department: "Department of Nanoscience and Nanotechnology",
      email: "wijitra.ta@kmitl.ac.th",
      phone: "02-3298000 ext. 3143",
      office: "CMIT Building",
      image:
        "https://i0.wp.com/www.cmit.kmitl.ac.th/wp-content/uploads/2023/08/CMIT-Joy.png?w=732"
      
    },
    {
      id: 3,
      name: "Ms. Anna Thanomngam",
      position: "Personnel/Research Officer",
      catagory: "Academic Staff",
      department: "Department of Nanoscience and Nanotechnology",
      email: "anna.th@kmitl.ac.th",
      phone: "02-3298000 ext. 3034",
      office: "CMIT Building",
      image:
        "https://i0.wp.com/www.cmit.kmitl.ac.th/wp-content/uploads/2023/08/CMIT-Ann.png?w=682"
    },
    {
      id: 4,
      name: "Ms. Thiwanphon Phudaen",
      position: "Planning/Quality Assurance Officer",
      catagory: "Academic Staff",
      department: "Department of Nanoscience and Nanotechnology",
      email: "tiwannaporn.po@kmitl.ac.th",
      phone: "02-3298000 ext. 3142",
      office: "CMIT Building",
      image:
        "https://i0.wp.com/www.cmit.kmitl.ac.th/wp-content/uploads/2023/08/CMIT-Ice.png?w=687"
    },
    {
      id: 5,
      name: "Ms. Kittipa Chusri",
      position: "Officer in charge of registration, graduate level courses/student affairs/scholarships",
      catagory: "Academic Staff",
      department: "Department of Nanoscience and Nanotechnology",
      email: "kittipa.ch@kmitl.ac.th",
      phone: "02-3298000 ext. 3075",
      office: "CMIT Building",
      image:
        "https://i0.wp.com/www.cmit.kmitl.ac.th/wp-content/uploads/2023/08/CMIT-Kib.png?w=682"
    },
    {
      id: 6,
      name: "Mr. Sarayut Wongchanthra",
      position: "Officer in charge of registration work, undergraduate courses/student affairs/scholarships",
      catagory: "Academic Staff",
      department: "Department of Nanoscience and Nanotechnology",
      email: "sarayut.wo@kmitl.ac.th",
      phone: "02-3298000 ext. 2135",
      office: "CMIT Building",
      image:
        "https://i0.wp.com/www.cmit.kmitl.ac.th/wp-content/uploads/2023/08/CMIT-Tum.png?w=685"
    },
    {
      id: 7,
      name: "Ms. Chitchanok Chanyasomsakul",
      position: "Officer in charge of secretarial work /public relations/buildings and locations",
      catagory: "Academic Staff",
      department: "Department of Nanoscience and Nanotechnology",
      email: "chitchanok.ja @kmitl.ac.th",
      phone: "02-3298000 ext. 3074",
      office: "CMIT Building",
      image:
        "https://i0.wp.com/www.cmit.kmitl.ac.th/wp-content/uploads/2023/08/CMIT-Miew.png?w=703"
    },
    {
      id: 8,
      name: "Mr. Adisorn Rakmit",
      position: "Scientist",
      catagory: "Scientists and Technicians",
      department: "Department of Nanoscience and Nanotechnology",
      email: "adisorn.ra@kmitl.ac.th",
      phone: "02-3298000 ext. 3121",
      office: "CMIT Building",
      image:
        "https://i0.wp.com/www.cmit.kmitl.ac.th/wp-content/uploads/2023/08/CMIT-Tle.png?w=754"
    },
    {
      id: 9,
      name: "Lt. Phusuda Petchban",
      position: "Scientist",
      catagory: "Scientists and Technicians",
      department: "Department of Nanoscience and Nanotechnology",
      email: "poosuda.ph@kmitl.ac.th",
      phone: "02-3298000 ext. 3121",
      office: "CMIT Building",
      image:
        "https://i0.wp.com/www.cmit.kmitl.ac.th/wp-content/uploads/2023/08/CMIT-Arm.png?w=714"
    },
    {
      id: 10,
      name: "Ms. Wisa Homchan",
      position: "Scientist",
      catagory: "Scientists and Technicians",
      department: "Department of Nanoscience and Nanotechnology",
      email: "wisa.ho@kmitl.ac.th",
      phone: "02-3298000 ext. 3121",
      office: "CMIT Building",
      image:
        "https://i0.wp.com/www.cmit.kmitl.ac.th/wp-content/uploads/2023/08/CMIT-Mee.png?w=739"
    },
    {
      id: 11,
      name: "Ms. Narunat Lertsapchinda",
      position: "Scientist",
      catagory: "Scientists and Technicians",
      department: "Department of Nanoscience and Nanotechnology",
      email: "naruenard.lo@kmitl.ac.th",
      phone: "02-3298000 ext. 3108",
      office: "CMIT Building",
      image:
        "https://i0.wp.com/www.cmit.kmitl.ac.th/wp-content/uploads/2023/08/CMIT-Nut.png?w=753"
    },
    {
      id: 12,
      name: "Mr. Nirut Lekjaisue",
      position: "Technician",
      catagory: "Scientists and Technicians",
      department: "Department of Nanoscience and Nanotechnology",
      email: "nirut.le@kmitl.ac.th",
      phone: "02-3298000 ext. 3124",
      office: "CMIT Building",
      image:
        "https://i0.wp.com/www.cmit.kmitl.ac.th/wp-content/uploads/2023/08/CMIT-Mee.png?w=739"
    },
    {
      id: 13,
      name: "Mrs. Jintana Thipchaksurat",
      position: "Human resources, financial coordinator, treasury coordinator",
      catagory: "Academic Staff",
      department: "College of Advanced Manufacturing Innovation",
      email: "jintana.th@kmitl.ac.th",
      phone: "02-329-8264 ext. 2158",
      office: "55-Year Chalermprakiat Building 4th Floor",
      image:
        "https://www.ami.kmitl.ac.th/wp-content/uploads/2017/12/23-286x400.jpg"
      
    },
    {
      id: 14,
      name: "Ms. Wanthana Changchai",
      position: "Strategic planning, risk management, educational quality insurance officer",
      catagory: "Academic Staff",
      department: "College of Advanced Manufacturing Innovation",
      email: "wanthana.ch@kmitl.ac.th",
      phone: "02-329-8264 ext. 2157",
      office: "55-Year Chalermprakiat Building 4th Floor",
      image:
        "https://www.ami.kmitl.ac.th/wp-content/uploads/2020/02/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%97%E0%B8%B3%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%A3%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88_%E0%B9%92%E0%B9%90%E0%B9%90%E0%B9%92%E0%B9%92%E0%B9%95_0012-1-286x400.jpg"
      
    },
    {
      id: 15,
      name: "Ms. Wanida Nopparat",
      position: "Cooperative research coordinator, annual report, general administration officer",
      catagory: "Academic Staff",
      department: "College of Advanced Manufacturing Innovation",
      email: "wanida.no@kmitl.ac.th",
      phone: "02-329-8271 ext. 3158",
      office: "55-Year Chalermprakiat Building 4th Floor",
      image:
        "https://www.ami.kmitl.ac.th/wp-content/uploads/2020/02/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%97%E0%B8%B3%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%A3%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88_%E0%B9%92%E0%B9%90%E0%B9%90%E0%B9%92%E0%B9%92%E0%B9%95_0024-286x400.jpg"
      
    },
    {
      id: 16,
      name: "Ms. Pinyapatch Tangpromjit",
      position: "Undergraduate program coordinator, cooperative training/summer training/overseas training coordinator",
      catagory: "Academic Staff",
      department: "College of Advanced Manufacturing Innovation",
      email: "pinyapatch.ta@kmitl.ac.th",
      phone: "02-329-8271 ext. 3058",
      office: "55-Year Chalermprakiat Building 4th Floor",
      image:
        "https://www.ami.kmitl.ac.th/wp-content/uploads/2020/02/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%97%E0%B8%B3%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%A3%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88_%E0%B9%92%E0%B9%90%E0%B9%90%E0%B9%92%E0%B9%92%E0%B9%95_0013-286x400.jpg"
      
    },
    {
      id: 17,
      name: "Ms. Thidarat Pengpee",
      position: "Human resources, treasury coordinator",
      catagory: "Academic Staff",
      department: "College of Advanced Manufacturing Innovation",
      email: "thidarat.pe@kmitl.ac.th",
      phone: "02-329-8264 ext. 2158",
      office: "55-Year Chalermprakiat Building 4th Floor",
      image:
        "https://www.ami.kmitl.ac.th/wp-content/uploads/2020/02/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%97%E0%B8%B3%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%A3%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88_%E0%B9%92%E0%B9%90%E0%B9%90%E0%B9%92%E0%B9%92%E0%B9%95_0015-286x400.jpg"
      
    },
    {
      id: 18,
      name: "Mr. Pheerasilp Yoosook",
      position: "Undergraduate program coordinator, cooperative training/summer training/overseas training coordinator",
      catagory: "Academic Staff",
      department: "College of Advanced Manufacturing Innovation",
      email: "pheerasilp.yo@kmitl.ac.th",
      phone: "02-329-8271",
      office: "55-Year Chalermprakiat Building 4th Floor",
      image:
        "https://www.ami.kmitl.ac.th/wp-content/uploads/2021/03/IMG_8263-300x400.jpg"
      
    },
    {
      id: 19,
      name: "Mr. Pijit Kochcha",
      position: "Engineer",
      catagory: "Scientists and Technicians",
      department: "College of Advanced Manufacturing Innovation",
      email: "pijit.ko@kmitl.ac.th",
      phone: "02-329-8264 ext. 2157",
      office: "55-Year Chalermprakiat Building 4th Floor",
      image:
        "https://www.ami.kmitl.ac.th/wp-content/uploads/2017/12/26-286x400.jpg"
      
    },
    {
      id: 20,
      name: "Ms. Pawantree Borthai",
      position: "Instrument Center Coordinator,Scientist",
      catagory: "Scientists and Technicians",
      department: "College of Advanced Manufacturing Innovation",
      email: "pawantree.bo@kmitl.ac.th",
      phone: "02-329-8264 ext. 2157",
      office: "55-Year Chalermprakiat Building, Room 514",
      image:
        "https://www.ami.kmitl.ac.th/wp-content/uploads/2020/02/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%97%E0%B8%B3%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%A3%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88_%E0%B9%92%E0%B9%90%E0%B9%90%E0%B9%92%E0%B9%92%E0%B9%95_0021-286x400.jpg"
      
    },
    {
      id: 21,
      name: "Ms. Pimpaporn Munpiriyakul",
      position: "Scientist",
      catagory: "Scientists and Technicians",
      department: "College of Advanced Manufacturing Innovation",
      email: "pimpaporn.mu@kmitl.ac.th",
      phone: "02-329-8271 ext. 3058",
      office: "55-Year Chalermprakiat Building 4th Floor",
      image:
        "https://www.ami.kmitl.ac.th/wp-content/uploads/2020/02/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%97%E0%B8%B3%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%A3%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88_%E0%B9%92%E0%B9%90%E0%B9%90%E0%B9%92%E0%B9%92%E0%B9%95_0014-286x400.jpg"
      
    },
    {
      id: 22,
      name: "Mr. Naruchit Soiphet",
      position: "Engineer",
      catagory: "Scientists and Technicians",
      department: "College of Advanced Manufacturing Innovation",
      email: "naruchit.so@kmitl.ac.th",
      phone: "02-329-8264 ext. 2157",
      office: "55-Year Chalermprakiat Building 4th Floor",
      image:
        "https://www.ami.kmitl.ac.th/wp-content/uploads/2020/02/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%97%E0%B8%B3%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%A3%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88_%E0%B9%92%E0%B9%90%E0%B9%90%E0%B9%92%E0%B9%92%E0%B9%95_0010-286x400.jpg"
      
    },
    {
      id: 23,
      name: "Mr. Teerawat Tongloy",
      position: "Engineer",
      catagory: "Scientists and Technicians",
      department: "College of Advanced Manufacturing Innovation",
      email: "teerawat.to@kmitl.ac.th",
      phone: "-",
      office: "55-Year Chalermprakiat Building 4th Floor",
      image:
        "https://www.ami.kmitl.ac.th/wp-content/uploads/2020/02/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%97%E0%B8%B3%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%A3%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88_%E0%B9%92%E0%B9%90%E0%B9%90%E0%B9%92%E0%B9%92%E0%B9%95_0011-286x400.jpg"
      
    }
  ];

// 1. Filter first
  const filteredStaff = staffMembers.filter((member) =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 2. Group by Category
  const groupedStaff = filteredStaff.reduce((groups, member) => {
    const category = member.catagory || "Other Staff";
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(member);
    return groups;
  }, {});

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

return (
    <section className="academic-staff-section">
      {/* Hero Section */}
      <div className="staff-hero" style={{ height: '80vh' }}>
        <div className="container">
          <p className="hero-label">School of Integrated Innovative Technology (SIITEC)</p>
          <h1>Our Academic Staff</h1>
          <p className="hero-subtitle">
            Department of Nanoscience and Nanotechnology<br/>
            College of Advanced Manufacturing Innovation
          </p>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search staff..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <span className="search-icon"><LuSearch /></span>
          </div>
        </div>
      </div>

      {/* Staff Content */}
      <div className="staff-content">
        <div className="container">
          
          {Object.keys(groupedStaff).length > 0 ? (
            Object.entries(groupedStaff).map(([category, members]) => (
              <div key={category} className="category-group">
                
                {/* Category Title */}
                <h2 className="category-title">{category}</h2>
                <div className="category-divider"></div>

                {/* Grid for this category */}
                <div className="staff-grid">
                  {members.map((member) => (
                    <div key={member.id} className="staff-card">
                      <div className="card-image">
                        <img src={member.image} alt={member.name} />
                      </div>
                      <div className="card-content">
                        <span className="card-category">{member.department}</span>
                        <h4>{member.name}</h4>
                        <p className="card-position">{member.position}</p>
                        
                        <div className="contact-info">
                          <div className="info-item">
                            <LuMail className="info-icon" />
                            <a href={`mailto:${member.email}`}>{member.email}</a>
                          </div>
                          <div className="info-item">
                            <LuPhone className="info-icon" />
                            <span>{member.phone}</span>
                          </div>
                          <div className="info-item">
                            <LuMapPin className="info-icon" />
                            <span>{member.office}</span>
                          </div>
                        </div>

                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>No staff members found matching "{searchQuery}"</p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
