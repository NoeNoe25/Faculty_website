import React, { useState, useMemo } from 'react';
import '../styles/LecturerPage.css';
const LecturerPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  // Sample lecturer data - replace with your actual data
  const lecturers = [
    {
      id: 1,
      name: 'Dr. Jiti Nookaew',
      title: 'Professor',
      department: 'NANO',
      email: 'jiti.nu@kmitl.ac.th',
      phone: '02-3298000 ext. 3079',
      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=6602130911',
      image: 'https://i0.wp.com/www.cmit.kmitl.ac.th/wp-content/uploads/2023/06/CMIT-Jiti.png?w=742'
    },
    {
      id: 2,
      name: 'Dr. Wisanu Petchpa',
      title: 'Professor',
      department: 'NANO',
      email: 'wisanu.pe@kmitl.ac.th',
      phone: '02-3298000 ext. 3119',
    
      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=8558302900',
      image: 'https://i0.wp.com/www.cmit.kmitl.ac.th/wp-content/uploads/2023/06/CMIT-Wisanu.png?w=685'
    },
    {
      id: 3,
      name: 'Dr. Benjapon Tanhoo',
      title: 'Associate Professor',
      department: 'NANO',
      email: 'benchapol.tu@kmitl.ac.th',
      phone: '02-3298000 ext. 3128',
     
      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=19640778900',
      image: 'https://i0.wp.com/www.cmit.kmitl.ac.th/wp-content/uploads/2023/06/UN-CMIT.png?w=769'
    },
    {
      id: 4,
      name: 'Dr. Wanwilai Witthayakorn',
      title: 'Associate Professor',
      department: 'NANO',
      email: 'wanwilai.vi@kmitl.ac.th',
      phone: '02-3298000 ext. 2169',
   
      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=26422631000',
      image: 'https://i0.wp.com/www.cmit.kmitl.ac.th/wp-content/uploads/2023/06/CMIT-Wanwilai.png?resize=768%2C771'
    },
    {
      id: 5,
      name: 'Dr. Winadda Wongwiriyaphan',
      title: 'Associate Professor',
      department: 'NANO',
      email: 'winadda.wo@kmitl.ac.th',
      phone: '02-3298000 ext. 3133',
     
      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=6507140809',
      image: 'https://i0.wp.com/www.cmit.kmitl.ac.th/wp-content/uploads/2023/06/UN-CMIT.png?w=769'
    },
    {
      id: 6,
      name: 'Dr. Suthee Chutipaijit',
      title: 'Associate Professor',
      department: 'NANO',
      email: 'sutee.ch@kmitl.ac.th',
      phone: '02-3298000 ext. 3140',
     
      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=35344429600',
      image: 'https://i0.wp.com/www.cmit.kmitl.ac.th/wp-content/uploads/2023/06/CMIT-Sutee.png?resize=768%2C771'
    },
    {
      id: 7,
      name: 'Dr. Darinee Promyothin',
      title: 'Associate Professor',
      department: 'NANO',
      email: 'darinee.ph@kmitl.ac.th',
      phone: '02-3298000 ext. 3133',
  
      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=55082047500',
      image: 'https://i0.wp.com/www.cmit.kmitl.ac.th/wp-content/uploads/2023/06/UN-CMIT.png?w=769'
    },
    {
      id: 8,
      name: 'Dr. Nawaphan Khayankit',
      thaiName: 'รองศาสตราจารย์.ดร. นวพันธ์ ขยันกิจ',
      title: 'Associate Professor',
      department: 'NANO',
      email: 'navaphun.ka@kmitl.ac.th',
      phone: '02-3298000 ext. 2176',
    
      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=19639732300',
      image: 'https://i0.wp.com/www.cmit.kmitl.ac.th/wp-content/uploads/2023/06/UN-CMIT.png?w=769'
    },
    {
      id: 9,
      name: 'Dr. Thotsapol Meluangnon',
      title: 'Associate Professor',
      department: 'NANO',
      email: 'tosapol.ma@kmitl.ac.th',
      phone: '02-3298000 ext. 2173',
     
      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=36622681600',
      image: 'https://i0.wp.com/www.cmit.kmitl.ac.th/wp-content/uploads/2023/06/UN-CMIT.png?w=769'
    },
    {
      id: 10,
      name: 'Dr. Apilak Eiaduea',
      title: 'Associate Professor',
      department: 'NANO',
      email: 'apiluck.ei@kmitl.ac.th',
      phone: '02-3298000 ext. 3132',
     
      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=8539060400',
      image: 'https://i0.wp.com/www.cmit.kmitl.ac.th/wp-content/uploads/2023/11/CMIT-Apilak.png?resize=768%2C766'
    },
    {
      id: 11,
      name: 'Dr. Korakot Onlao',
      title: 'Associate Professor',
      department: 'NANO',
      email: 'korakot.on@kmitl.ac.th',
      phone: '02-3298000 ext. 3128',
  
      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=35362507400',
      image: 'https://i0.wp.com/www.cmit.kmitl.ac.th/wp-content/uploads/2023/06/UN-CMIT.png?w=769'
    },
    {
      id: 12,
      name: 'Dr. Sakon Rahong',
      title: 'Associate Professor',
      department: 'NANO',
      email: 'sakon.ra@kmitl.ac.th',
      phone: '02-3298000 ext. 3075',
    
      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=8558302600',
      image: 'https://i0.wp.com/www.cmit.kmitl.ac.th/wp-content/uploads/2023/06/UN-CMIT.png?w=769'
    },
    {
      id: 13,
      name: 'Dr. Nonglak Huangkamhaeng',
      title: 'Associate Professor',
      department: 'NANO',
      email: 'nongluck.ho@kmitl.ac.th',
      phone: '02-3298000 ext. 2173',

      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=36760947500',
      image: 'https://i0.wp.com/www.cmit.kmitl.ac.th/wp-content/uploads/2023/06/UN-CMIT.png?w=769'
    },
    {
      id: 14,
      name: 'Dr. Kanokthip Bunyaratglin',
      title: 'Associate Professor',
      department: 'NANO',
      email: 'kanokthip.bo@kmitl.ac.th',
      phone: '02-3298000 ext. 2176',

      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=36833541100',
      image: 'https://i0.wp.com/www.cmit.kmitl.ac.th/wp-content/uploads/2023/06/CMIT-Kanokthip.png?w=763'
    },
    {
      id: 15,
      name: 'Dr. Wanitchaya Mekprasat',
      title: 'Associate Professor',
      department: 'NANO',
      email: 'wanichaya.me@kmitl.ac.th',
      phone: '02-3298000 ext. 2176',
      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=36105458200',
      image: 'https://i0.wp.com/www.cmit.kmitl.ac.th/wp-content/uploads/2023/06/CMIT-Wanichaya.png?w=760'
    },
    {
      id: 16,
      name: 'Dr. Pitiporn Thanomngam',
      title: 'Assistant Professor',
      department: 'NANO',
      email: 'pitiporn.th@kmitl.ac.th',
      phone: '02-3298000 ext. 3081',
  
      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=6506862906',
      image: 'https://i0.wp.com/www.cmit.kmitl.ac.th/wp-content/uploads/2023/06/UN-CMIT.png?w=769'
    },
    {
      id: 17,
      name: 'Dr. Tutiyaporn Thiwawong',
      title: 'Assistant Professor',
      department: 'NANO',
      email: 'thutiyaporn.th@kmitl.ac.th',
      phone: '02-3298000 ext. 3128',
  
      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=19640410000',
      image: 'https://i0.wp.com/www.cmit.kmitl.ac.th/wp-content/uploads/2023/06/UN-CMIT.png?w=769'
    },
    {
      id: 18,
      name: 'Dr. Adirek Rangkasikorn',
      title: 'Assistant Professor',
      department: 'NANO',
      email: 'adirek.ra@kmitl.ac.th',
      phone: '02-3298000 ext. 3075',
   
      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=55659954200',
      image: 'https://i0.wp.com/www.cmit.kmitl.ac.th/wp-content/uploads/2023/06/UN-CMIT.png?w=769'
    },
    {
      id: 19,
      name: 'Dr. Kanoknan Phachirak',
      title: 'Assistant Professor',
      department: 'NANO',
      email: 'kanoknan.ph@kmitl.ac.th',
      phone: '02-3298000 ext. 3132',
  
      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=16317407800',
      image: 'https://i0.wp.com/www.cmit.kmitl.ac.th/wp-content/uploads/2023/06/CMIT-Kanoknan.png?w=762'
    },
    {
      id: 20,
      name: 'Dr. Mayuree Ployiem Riley',
      title: 'Assistant Professor',
      department: 'NANO',
      email: 'mayuree.ph@kmitl.ac.th',
      phone: '02-3298000 ext. 2173',
      
      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=23991156500',
      image: 'https://i0.wp.com/www.cmit.kmitl.ac.th/wp-content/uploads/2023/06/UN-CMIT.png?w=769'
    },
    {
      id: 21,
      name: 'Dr. Kittipong Amnuaysawat',
      title: 'Assistant Professor',
      department: 'NANO',
      email: 'kittiphong.am@kmitl.ac.th',
      phone: '02-3298000 ext. 3075',

      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=35361698900',
      image: 'https://i0.wp.com/www.cmit.kmitl.ac.th/wp-content/uploads/2017/07/aj_kittiphong-e1499763646756.jpg?fit=141%2C180'
    },
    {
      id: 22,
      name: 'Dr. Supamas Wirunchit',
      title: 'Assistant Professor',
      department: 'NANO',
      email: 'supamas.wi@kmitl.ac.th',
      phone: '02-3298000 ext. 3075',
  
      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=16320167600',
      image: 'https://i0.wp.com/www.cmit.kmitl.ac.th/wp-content/uploads/2023/06/UN-CMIT.png?w=769'
    },
    {
      id: 23,
      name: 'Dr. Khattiya Chalapat',
      title: 'Professor',
      department: 'NANO',
      email: 'khattiya.ch@kmitl.ac.th',
      phone: '02-3298000 ext. 2175',
    
      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=24537036500',
      image: 'https://i0.wp.com/www.cmit.kmitl.ac.th/wp-content/uploads/2023/06/UN-CMIT.png?w=769'
    },
    {
      id: 24,
      name: 'Dr. Thirayut Uwanno',
      title: 'Professor',
      department: 'NANO',
      email: 'teerayut.uw@kmitl.ac.th',
      phone: '02-3298000 ext. 2177',

      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=57039260800',
      image: 'https://i0.wp.com/www.cmit.kmitl.ac.th/wp-content/uploads/2023/06/UN-CMIT.png?w=769'
    },
    {
      id: 25,
      name: 'Dr. Chanyanan Bunrod',
      title: 'Professor',
      department: 'NANO',
      email: 'chayanan.bo@kmitl.ac.th',
      phone: '02-3298000 ext. ??',
      office: 'CMIT Building',
      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=57201667754',
      image: 'https://i0.wp.com/www.cmit.kmitl.ac.th/wp-content/uploads/2023/06/UN-CMIT.png?w=769'
    },
    {
      id: 26,
      name: 'Dr. Kamol Wasapinyokul',
      title: 'Assistant Professor (Head of Department)',
      department: 'MANU',
      email: 'kamol.wa@kmitl.ac.th',
      phone: '02-329-8264 ext. 2183',
      office: '55-Year Chalermprakiat Building, Room 405',
      research: 'Optoelectronics, inorganic and organic semiconductor-based devices, Photometry',
      image: 'https://www.ami.kmitl.ac.th/wp-content/uploads/2017/12/2-286x400.jpg'
    },
    {
      id: 27,
      name: 'Dr. Jatuporn Thongsri ',
      title: 'Associate Professor (Associate Dean)',
      department: 'MANU',
      email: 'Jatuporn.th@kmitl.ac.th',
      phone: '02-329-8264 ext. 2183',
      office: '55-Year Chalermprakiat Building, Room 406',
      research: 'Finite Element Analysis, Computational Fluid Dynamics and Numerical Method for Applied Mechanics',
      image: 'https://www.ami.kmitl.ac.th/wp-content/uploads/2020/02/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%97%E0%B8%B3%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%A3%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88_%E0%B9%92%E0%B9%90%E0%B9%90%E0%B9%92%E0%B9%92%E0%B9%95_0007-286x400.jpg'
    },
    {
      id: 28,
      name: 'Dr. Ananta Sinchai ',
      title: 'Assistant Professor (Associate Dean)',
      department: 'MANU',
      email: 'ananta.sin@kmitl.ac.th',
      phone: '02-329-8271 ext. 2182',
      office: '55-Year Chalermprakiat Building, Room 404',
      research: 'Image processing, Machine learning, IoT, Automation',
      image: 'https://www.ami.kmitl.ac.th/wp-content/uploads/2023/07/2-286x400.jpg'
    },
    {
      id: 29,
      name: 'Dr. Ploypailin Yongsiri',
      title: 'Assistant Professor (Assistant Dean)',
      department: 'MANU',
      email: 'ploypailin.yo@kmitl.ac.th',
      phone: '02-329-8271 ext. 2182',
      office: '55-Year Chalermprakiat Building',
      research: 'Glass and Glass-Ceramic Processing and Characterization, Electroceramics, Ferroelectric Materials, Energy Materials, Material Analysis',
      image: 'https://www.ami.kmitl.ac.th/wp-content/uploads/2020/02/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%97%E0%B8%B3%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%A3%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88_%E0%B9%92%E0%B9%90%E0%B9%90%E0%B9%92%E0%B9%92%E0%B9%95_0020-286x400.jpg'
    },
    {
      id: 30,
      name: 'Dr. Santhad Chuwongin',
      title: 'Assistant Professor (Head of CiRA)',
      department: 'MANU',
      email: 'santhad.ch@kmitl.ac.th',
      phone: '02-329-8264 ext. 2183',
      office: '55-Year Chalermprakiat Building, Room 405',
      research: 'Industrial Robot & AI, Deep Learning, Machine Learning, Optoelectronic devices, Nanophotonics',
      image: 'https://www.ami.kmitl.ac.th/wp-content/uploads/2017/12/14-286x400.jpg'
    },
    {
      id: 31,
      name: 'Dr. Chatrpol Pakasiri',

      title: 'Associate Professor (Dean)',
      department: 'MANU',
      email: 'chatrpol.pa@kmitl.ac.th',
      phone: ' 02-329-8264 ext. 2182',
      office: '55-Year Chalermprakiat Building, Room 404',
      research: 'Wireless Communication, electromagnetic compatibility research, RF/Microwave active and passive Design, numerical Method for Electromagnetics Research',
      image: 'https://www.ami.kmitl.ac.th/wp-content/uploads/2020/02/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%97%E0%B8%B3%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%A3%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88_%E0%B9%92%E0%B9%90%E0%B9%90%E0%B9%92%E0%B9%92%E0%B9%95_0025-286x400.jpg'
    },
    {
      id: 32,
      name: 'Dr. Rachsak Sakdanuphab',

      title: 'Associate Professor',
      department: 'MANU',
      email: 'rachsak.sa@kmitl.ac.th',
      phone: '02-329-8264 ext. 2183',
      office: '55-Year Chalermprakiat Building, Room 405',
      research: 'Thin film semiconductor devices such as solar cells and thermoelectric module',
      image: 'https://www.ami.kmitl.ac.th/wp-content/uploads/2020/02/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%97%E0%B8%B3%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%A3%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88_%E0%B9%92%E0%B9%90%E0%B9%90%E0%B9%92%E0%B9%92%E0%B9%95_0028-286x400.jpg'
    },
    {
      id: 33,
      name: 'Dr. Chanon Warisarn',
      title: 'Associate Professor',
      department: 'MANU',
      email: 'chanon.wa@kmitl.ac.th',
      phone: '02-329-8264 ext. 2150',
      office: '55-Year Chalermprakiat Building, Room 406',
      research: 'Magnetic recording technology, realistic writing/reading channel model, micromagnetic modeling, coding and signal processing',
      image: 'https://www.ami.kmitl.ac.th/wp-content/uploads/2020/02/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%97%E0%B8%B3%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%A3%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88_%E0%B9%92%E0%B9%90%E0%B9%90%E0%B9%92%E0%B9%92%E0%B9%95_0026-286x400.jpg'
    },
    {
      id: 34,
      name: 'Dr. Lertsak Lekawat ',
      title: 'Assistant Professor',
      department: 'MANU',
      email: 'lertsak@ine.co.th',
      phone: '02-329-8264 ext. 2152',
      office: '55-Year Chalermprakiat Building, 4th floor',
      research: 'Management by fact and systematic thinking using Six-Sigma DMAIC approach, computer software such as MINITAB is required for statistical data analysis',
      image: 'https://www.ami.kmitl.ac.th/wp-content/uploads/2021/05/44FB38FF-9492-4D77-B06D-FE729E20684A.jpeg'
    },
    {
      id: 35,
      name: 'Dr. Komgrit Jaksukam',
      title: 'Assistant Professor',
      department: 'MANU',
      email: 'komgrit.ja@kmitl.ac.th',
      phone: '02-329-8271',
      office: '55-Year Chalermprakiat Building',
      research: 'Wireless sensor networks, Embedded system, Multi-hop networks, Ultrasound measurement application',
      image: 'https://www.ami.kmitl.ac.th/wp-content/uploads/2020/02/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%97%E0%B8%B3%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%A3%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88_%E0%B9%92%E0%B9%90%E0%B9%90%E0%B9%92%E0%B9%92%E0%B9%95_0002-286x400.jpg'
    },
    {
      id: 36,
      name: 'Dr. Kittipon Kankhunthod',
      title: 'Professor',
      department: 'MANU',
      email: 'kittipon.ka@kmitl.ac.th',
      phone: '02-329-8264 ext. 2182',
      office: '55-Year Chalermprakiat Building, Room 404',
      research: 'Industrial robot and Automation, AI, Signal processing, and Data analysis',
      image: 'https://www.ami.kmitl.ac.th/wp-content/uploads/2023/07/1-286x400.jpg'
    }

  ];


  // Filter lecturers based on search and department
  const filteredLecturers = useMemo(() => {
    return lecturers.filter(lecturer => {
  
      const term = searchQuery.toLowerCase();
      
      const name = (lecturer.name || "").toLowerCase();
      const thaiName = (lecturer.thaiName || ""); 
      const research = (lecturer.research || "").toLowerCase();
      const title = (lecturer.title || "").toLowerCase(); 
      
      const matchesSearch = 
        name.includes(term) ||
        thaiName.includes(searchQuery) ||
        research.includes(term) ||
        title.includes(term); 
      
      const matchesDepartment = 
        selectedDepartment === 'all' || lecturer.department === selectedDepartment;
      
      return matchesSearch && matchesDepartment;
    });
  }, [searchQuery, selectedDepartment]);

  // Count lecturers by department
  const amiCount = lecturers.filter(l => l.department === 'MANU').length;
  const cmitCount = lecturers.filter(l => l.department === 'NANO').length;

  return (
    <div className="lecturer-container">
      {/* Header */}
      <header className="lecturer-header">
        <div className="header-decoration"></div>
        <div className="header-content">
          <h1 className="header-title">Our Lecturers</h1>
          <p className="header-subtitle">School of Integrated Innovative Technology</p>
          <p className="header-institution">King Mongkut's Institute of Technology Ladkrabang</p>
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
              placeholder="Search by name or research interest..."
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

        {/* Department Filter */}
        <div className="filter-section">
          <button
            className={`filter-btn ${selectedDepartment === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedDepartment('all')}
          >
            All Departments
            <span className="count-badge">{lecturers.length}</span>
          </button>
          <button
            className={`filter-btn ${selectedDepartment === 'MANU' ? 'active' : ''}`}
            onClick={() => setSelectedDepartment('MANU')}
          >
            MANU
            <span className="count-badge">{amiCount}</span>
          </button>
          <button
            className={`filter-btn ${selectedDepartment === 'NANO' ? 'active' : ''}`}
            onClick={() => setSelectedDepartment('NANO')}
          >
            NANO
            <span className="count-badge">{cmitCount}</span>
          </button>
        </div>
      </div>

      {/* Results Info */}
      <div className="results-info">
        <p>
          {filteredLecturers.length} {filteredLecturers.length === 1 ? 'lecturer' : 'lecturers'} found
          {searchQuery && <span className="search-term"> for "{searchQuery}"</span>}
        </p>
      </div>

      {/* Lecturers Grid */}
      <div className="lecturers-content">
        {filteredLecturers.length > 0 ? (
          <div className="lecturers-grid">
            {filteredLecturers.map((lecturer) => (
              <article key={lecturer.id} className="lecturer-card">
                <div className="card-header">
                  <div className="lecturer-image-wrapper">
                    <img 
                      src={lecturer.image} 
                      alt={lecturer.name}
                      className="lecturer-image"
                    />
                    <div className="dept-badge">{lecturer.department}</div>
                  </div>
                </div>
                
                <div className="card-body">
                  <h3 className="lecturer-name">{lecturer.name}</h3>
                  <p className="lecturer-thai-name">{lecturer.thaiName}</p>
                  <p className="lecturer-title">{lecturer.title}</p>
                  
                  <div className="card-divider"></div>
                  
                  <div className="people-contact-info">
                    <div className="info-item">
                      <svg className="info-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M2.5 5.5L8 9l5.5-3.5M3 11h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <a href={`mailto:${lecturer.email}`} className="info-link">
                        {lecturer.email}
                      </a>
                    </div>
                    
                    <div className="info-item">
                      <svg className="info-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M14 11v2a1.5 1.5 0 0 1-1.5 1.5A12.5 12.5 0 0 1 2 4 1.5 1.5 0 0 1 3.5 2.5H6l1 3-1.5 1a9 9 0 0 0 5 5l1-1.5 3 1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="info-text">{lecturer.phone}</span>
                    </div>
                    
                    {/* <div className="info-item">
                      <svg className="info-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M13 6.5c0 4-5 8-5 8s-5-4-5-8a5 5 0 0 1 10 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="info-text">{lecturer.office}</span>
                    </div> */}
                  </div>
                  
                  <div className="research-area">
                    <h4 className="research-label">Research Interests</h4>
                    {lecturer.department === 'CMIT' ? (
                    <a 
                    href={lecturer.researchLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="research-link">
                    Research Profile &rarr;
                    </a>) : (
                    <p className="research-text">{lecturer.research}</p>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <svg className="no-results-icon" width="64" height="64" viewBox="0 0 64 64" fill="none">
              <circle cx="26" cy="26" r="18" stroke="currentColor" strokeWidth="3"/>
              <path d="M39 39l16 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            </svg>
            <h3>No lecturers found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="lecturer-footer">
        <p>© 2024 School of Integrated Innovative Technology — KMITL</p>
      </footer>
    </div>
  );
};

export default LecturerPage;