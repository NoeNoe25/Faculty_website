// Shared by the Staff (/AcademicStaff) and Lecturers (/LecturerPage) directories.
// `terms` translates recurring data values (positions, titles, research interests) by
// their English text; anything not listed is shown as-is. Personal names, emails,
// phone numbers and building names are intentionally left untranslated.
const en = {
  common: {
    searchClear: 'Clear search',
    resultsFor: ' for "{query}"',
    tryAdjusting: 'Try adjusting your search or filter criteria',
    footer: '© 2024 School of Integrated Innovative Technology — KMITL',
    notAvailable: 'N/A',
  },
  staff: {
    title: 'Our Staff',
    searchPlaceholder: 'Search by name, position, or department...',
    allStaff: 'All Staff',
    scientistsFilter: 'Scientists & Technicians',
    resultsOne: '{count} staff member found',
    resultsMany: '{count} staff members found',
    noResults: 'No staff members found',
  },
  lecturers: {
    title: 'Our Lecturers',
    searchPlaceholder: 'Search by name or research interest...',
    allDepartments: 'All Departments',
    resultsOne: '{count} lecturer found',
    resultsMany: '{count} lecturers found',
    researchInterests: 'Research Interests',
    researchProfile: 'Research Profile',
    noResults: 'No lecturers found',
  },
  terms: {},
};

const th = {
  common: {
    searchClear: 'ล้างการค้นหา',
    resultsFor: ' สำหรับ "{query}"',
    tryAdjusting: 'ลองปรับคำค้นหาหรือตัวกรองใหม่',
    footer: '© 2567 คณะเทคโนโลยีบูรณาการนวัตกรรม — สจล.',
    notAvailable: 'ไม่มีข้อมูล',
  },
  staff: {
    title: 'บุคลากร',
    searchPlaceholder: 'ค้นหาจากชื่อ ตำแหน่ง หรือหน่วยงาน...',
    allStaff: 'บุคลากรทั้งหมด',
    scientistsFilter: 'นักวิทยาศาสตร์และช่างเทคนิค',
    resultsOne: 'พบบุคลากร {count} คน',
    resultsMany: 'พบบุคลากร {count} คน',
    noResults: 'ไม่พบบุคลากร',
  },
  lecturers: {
    title: 'คณาจารย์',
    searchPlaceholder: 'ค้นหาจากชื่อหรือความเชี่ยวชาญด้านการวิจัย...',
    allDepartments: 'ทุกภาควิชา',
    resultsOne: 'พบอาจารย์ {count} ท่าน',
    resultsMany: 'พบอาจารย์ {count} ท่าน',
    researchInterests: 'ความเชี่ยวชาญด้านการวิจัย',
    researchProfile: 'ผลงานวิจัย',
    noResults: 'ไม่พบอาจารย์',
  },
  terms: {
    // Staff categories
    'General Administration': 'งานบริหารทั่วไป',
    'Scientists and Technicians': 'นักวิทยาศาสตร์และช่างเทคนิค',
    // Staff positions
    'Secretary, Executive Meeting Secretary': 'เลขานุการ, เลขานุการที่ประชุมผู้บริหาร',
    'Educational quality assurance, ITA, EdPEx': 'งานประกันคุณภาพการศึกษา, ITA, EdPEx',
    'Human Resources, Research & Development': 'งานบุคคล, งานวิจัยและพัฒนา',
    'Financial Officer': 'เจ้าหน้าที่การเงิน',
    'Financial Officer, Human Resources': 'เจ้าหน้าที่การเงิน, งานบุคคล',
    'Graduate Student Registration Office': 'งานทะเบียนนักศึกษาบัณฑิตศึกษา',
    'Undergraduate Student Registration Office Nano': 'งานทะเบียนนักศึกษาปริญญาตรี (NANO)',
    'Building works, Research & Development': 'งานอาคารสถานที่, งานวิจัยและพัฒนา',
    'Procurement Officer': 'เจ้าหน้าที่พัสดุ',
    'Records Officer, Public relations': 'งานสารบรรณ, งานประชาสัมพันธ์',
    'Strategic planning': 'งานแผนยุทธศาสตร์',
    'Student Affairs, Scholarships': 'งานกิจการนักศึกษา, ทุนการศึกษา',
    Scientist: 'นักวิทยาศาสตร์',
    Engineer: 'วิศวกร',
    Technician: 'ช่างเทคนิค',
    // Academic titles
    Professor: 'ศาสตราจารย์',
    'Associate Professor': 'รองศาสตราจารย์',
    'Assistant Professor': 'ผู้ช่วยศาสตราจารย์',
    'Associate Professor (Dean)': 'รองศาสตราจารย์ (คณบดี)',
    'Associate Professor (Associate Dean)': 'รองศาสตราจารย์ (รองคณบดี)',
    'Assistant Professor (Head of Department)': 'ผู้ช่วยศาสตราจารย์ (หัวหน้าภาควิชา)',
    'Assistant Professor (Head of CiRA)': 'ผู้ช่วยศาสตราจารย์ (หัวหน้าศูนย์ CiRA)',
    'Assistant Professor (Associate Dean)': 'ผู้ช่วยศาสตราจารย์ (รองคณบดี)',
    'Assistant Professor (Assistant Dean)': 'ผู้ช่วยศาสตราจารย์ (ผู้ช่วยคณบดี)',
    // Research interests
    'Finite Element Analysis, Computational Fluid Dynamics and Numerical Method for Applied Mechanics':
      'การวิเคราะห์ไฟไนต์เอลิเมนต์ พลศาสตร์ของไหลเชิงคำนวณ และระเบียบวิธีเชิงตัวเลขสำหรับกลศาสตร์ประยุกต์',
    'Thin film semiconductor devices such as solar cells and thermoelectric module':
      'อุปกรณ์สารกึ่งตัวนำแบบฟิล์มบาง เช่น เซลล์แสงอาทิตย์และโมดูลเทอร์โมอิเล็กทริก',
    'Wireless Communication, electromagnetic compatibility research, RF/Microwave active and passive Design':
      'การสื่อสารไร้สาย, การวิจัยด้านความเข้ากันได้ทางแม่เหล็กไฟฟ้า, การออกแบบวงจร RF/ไมโครเวฟแบบแอกทีฟและพาสซีฟ',
    'Industrial Robot & AI, Deep Learning, Machine Learning, Optoelectronic devices':
      'หุ่นยนต์อุตสาหกรรมและ AI, การเรียนรู้เชิงลึก, การเรียนรู้ของเครื่อง, อุปกรณ์ออปโตอิเล็กทรอนิกส์',
    'Wireless sensor networks, Embedded system, Multi-hop networks':
      'เครือข่ายเซนเซอร์ไร้สาย, ระบบสมองกลฝังตัว, เครือข่ายแบบหลายฮอป',
    'Image processing, Machine learning, IoT, Automation':
      'การประมวลผลภาพ, การเรียนรู้ของเครื่อง, IoT, ระบบอัตโนมัติ',
    'Optoelectronics, inorganic and organic semiconductor-based devices':
      'ออปโตอิเล็กทรอนิกส์, อุปกรณ์สารกึ่งตัวนำอนินทรีย์และอินทรีย์',
    'Industrial robot and Automation, AI, Signal processing, and Data analysis':
      'หุ่นยนต์อุตสาหกรรมและระบบอัตโนมัติ, AI, การประมวลผลสัญญาณ และการวิเคราะห์ข้อมูล',
    'Glass and Glass-Ceramic Processing, Electroceramics, Ferroelectric Materials':
      'กระบวนการผลิตแก้วและแก้วเซรามิก, อิเล็กโทรเซรามิก, วัสดุเฟร์โรอิเล็กทริก',
    'Mechanical Engineering, Manufacturing Systems': 'วิศวกรรมเครื่องกล, ระบบการผลิต',
    'Magnetic recording technology, micromagnetic modeling, coding and signal processing':
      'เทคโนโลยีการบันทึกข้อมูลเชิงแม่เหล็ก, การจำลองไมโครแมกเนติก, การเข้ารหัสและการประมวลผลสัญญาณ',
  },
};

const people = { en, th };
export default people;
