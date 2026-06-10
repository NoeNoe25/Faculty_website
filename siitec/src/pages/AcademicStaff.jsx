import React, { useState, useMemo } from 'react';
import '../styles/AcademicStaff.css';
import MrsKannika_Tummarukwattana from '../assets/images/staff/Administrative/Mrs.Kannika Tummarukwattana.png';
import MissTiwannaporn_Poodant from '../assets/images/staff/Administrative/Miss.Tiwannaporn Poodant.jpg';
import MrsAnna_Thanomngam from '../assets/images/staff/Administrative/Mrs.Anna Thanomngam.png';
import MrsWijitra_Taengtang from '../assets/images/staff/Administrative/Mrs.Wijitra Taengtang.png';
import MissKittipa_Choosree from '../assets/images/staff/Administrative/Miss.Kittipa Choosree.png';
import MissChitchanok_Janyasomsakoon from '../assets/images/staff/Administrative/Miss.Chitchanok Janyasomsakoon.jpg';
import MrSarayut_Wongchantra from '../assets/images/staff/Administrative/Mr.Sarayut Wongchantra.png';
import MissWanida_Noparat from '../assets/images/staff/Administrative/Miss.Wanida Noparat.jpg';
import MrsJintana_Thipchaksurat from '../assets/images/staff/Administrative/Mrs.Jintana Thipchaksurat.jpg';
import MissWanthana_Changchai from '../assets/images/staff/Administrative/Miss.Wanthana Changchai.jpg';
import MissPinyapatch_Tangpromjit from '../assets/images/staff/Administrative/Miss.Pinyapatch Tangpromjit.png';
import MissThidarat_Pengpee from '../assets/images/staff/Administrative/Miss.Thidarat Pengpee.jpg';
import MrPharunroj_Thitipongrat from '../assets/images/staff/Administrative/Mr.Pharunroj Thitipongrat.png';

import MrAdisorn_Rakmit from '../assets/images/staff/Scientist/Mr.Adisorn Rakmit.png';
import MissPhoosuda_Phetbaen from '../assets/images/staff/Scientist/Miss.Phoosuda Phetbaen.png';
import MissWisa_Homchan from '../assets/images/staff/Scientist/Miss.Wisa Homchan.jpg';
import MissNaruenard_Loedsapchinda from '../assets/images/staff/Scientist/Miss.Naruenard Loedsapchinda.jpg';
import MissPawantree_Borthai from '../assets/images/staff/Scientist/Miss.Pawantree Borthai.png';
import MissPimpaporn_Munpiriyakul from '../assets/images/staff/Scientist/Miss.Pimpaporn Munpiriyakul.jpg';

import MrTeerawat_Tongloy from '../assets/images/staff/Engineer/Mr.Teerawat Tongloy.png';
import MrPijit_Kochcha from '../assets/images/staff/Engineer/Mr. Pijit Kochcha.png';

import MrNirut_Lekjisuer from '../assets/images/staff/Technician/Mr.Nirut Lekjaiseu.jpg';
import MrKritsana_YaNgam from '../assets/images/staff/Technician/Mr.Kritsana Ya-ngam.png';

export default function AcademicStaff() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const staffMembers = [
    {
      id: 1,
      name: 'Mrs. Kannika Tummarukwattana',
      position: 'Secretary, Executive Meeting Secretary',
      category: 'General Administration',
      department: 'Department of Nanoscience and Nanotechnology',
      email: 'kanniga.tu@kmitl.ac.th',
      phone: '02-3298000 ext. 1175,3144',
      office: 'CMIT Building',
      image: MrsKannika_Tummarukwattana,
    },
    {
      id: 2,
      name: 'Miss. Tiwannaporn Poodant',
      position: 'Educational quality assurance, ITA, EdPEx',
      category: 'General Administration',
      department: 'Department of Nanoscience and Nanotechnology',
      email: 'tiwannaporn.po@kmitl.ac.th',
      phone: '02-3298000 ext. 1174,3142',
      office: 'CMIT Building',
      image: MissTiwannaporn_Poodant,
    },
    {
      id: 3,
      name: 'Mrs. Anna Thanomngam',
      position: 'Human Resources, Research & Development',
      category: 'General Administration',
      department: 'Department of Nanoscience and Nanotechnology',
      email: 'anna.th@kmitl.ac.th',
      phone: '02-3298000 ext. 1170,3034',
      office: 'CMIT Building',
      image: MrsAnna_Thanomngam,
    },
    {
      id: 4,
      name: 'Mrs. Wijitra Taengtang',
      position: 'Financial Officer',
      category: 'General Administration',
      department: 'Department of Nanoscience and Nanotechnology',
      email: 'wijitra.ta@kmitl.ac.th',
      phone: '02-3298000 ext. 1172,3143',
      office: 'CMIT Building',
      image: MrsWijitra_Taengtang,
    },
    {
      id: 5,
      name: 'Miss. Kittipa Choosree',
      position: 'Graduate Student Registration Office',
      category: 'General Administration',
      department: 'Department of Nanoscience and Nanotechnology',
      email: 'kittipa.ch@kmitl.ac.th',
      phone: '02-3298000 ext. 1168,3075',
      office: 'CMIT Building',
      image: MissKittipa_Choosree,
    },
    {
      id: 6,
      name: 'Miss. Chitchanok Janyasomsakoon',
      position: 'Records Officer, Public relations',
      category: 'General Administration',
      department: 'Department of Nanoscience and Nanotechnology',
      email: 'chitchanok.ja@kmitl.ac.th',
      phone: '02-3298000 ext. 1166,3074',
      office: 'CMIT Building',
      image: MissChitchanok_Janyasomsakoon,
    },
    {
      id: 7,
      name: 'Mr. Sarayut Wongchantra',
      position: 'Undergraduate Student Registration Office Nano',
      category: 'General Administration',
      department: 'Department of Nanoscience and Nanotechnology',
      email: 'sarayut.wo@kmitl.ac.th',
      phone: '02-3298000 ext. 1169,2135',
      office: 'CMIT Building',
      image: MrSarayut_Wongchantra,
    },
    {
      id: 8,
      name: 'Miss. Wanida Noparat',
      position: 'Building works, Research & Development',
      category: 'General Administration',
      department: 'Department of Nanoscience and Nanotechnology',
      email: 'wanida.no@kmitl.ac.th',
      phone: '02-3298264 ext. 1176,3158',
      office: 'CMIT Building',
      image: MissWanida_Noparat,
    },
    {
      id: 9,
      name: 'Mrs. Jintana Thipchaksurat',
      position: 'Financial Officer, Human Resources',
      category: 'General Administration',
      department: 'College of Advanced Manufacturing Innovation',
      email: 'jintana.th@kmitl.ac.th',
      phone: '02-3298264 ext. 1178,2158',
      office: '55-Year Chalermprakiat Building 4th Floor',
      image: MrsJintana_Thipchaksurat,
    },
    {
      id: 10,
      name: 'Miss. Wanthana Changchai',
      position: 'Strategic planning',
      category: 'General Administration',
      department: 'College of Advanced Manufacturing Innovation',
      email: 'wanthana.ch@kmitl.ac.th',
      phone: '02-3298264 ext. 1180,2157',
      office: '55-Year Chalermprakiat Building 4th Floor',
      image: MissWanthana_Changchai,
    },
    {
      id: 11,
      name: 'Miss. Pinyapatch Tangpromjit',
      position: 'Student Affairs, Scholarships',
      category: 'General Administration',
      department: 'College of Advanced Manufacturing Innovation',
      email: 'pinyapatch.ta@kmitl.ac.th',
      phone: '02-3298264 ext.1179,3058',
      office: '55-Year Chalermprakiat Building 4th Floor',
      image: MissPinyapatch_Tangpromjit,
    },
    {
      id: 12,
      name: 'Miss. Thidarat Pengpee',
      position: 'Procurement Officer',
      category: 'General Administration',
      department: 'College of Advanced Manufacturing Innovation',
      email: 'thidarat.pe@kmitl.ac.th',
      phone: '02-3298264 ext. 1177,2158',
      office: '55-Year Chalermprakiat Building 4th Floor',
      image: MissThidarat_Pengpee,
    },
    {
      id: 14,
      name: 'Mr. Adisorn Rakmit',
      position: 'Scientist',
      category: 'Scientists and Technicians',
      department: 'Department of Nanoscience and Nanotechnology',
      email: 'adisorn.ra@kmitl.ac.th',
      phone: '02-3298000 ext. 2199, 098-064-8440',
      office: 'CMIT Building',
      image: MrAdisorn_Rakmit,
    },
    {
      id: 15,
      name: 'Miss. Phoosuda Phetbaen',
      position: 'Scientist',
      category: 'Scientists and Technicians',
      department: 'Department of Nanoscience and Nanotechnology',
      email: 'poosuda.ph@kmitl.ac.th',
      phone: '02-3298000 ext. 2199, 098-064-8440',
      office: 'CMIT Building',
      image: MissPhoosuda_Phetbaen,
    },
    {
      id: 16,
      name: 'Miss. Wisa Homchan',
      position: 'Scientist',
      category: 'Scientists and Technicians',
      department: 'Department of Nanoscience and Nanotechnology',
      email: 'wisa.ho@kmitl.ac.th',
      phone: '02-3298000 ext. 2199, 098-064-8440',
      office: 'CMIT Building',
      image: MissWisa_Homchan,
    },
    {
      id: 17,
      name: 'Miss. Naruenard Loedsapchinda',
      position: 'Scientist',
      category: 'Scientists and Technicians',
      department: 'Department of Nanoscience and Nanotechnology',
      email: 'naruenard.lo@kmitl.ac.th',
      phone: '02-3298000 ext. 2199, 098-064-8440',
      office: 'CMIT Building',
      image: MissNaruenard_Loedsapchinda,
    },
    {
      id: 18,
      name: 'Miss. Pawantree Borthai',
      position: 'Scientist',
      category: 'Scientists and Technicians',
      department: 'College of Advanced Manufacturing Innovation',
      email: 'pawantree.bo@kmitl.ac.th',
      phone: '02-3298264 ext. 2157',
      office: '55-Year Chalermprakiat Building, Room 514',
      image: MissPawantree_Borthai,
    },
    {
      id: 19,
      name: 'Miss. Pimpaporn Munpiriyakul',
      position: 'Scientist',
      category: 'Scientists and Technicians',
      department: 'College of Advanced Manufacturing Innovation',
      email: 'pimpaporn.mu@kmitl.ac.th',
      phone: '02-3298264 ext. 2157',
      office: '55-Year Chalermprakiat Building 4th Floor',
      image: MissPimpaporn_Munpiriyakul,
    },
    {
      id: 20,
      name: 'Mr. Teerawat Tongloy',
      position: 'Engineer',
      category: 'Scientists and Technicians',
      department: 'College of Advanced Manufacturing Innovation',
      email: 'teerawat.to@kmitl.ac.th',
      phone: '02-3298264 ext. 2157',
      office: '55-Year Chalermprakiat Building 4th Floor',
      image: MrTeerawat_Tongloy,
    },
    {
      id: 21,
      name: 'Mr. Pijit Kochcha',
      position: 'Engineer',
      category: 'Scientists and Technicians',
      department: 'College of Advanced Manufacturing Innovation',
      email: 'pijit.ko@kmitl.ac.th',
      phone: '02-3298264 ext. 2157',
      office: '55-Year Chalermprakiat Building 4th Floor',
      image: MrPijit_Kochcha,
    },
    {
      id: 22,
      name: 'Mr. Nirut Lekjisuer',
      position: 'Technician',
      category: 'Scientists and Technicians',
      department: 'Department of Nanoscience and Nanotechnology',
      email: 'nirut.le@kmitl.ac.th',
      phone: '',
      office: 'CMIT Building',
      image: MrNirut_Lekjisuer,
    },
    {
      id: 23,
      name: 'Mr. Kritsana Ya-ngam',
      position: 'Technician',
      category: 'Scientists and Technicians',
      department: 'Department of Nanoscience and Nanotechnology',
      email: 'kritsana.ya@kmitl.ac.th',
      phone: '',
      office: 'CMIT Building',
      image: MrKritsana_YaNgam,
    },
    //lack of information, need to confirm with admin staff
    {
      id: 13,
      name: 'Mr. Pharunroj Thitipongrat',
      position: 'Student Affairs, Scholarships',
      category: 'General Administration',
      department: 'College of Advanced Manufacturing Innovation',
      email: 'pharunroj.th@kmitl.ac.th',
      phone: '02-3298264 ext.1179,3058',
      office: '55-Year Chalermprakiat Building 4th Floor',
      image: MrPharunroj_Thitipongrat,
    },
  ];


  // Filter staff based on search and category
  const filteredStaff = useMemo(() => {
    return staffMembers.filter(staff => {
      const term = searchQuery.toLowerCase();
      
      const name = (staff.name || '').toLowerCase();
      const position = (staff.position || '').toLowerCase();
      const department = (staff.department || '').toLowerCase();
      const email = (staff.email || '').toLowerCase();
      
      const matchesSearch = 
        name.includes(term) ||
        position.includes(term) ||
        department.includes(term) ||
        email.includes(term);
      
      const matchesCategory = 
        selectedCategory === 'all' || staff.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Count staff by category
  const adminStaffCount = staffMembers.filter(s => s.category === 'General Administration').length;
  const scientistsCount = staffMembers.filter(s => s.category === 'Scientists and Technicians').length;

  // Group filtered staff by category
  const groupedStaff = filteredStaff.reduce((groups, staff) => {
    const category = staff.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(staff);
    return groups;
  }, {});

  return (
    <div className="academic-staff-container">
      {/* Header */}
      <header className="academic-staff-header">
        <div className="header-decoration"></div>
        <div className="header-content">
          <h1 className="header-title">Our Staff</h1>
          <p className="header-subtitle">School of Integrated Innovative Technology</p>
          <p className="header-department">King Mongkut's Institute of Technology Ladkrabang</p>
        </div>
      </header>

      {/* Search and Filter Section */}
      <div className="search-section">
        <div className="search-container">
          <div className="search-box">
            <svg className="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="Search by name, position, or department..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                className="clear-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Category Filter */}
        <div className="filter-section">
          <button
            className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All Staff
            <span className="count-badge">{staffMembers.length}</span>
          </button>
          <button
            className={`filter-btn ${selectedCategory === 'General Administration' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('General Administration')}
          >
            General Administration
            <span className="count-badge">{adminStaffCount}</span>
          </button>
          <button
            className={`filter-btn ${selectedCategory === 'Scientists and Technicians' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('Scientists and Technicians')}
          >
            Scientists & Technicians
            <span className="count-badge">{scientistsCount}</span>
          </button>
        </div>
      </div>

      {/* Results Info */}
      <div className="results-info">
        <p>
          {filteredStaff.length} {filteredStaff.length === 1 ? 'staff member' : 'staff members'} found
          {searchQuery && <span className="search-term"> for "{searchQuery}"</span>}
        </p>
      </div>

      {/* Staff Content */}
      <div className="staff-content">
        {filteredStaff.length > 0 ? (
          Object.entries(groupedStaff).map(([category, staffList]) => (
            <div key={category} className="category-group">
              <h2 className="category-title">{category}</h2>
              <div className="category-divider"></div>
              
              <div className="staff-grid">
                {staffList.map((staff) => (
                  <article key={staff.id} className="staff-card">
                    <div className="card-header">
                      <div className="staff-image-wrapper">
                        <img 
                          src={staff.image} 
                          alt={staff.name}
                          className="staff-image"
                        />
                        {/* <div className="dept-badge">
                          {staff.department.includes('Nanoscience') ? 'NANO' : 'MANU'}
                        </div> */}
                      </div>
                    </div>
                    
                    <div className="card-body">
                      <h3 className="staff-name">{staff.name}</h3>
                      <p className="staff-position">{staff.position}</p>
                      
                      <div className="card-divider"></div>
                      
                      <div className="people-contact-info">
                        <div className="info-item">
                          <svg className="info-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M2.5 5.5L8 9l5.5-3.5M3 11h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <a href={`mailto:${staff.email}`} className="info-link">
                            {staff.email}
                          </a>
                        </div>
                        
                        <div className="info-item">
                          <svg className="info-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M14 11v2a1.5 1.5 0 0 1-1.5 1.5A12.5 12.5 0 0 1 2 4 1.5 1.5 0 0 1 3.5 2.5H6l1 3-1.5 1a9 9 0 0 0 5 5l1-1.5 3 1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span className="info-text">{staff.phone || 'N/A'}</span>
                        </div>
                        
                        <div className="info-item">
                          <svg className="info-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" stroke="currentColor" strokeWidth="1.5"/>
                            <path d="M13 6.5c0 4-5 8-5 8s-5-4-5-8a5 5 0 0 1 10 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span className="info-text">{staff.office}</span>
                        </div>
                      </div>
                      
                      {/* <div className="department-info">
                        <h4 className="department-label">Department</h4>
                        <p className="department-text">{staff.department}</p>
                      </div> */}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <svg className="no-results-icon" width="64" height="64" viewBox="0 0 64 64" fill="none">
              <circle cx="26" cy="26" r="18" stroke="currentColor" strokeWidth="3"/>
              <path d="M39 39l16 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            </svg>
            <h3>No staff members found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="academic-staff-footer">
        <p>© 2024 School of Integrated Innovative Technology — KMITL</p>
      </footer>
    </div>
  );
}