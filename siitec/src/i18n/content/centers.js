// Phrase table for the research center pages (CiRA, KAISEM, ATTAC), used through usePhrases().
// Keys are the exact English text on the page (including stray spaces); if the English
// changes, update the key here too, or the text falls back to English.
const th = {
  // Hero and tabs
  'Research Center': 'ศูนย์วิจัย',
  'Center of Industrial Robots': 'ศูนย์หุ่นยนต์อุตสาหกรรม',
  'and Automation': 'และระบบอัตโนมัติ',
  'Academy of Innovative Semiconductor': 'สถาบันนวัตกรรมเซมิคอนดักเตอร์',
  'Advanced Technology Testing': 'ศูนย์ทดสอบและวิเคราะห์',
  'and Analysis Center': 'เทคโนโลยีขั้นสูง',
  'Advancing the future of industrial automation through cutting-edge research, innovation, and collaboration with industry partners.':
    'ขับเคลื่อนอนาคตของระบบอัตโนมัติในอุตสาหกรรม ด้วยงานวิจัยล้ำสมัย นวัตกรรม และความร่วมมือกับพันธมิตรภาคอุตสาหกรรม',
  'Visit Website': 'เยี่ยมชมเว็บไซต์',
  'Research Projects': 'โครงการวิจัย',
  'Industry Partners': 'พันธมิตรภาคอุตสาหกรรม',
  Publications: 'ผลงานตีพิมพ์',
  Overview: 'ภาพรวม',
  'Research Areas': 'สาขาการวิจัย',
  Facilities: 'สิ่งอำนวยความสะดวก',
  Projects: 'โครงการ',
  Activities: 'กิจกรรม',
  'Our Team': 'ทีมงาน',

  // Overview
  'About CiRA': 'เกี่ยวกับ CiRA',
  'Our Mission': 'พันธกิจ',
  "The Center of Industrial Robots and Automation (CiRA) is dedicated to advancing the field of industrial automation through innovative research, development of cutting-edge technologies, and collaboration with industry partners. We strive to bridge the gap between academic research and industrial applications, contributing to Thailand's transition towards Industry 4.0.":
    'ศูนย์หุ่นยนต์อุตสาหกรรมและระบบอัตโนมัติ (CiRA) มุ่งมั่นพัฒนาด้านระบบอัตโนมัติในอุตสาหกรรม ผ่านงานวิจัยเชิงนวัตกรรม การพัฒนาเทคโนโลยีล้ำสมัย และความร่วมมือกับพันธมิตรภาคอุตสาหกรรม เรามุ่งเชื่อมโยงงานวิจัยทางวิชาการเข้ากับการใช้งานจริงในอุตสาหกรรม เพื่อสนับสนุนการก้าวสู่อุตสาหกรรม 4.0 ของประเทศไทย',
  Vision: 'วิสัยทัศน์',
  'To be a leading research center in Southeast Asia for industrial robotics and automation, recognized for excellence in research, innovation, and technology transfer that drives industrial transformation and economic growth.':
    'เป็นศูนย์วิจัยชั้นนำในเอเชียตะวันออกเฉียงใต้ด้านหุ่นยนต์อุตสาหกรรมและระบบอัตโนมัติ ที่ได้รับการยอมรับในความเป็นเลิศด้านการวิจัย นวัตกรรม และการถ่ายทอดเทคโนโลยี ซึ่งขับเคลื่อนการเปลี่ยนแปลงของภาคอุตสาหกรรมและการเติบโตทางเศรษฐกิจ',
  'Core Objectives': 'วัตถุประสงค์หลัก',
  'Conduct cutting-edge research in robotics and automation technologies':
    'ดำเนินงานวิจัยล้ำสมัยด้านเทคโนโลยีหุ่นยนต์และระบบอัตโนมัติ',
  'Develop innovative solutions for industrial challenges': 'พัฒนาทางออกเชิงนวัตกรรมสำหรับความท้าทายในภาคอุตสาหกรรม',
  'Foster collaboration between academia and industry': 'ส่งเสริมความร่วมมือระหว่างสถาบันการศึกษาและภาคอุตสาหกรรม',
  'Train the next generation of automation engineers and researchers':
    'ผลิตวิศวกรและนักวิจัยด้านระบบอัตโนมัติรุ่นใหม่',
  "Contribute to Thailand's digital transformation and Industry 4.0 initiatives":
    'มีส่วนร่วมในการเปลี่ยนผ่านสู่ดิจิทัลและโครงการอุตสาหกรรม 4.0 ของประเทศไทย',
  'Quick Facts': 'ข้อมูลโดยสังเขป',
  'Established:': 'ก่อตั้ง:',
  'Location:': 'ที่ตั้ง:',
  'Research Staff:': 'บุคลากรวิจัย:',
  '12+ Members': '12+ คน',
  'Lab Space:': 'พื้นที่ห้องปฏิบัติการ:',
  '500+ sq.m': '500+ ตร.ม.',
  'Contact Information': 'ข้อมูลการติดต่อ',
  'SIIT Building, KMITL': 'อาคาร SIIT สจล.',
  'SIIT, KMITL': 'SIIT สจล.',

  // Research areas
  'Our research spans multiple disciplines in robotics and automation':
    'งานวิจัยของเราครอบคลุมหลายสาขาด้านหุ่นยนต์และระบบอัตโนมัติ',
  'Industrial Robotics': 'หุ่นยนต์อุตสาหกรรม',
  'Machine Vision': 'แมชชีนวิชัน',
  'Control Systems': 'ระบบควบคุม',
  'AI & Machine Learning': 'AI และการเรียนรู้ของเครื่อง',
  'Advanced robotic systems for manufacturing, assembly, and material handling in industrial environments.':
    'ระบบหุ่นยนต์ขั้นสูงสำหรับการผลิต การประกอบ และการขนถ่ายวัสดุในสภาพแวดล้อมอุตสาหกรรม',
  'Computer vision systems for quality inspection, object recognition, and visual guidance in automated processes.':
    'ระบบคอมพิวเตอร์วิชันสำหรับการตรวจสอบคุณภาพ การรู้จำวัตถุ และการนำทางด้วยภาพในกระบวนการอัตโนมัติ',
  'Intelligent control algorithms for precision motion control, process optimization, and system integration.':
    'อัลกอริทึมควบคุมอัจฉริยะสำหรับการควบคุมการเคลื่อนที่อย่างแม่นยำ การปรับกระบวนการให้เหมาะสม และการบูรณาการระบบ',
  'Application of artificial intelligence for predictive maintenance, adaptive control, and decision-making.':
    'การประยุกต์ใช้ปัญญาประดิษฐ์สำหรับการบำรุงรักษาเชิงคาดการณ์ การควบคุมแบบปรับตัว และการตัดสินใจ',

  // Facilities
  'Research Facilities': 'สิ่งอำนวยความสะดวกด้านการวิจัย',
  'State-of-the-art laboratories and equipment for research and development':
    'ห้องปฏิบัติการและเครื่องมือที่ทันสมัยสำหรับการวิจัยและพัฒนา',
  'Key Equipment': 'เครื่องมือหลัก',
  'Low Cost Robots  with ROS (Robot operating system)': 'หุ่นยนต์ต้นทุนต่ำด้วย ROS (ระบบปฏิบัติการหุ่นยนต์)',
  'Collaborative Robot for Industrial Application  ': 'หุ่นยนต์ทำงานร่วมกับมนุษย์สำหรับงานอุตสาหกรรม',
  'Development of a gripper design ': 'การพัฒนาการออกแบบมือจับหุ่นยนต์',
  'Multiple View Geometry in Computer Vision (Machine Learning) ':
    'เรขาคณิตหลายมุมมองในคอมพิวเตอร์วิชัน (การเรียนรู้ของเครื่อง)',
  'Robotics Laboratory': 'ห้องปฏิบัติการหุ่นยนต์',
  'Vision Systems Lab': 'ห้องปฏิบัติการระบบวิชัน',
  'Control Systems Lab': 'ห้องปฏิบัติการระบบควบคุม',
  'Prototyping Workshop': 'โรงปฏิบัติงานสร้างต้นแบบ',
  'State-of-the-art facility equipped with industrial robots, collaborative robots, and automation systems.':
    'สิ่งอำนวยความสะดวกที่ทันสมัย พร้อมหุ่นยนต์อุตสาหกรรม หุ่นยนต์ทำงานร่วมกับมนุษย์ และระบบอัตโนมัติ',
  'Advanced imaging and computer vision laboratory for research and development.':
    'ห้องปฏิบัติการด้านการถ่ายภาพขั้นสูงและคอมพิวเตอร์วิชันสำหรับการวิจัยและพัฒนา',
  'Facility for designing, testing, and implementing control systems and automation solutions.':
    'สิ่งอำนวยความสะดวกสำหรับการออกแบบ ทดสอบ และติดตั้งระบบควบคุมและระบบอัตโนมัติ',
  'Equipped workshop for rapid prototyping and development of automation solutions.':
    'โรงปฏิบัติงานพร้อมอุปกรณ์สำหรับการสร้างต้นแบบอย่างรวดเร็วและการพัฒนาระบบอัตโนมัติ',
  '6-Axis Industrial Robots': 'หุ่นยนต์อุตสาหกรรม 6 แกน',
  'Collaborative Robot Arms': 'แขนหุ่นยนต์ทำงานร่วมกับมนุษย์',
  'AGV Systems': 'ระบบรถขนส่งอัตโนมัติ (AGV)',
  'High-Speed Cameras': 'กล้องความเร็วสูง',
  '3D Scanners': 'เครื่องสแกนสามมิติ',
  'Vision Sensors': 'เซนเซอร์วิชัน',
  PLCs: 'PLC',
  'HMI Systems': 'ระบบ HMI',
  'SCADA Software': 'ซอฟต์แวร์ SCADA',
  '3D Printers': 'เครื่องพิมพ์สามมิติ',
  'CNC Machines': 'เครื่องจักร CNC',
  'Electronics Lab': 'ห้องปฏิบัติการอิเล็กทรอนิกส์',

  // Projects
  'Current and completed research projects advancing automation technology':
    'โครงการวิจัยที่กำลังดำเนินการและเสร็จสิ้นแล้ว เพื่อพัฒนาเทคโนโลยีระบบอัตโนมัติ',
  Ongoing: 'กำลังดำเนินการ',
  Completed: 'เสร็จสิ้น',
  'Smart Manufacturing System': 'ระบบการผลิตอัจฉริยะ',
  'Collaborative Robot for SMEs': 'หุ่นยนต์ทำงานร่วมกับมนุษย์สำหรับ SMEs',
  'Automated Quality Inspection': 'การตรวจสอบคุณภาพอัตโนมัติ',
  'Mobile Robot Navigation': 'การนำทางหุ่นยนต์เคลื่อนที่',
  'Development of an intelligent manufacturing system integrating robotics, IoT, and AI for Industry 4.0.':
    'การพัฒนาระบบการผลิตอัจฉริยะที่บูรณาการหุ่นยนต์ IoT และ AI สำหรับอุตสาหกรรม 4.0',
  'Design and implementation of affordable collaborative robot solutions for small and medium enterprises.':
    'การออกแบบและติดตั้งระบบหุ่นยนต์ทำงานร่วมกับมนุษย์ในราคาที่เข้าถึงได้ สำหรับวิสาหกิจขนาดกลางและขนาดย่อม',
  'AI-powered vision system for automated quality inspection in manufacturing processes.':
    'ระบบวิชันที่ขับเคลื่อนด้วย AI สำหรับการตรวจสอบคุณภาพอัตโนมัติในกระบวนการผลิต',
  'Advanced navigation and path planning for autonomous mobile robots in industrial settings.':
    'การนำทางและวางแผนเส้นทางขั้นสูงสำหรับหุ่นยนต์เคลื่อนที่อัตโนมัติในสภาพแวดล้อมอุตสาหกรรม',
  'Video Showcase': 'วิดีโอผลงาน',
  'Watch our latest research demonstrations and laboratory tours':
    'ชมการสาธิตงานวิจัยและการเยี่ยมชมห้องปฏิบัติการล่าสุดของเรา',
  'CiRA Robotics Lab Tour': 'เยี่ยมชมห้องปฏิบัติการหุ่นยนต์ CiRA',
  'Industry 4.0 Workshop': 'เวิร์กช็อปอุตสาหกรรม 4.0',
  'A virtual tour of our state-of-the-art robotics laboratory showcasing advanced automation systems.':
    'ทัวร์เสมือนจริงในห้องปฏิบัติการหุ่นยนต์ที่ทันสมัยของเรา พร้อมจัดแสดงระบบอัตโนมัติขั้นสูง',
  'Highlights from our annual Industry 4.0 workshop featuring collaborative robot demonstrations.':
    'ไฮไลต์จากเวิร์กช็อปอุตสาหกรรม 4.0 ประจำปี พร้อมการสาธิตหุ่นยนต์ทำงานร่วมกับมนุษย์',

  // Activities and team
  'Our recent activities and workshops': 'กิจกรรมและการอบรมล่าสุดของเรา',
  'Meet the experts driving innovation in robotics and automation':
    'พบกับผู้เชี่ยวชาญที่ขับเคลื่อนนวัตกรรมด้านหุ่นยนต์และระบบอัตโนมัติ',
  'Expertise:': 'ความเชี่ยวชาญ:',
  'Center Director': 'ผู้อำนวยการศูนย์',
  'Senior Researcher': 'นักวิจัยอาวุโส',
  'Lead Engineer': 'หัวหน้าวิศวกร',
  'Robotics, Automation Systems': 'หุ่นยนต์, ระบบอัตโนมัติ',
  'Machine Vision, AI': 'แมชชีนวิชัน, AI',
  'Control Systems, Integration': 'ระบบควบคุม, การบูรณาการระบบ',
};

const centers = { th };
export default centers;
