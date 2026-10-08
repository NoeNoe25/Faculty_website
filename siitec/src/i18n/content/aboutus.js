// About Us page (/aboutus).
const en = {
  heroTitle: 'Shaping the Future of Technology Education',
  heroSubtitle:
    'Pioneering integrated technology education since 2010, we bridge the gap between theoretical knowledge and practical innovation to create the technology leaders of tomorrow.',
  statistics: [
    'Students Enrolled',
    'Faculty Members',
    'Graduation Rate',
    'Employment Rate',
    'Research Labs',
    'Research Funding',
  ],
  missionTitle: 'Our Mission',
  missionText:
    'To provide transformative technology education that integrates cutting-edge research, industry collaboration, and innovative teaching methodologies. We prepare students to excel in rapidly evolving technological landscapes and drive meaningful change.',
  visionTitle: 'Our Vision',
  visionText:
    'To be the global leader in integrated technology education, recognized for producing visionary leaders who solve complex challenges through interdisciplinary innovation and ethical technological advancement.',
  valuesTitle: 'Our Values',
  valuesList: [
    'Innovation & Creativity',
    'Academic Excellence',
    'Collaborative Spirit',
    'Ethical Leadership',
    'Global Citizenship',
  ],
  journeyTitle: 'Our Journey',
  journeySubtitle: 'From foundation to future-ready technology education',
  timeline: [
    { title: 'Foundation Established', description: 'Institute founded with focus on integrated technology education' },
    { title: 'First Accreditation', description: 'Received ABET accreditation for engineering programs' },
    { title: 'Research Center Launch', description: 'Opened Advanced Technology Research Center' },
    { title: 'International Recognition', description: 'Ranked among top technology institutes globally' },
    { title: 'Campus Expansion', description: 'New innovation wing added with state-of-the-art facilities' },
    { title: 'Future Ready Initiative', description: 'Launched AI and emerging technology curriculum' },
  ],
  leadershipTitle: 'Leadership Team',
  leadershipSubtitle: 'Meet the visionaries driving our technological education mission',
  leaders: [
    {
      name: 'Dr. Evelyn Rodriguez',
      position: 'Founder & Director',
      department: 'Integrated Technology Systems',
      education: 'Ph.D. in Advanced Technology Integration, MIT',
      expertise: ['Systems Engineering', 'Technology Innovation', 'Academic Leadership'],
      quote: 'Our mission is to bridge the gap between theoretical knowledge and practical technological innovation.',
    },
    {
      name: 'Prof. Michael Chen',
      position: 'Dean of Academic Affairs',
      department: 'Nanotechnology Engineering',
      education: 'Ph.D. in Materials Science, Stanford University',
      expertise: ['Nanomaterials', 'Research Methodology', 'Curriculum Development'],
      quote: 'We empower students to become pioneers in emerging technology fields.',
    },
    {
      name: 'Dr. Sarah Williams',
      position: 'Head of Research & Development',
      department: 'STEM Education Research',
      education: 'Ph.D. in Educational Technology, Harvard University',
      expertise: ['STEM Pedagogy', 'Learning Technologies', 'Research Innovation'],
      quote: 'Innovation in education is the cornerstone of technological advancement.',
    },
  ],
  coreValuesTitle: 'Our Core Values',
  coreValuesSubtitle: 'The principles that guide our educational philosophy',
  coreValues: [
    { title: 'Innovation', description: 'Pushing boundaries in technology education and research' },
    { title: 'Collaboration', description: 'Fostering partnerships between academia and industry' },
    { title: 'Global Impact', description: 'Addressing worldwide technological challenges' },
    { title: 'Excellence', description: 'Maintaining highest standards in education and research' },
    { title: 'Creativity', description: 'Encouraging innovative thinking and problem-solving' },
    { title: 'Lifelong Learning', description: 'Cultivating continuous growth and adaptation' },
  ],
  campusTitle: 'State-of-the-Art Campus',
  campusText:
    'Our 50-acre campus features cutting-edge facilities designed to foster innovation and collaboration. From advanced research laboratories to collaborative learning spaces, we provide an environment where technology thrives.',
  campusFacilities: [
    'Advanced Research Laboratories',
    'High-Performance Computing Center',
    'Innovation & Incubation Hub',
    'Digital Library Resources',
  ],
  campusImageAlt: 'Campus Facilities',
  ctaTitle: 'Join Our Innovative Community',
  ctaText:
    "Be part of an institution that's shaping the future of technology. Whether you're a prospective student, researcher, or industry partner, there's a place for you in our vibrant technological ecosystem.",
  applyNow: 'Apply Now',
  scheduleVisit: 'Schedule Visit',
  contactUs: 'Contact Us',
};

const th = {
  heroTitle: 'สร้างอนาคตของการศึกษาด้านเทคโนโลยี',
  heroSubtitle:
    'ในฐานะผู้บุกเบิกการศึกษาด้านเทคโนโลยีเชิงบูรณาการตั้งแต่ปี 2553 เราเชื่อมโยงองค์ความรู้เชิงทฤษฎีเข้ากับนวัตกรรมเชิงปฏิบัติ เพื่อสร้างผู้นำด้านเทคโนโลยีแห่งอนาคต',
  statistics: [
    'นักศึกษา',
    'คณาจารย์',
    'อัตราการสำเร็จการศึกษา',
    'อัตราการได้งานทำ',
    'ห้องปฏิบัติการวิจัย',
    'ทุนวิจัย',
  ],
  missionTitle: 'พันธกิจ',
  missionText:
    'จัดการศึกษาด้านเทคโนโลยีที่สร้างการเปลี่ยนแปลง โดยบูรณาการงานวิจัยล้ำสมัย ความร่วมมือกับภาคอุตสาหกรรม และวิธีการสอนเชิงนวัตกรรม เพื่อเตรียมนักศึกษาให้โดดเด่นในโลกเทคโนโลยีที่เปลี่ยนแปลงอย่างรวดเร็ว และขับเคลื่อนการเปลี่ยนแปลงที่มีความหมาย',
  visionTitle: 'วิสัยทัศน์',
  visionText:
    'เป็นผู้นำระดับโลกด้านการศึกษาเทคโนโลยีเชิงบูรณาการ ได้รับการยอมรับในการผลิตผู้นำที่มีวิสัยทัศน์ ซึ่งแก้ไขความท้าทายที่ซับซ้อนด้วยนวัตกรรมแบบสหวิทยาการและความก้าวหน้าทางเทคโนโลยีอย่างมีจริยธรรม',
  valuesTitle: 'ค่านิยม',
  valuesList: [
    'นวัตกรรมและความคิดสร้างสรรค์',
    'ความเป็นเลิศทางวิชาการ',
    'จิตวิญญาณแห่งความร่วมมือ',
    'ภาวะผู้นำอย่างมีจริยธรรม',
    'ความเป็นพลเมืองโลก',
  ],
  journeyTitle: 'เส้นทางของเรา',
  journeySubtitle: 'จากจุดเริ่มต้นสู่การศึกษาด้านเทคโนโลยีที่พร้อมสำหรับอนาคต',
  timeline: [
    { title: 'ก่อตั้งสถาบัน', description: 'ก่อตั้งสถาบันโดยมุ่งเน้นการศึกษาด้านเทคโนโลยีเชิงบูรณาการ' },
    { title: 'การรับรองครั้งแรก', description: 'ได้รับการรับรองมาตรฐาน ABET สำหรับหลักสูตรวิศวกรรมศาสตร์' },
    { title: 'เปิดศูนย์วิจัย', description: 'เปิดศูนย์วิจัยเทคโนโลยีขั้นสูง' },
    { title: 'การยอมรับระดับนานาชาติ', description: 'ได้รับการจัดอันดับให้อยู่ในกลุ่มสถาบันเทคโนโลยีชั้นนำของโลก' },
    { title: 'ขยายวิทยาเขต', description: 'เพิ่มอาคารนวัตกรรมแห่งใหม่พร้อมสิ่งอำนวยความสะดวกที่ทันสมัย' },
    { title: 'โครงการพร้อมสู่อนาคต', description: 'เปิดหลักสูตรด้าน AI และเทคโนโลยีเกิดใหม่' },
  ],
  leadershipTitle: 'ทีมผู้บริหาร',
  leadershipSubtitle: 'พบกับผู้มีวิสัยทัศน์ที่ขับเคลื่อนพันธกิจด้านการศึกษาเทคโนโลยีของเรา',
  leaders: [
    {
      position: 'ผู้ก่อตั้งและผู้อำนวยการ',
      department: 'ระบบเทคโนโลยีเชิงบูรณาการ',
      education: 'ปริญญาเอก ด้านการบูรณาการเทคโนโลยีขั้นสูง, MIT',
      expertise: ['วิศวกรรมระบบ', 'นวัตกรรมเทคโนโลยี', 'ภาวะผู้นำทางวิชาการ'],
      quote: 'พันธกิจของเราคือการเชื่อมโยงองค์ความรู้เชิงทฤษฎีเข้ากับนวัตกรรมทางเทคโนโลยีที่ใช้ได้จริง',
    },
    {
      position: 'รองคณบดีฝ่ายวิชาการ',
      department: 'วิศวกรรมนาโนเทคโนโลยี',
      education: 'ปริญญาเอก ด้านวัสดุศาสตร์, Stanford University',
      expertise: ['วัสดุนาโน', 'ระเบียบวิธีวิจัย', 'การพัฒนาหลักสูตร'],
      quote: 'เราส่งเสริมให้นักศึกษาเป็นผู้บุกเบิกในสาขาเทคโนโลยีเกิดใหม่',
    },
    {
      position: 'หัวหน้าฝ่ายวิจัยและพัฒนา',
      department: 'การวิจัยด้านการศึกษา STEM',
      education: 'ปริญญาเอก ด้านเทคโนโลยีการศึกษา, Harvard University',
      expertise: ['การสอน STEM', 'เทคโนโลยีการเรียนรู้', 'นวัตกรรมการวิจัย'],
      quote: 'นวัตกรรมทางการศึกษาคือรากฐานของความก้าวหน้าทางเทคโนโลยี',
    },
  ],
  coreValuesTitle: 'ค่านิยมหลัก',
  coreValuesSubtitle: 'หลักการที่เป็นแนวทางของปรัชญาการศึกษาของเรา',
  coreValues: [
    { title: 'นวัตกรรม', description: 'ก้าวข้ามขีดจำกัดด้านการศึกษาและการวิจัยทางเทคโนโลยี' },
    { title: 'ความร่วมมือ', description: 'ส่งเสริมความร่วมมือระหว่างสถาบันการศึกษาและภาคอุตสาหกรรม' },
    { title: 'สร้างผลกระทบระดับโลก', description: 'แก้ไขความท้าทายทางเทคโนโลยีระดับโลก' },
    { title: 'ความเป็นเลิศ', description: 'รักษามาตรฐานสูงสุดด้านการศึกษาและการวิจัย' },
    { title: 'ความคิดสร้างสรรค์', description: 'ส่งเสริมการคิดเชิงนวัตกรรมและการแก้ปัญหา' },
    { title: 'การเรียนรู้ตลอดชีวิต', description: 'บ่มเพาะการเติบโตและการปรับตัวอย่างต่อเนื่อง' },
  ],
  campusTitle: 'วิทยาเขตที่ทันสมัย',
  campusText:
    'วิทยาเขตขนาด 50 เอเคอร์ของเรามีสิ่งอำนวยความสะดวกล้ำสมัยที่ออกแบบมาเพื่อส่งเสริมนวัตกรรมและการทำงานร่วมกัน ตั้งแต่ห้องปฏิบัติการวิจัยขั้นสูงไปจนถึงพื้นที่การเรียนรู้ร่วมกัน เรามอบสภาพแวดล้อมที่เทคโนโลยีเติบโตได้อย่างเต็มที่',
  campusFacilities: [
    'ห้องปฏิบัติการวิจัยขั้นสูง',
    'ศูนย์คอมพิวเตอร์สมรรถนะสูง',
    'ศูนย์นวัตกรรมและบ่มเพาะธุรกิจ',
    'ทรัพยากรห้องสมุดดิจิทัล',
  ],
  campusImageAlt: 'สิ่งอำนวยความสะดวกในวิทยาเขต',
  ctaTitle: 'ร่วมเป็นส่วนหนึ่งของชุมชนแห่งนวัตกรรม',
  ctaText:
    'มาเป็นส่วนหนึ่งของสถาบันที่กำลังสร้างอนาคตของเทคโนโลยี ไม่ว่าคุณจะเป็นผู้สนใจศึกษาต่อ นักวิจัย หรือพันธมิตรภาคอุตสาหกรรม ระบบนิเวศทางเทคโนโลยีที่มีชีวิตชีวาของเรามีที่สำหรับคุณเสมอ',
  applyNow: 'สมัครเรียน',
  scheduleVisit: 'นัดเยี่ยมชม',
  contactUs: 'ติดต่อเรา',
};

const aboutus = { en, th };
export default aboutus;
