// Vision & Mission page (/About2).
const en = {
  heroTitle: 'About SIITEC',
  heroText:
    'The Faculty of Integrated Innovative Technology (SIITEC) at KMITL is home to two pioneering programs, MediloT and AMI. With hands-on labs, cutting-edge research, and close industry ties, we equip students to lead in AI, robotics, and next-gen manufacturing.',
  statistics: ['Students Enrolled', 'Faculty Members', 'Graduation Rate', 'Employment Rate'],
  joinTitle: 'Join our SIITec',
  applyNow: 'Apply Now',
  joinText:
    "SIITec is more than a faculty — it is an incubator for the next generation of innovators. We move beyond traditional education to create a hands-on ecosystem where students don't just learn about the future; they build it.",
  storyImageAlt: 'Team meeting',
  storyTitle: 'Our Story',
  storyText:
    'Pioneering advanced manufacturing at KMITL, we cultivate world-class talent to drive the future of innovation.',
  missionTitle: 'Our Mission',
  missionText:
    'To provide a transformative, interdisciplinary education that bridges technology, creativity, and real-world impact.',
  visionTitle: 'Our Vision',
  visionText:
    'To be a leading faculty in integrated innovation, fostering future engineers and innovators who drive sustainable global progress.',
  uniqueTitle: 'What Makes Us Unique',
  uniqueText: 'Equipping students to lead in a rapidly evolving global landscape.',
  features: [
    {
      title: 'Student Support',
      description:
        'Providing comprehensive mentorship, career guidance, and a supportive community to ensure every student reaches their full potential.',
    },
    {
      title: 'Industry Partners',
      description:
        'Collaborating with leading global tech companies to provide hands-on labs and real-world internship opportunities.',
    },
    {
      title: 'Academic Excellence',
      description:
        'Delivering pioneering programs in Technology and Science that combine theoretical depth with practical application.',
    },
    {
      title: 'Innovative Research',
      description:
        'Driving cutting-edge discoveries in Nanotechnology and next-gen manufacturing to solve global challenges.',
    },
    {
      title: 'Global Vision',
      description:
        'Cultivating a diverse, international learning environment that prepares students for leadership on the world stage.',
    },
    {
      title: 'Future Impact',
      description:
        'Empowering graduates to become the innovators and leaders who will shape the future of technology and society.',
    },
  ],
  deanTitle: "Dean's Message",
  deanQuote: 'At SIITec, we believe the future belongs to those who innovate.',
  deanText:
    'Welcome to the School of Integrated Innovative Technology, where we inspire innovation through excellence in education, research, and collaboration. We are committed to preparing future leaders with the knowledge and skills to create impactful solutions for a rapidly evolving world.',
  deanImageAlt: 'Dean',
  deanName: 'Dr. Wipoo Sriseubsai',
  deanOrg: 'School of Integrated Innovative Technology',
};

const th = {
  heroTitle: 'เกี่ยวกับ SIITEC',
  heroText:
    'คณะเทคโนโลยีบูรณาการนวัตกรรม (SIITEC) สจล. เป็นที่ตั้งของสองหลักสูตรบุกเบิก ได้แก่ MediloT และ AMI ด้วยห้องปฏิบัติการที่เน้นลงมือทำจริง งานวิจัยล้ำสมัย และความใกล้ชิดกับภาคอุตสาหกรรม เราเตรียมความพร้อมให้นักศึกษาเป็นผู้นำด้าน AI หุ่นยนต์ และการผลิตยุคใหม่',
  statistics: ['นักศึกษา', 'คณาจารย์', 'อัตราการสำเร็จการศึกษา', 'อัตราการได้งานทำ'],
  joinTitle: 'ร่วมเป็นส่วนหนึ่งของ SIITec',
  applyNow: 'สมัครเรียน',
  joinText:
    'SIITec เป็นมากกว่าคณะ แต่คือแหล่งบ่มเพาะนักนวัตกรรุ่นใหม่ เราก้าวข้ามการศึกษาแบบเดิม สู่ระบบนิเวศแห่งการลงมือทำ ที่นักศึกษาไม่เพียงเรียนรู้เรื่องอนาคต แต่ได้ลงมือสร้างอนาคตด้วยตนเอง',
  storyImageAlt: 'การประชุมทีม',
  storyTitle: 'ความเป็นมา',
  storyText: 'ในฐานะผู้บุกเบิกการผลิตขั้นสูงที่ สจล. เราบ่มเพาะบุคลากรระดับโลกเพื่อขับเคลื่อนอนาคตแห่งนวัตกรรม',
  missionTitle: 'พันธกิจ',
  missionText: 'จัดการศึกษาแบบสหวิทยาการที่สร้างการเปลี่ยนแปลง เชื่อมโยงเทคโนโลยี ความคิดสร้างสรรค์ และผลลัพธ์ที่เกิดขึ้นจริง',
  visionTitle: 'วิสัยทัศน์',
  visionText:
    'เป็นคณะชั้นนำด้านนวัตกรรมเชิงบูรณาการ บ่มเพาะวิศวกรและนักนวัตกรแห่งอนาคตที่ขับเคลื่อนความก้าวหน้าของโลกอย่างยั่งยืน',
  uniqueTitle: 'สิ่งที่ทำให้เราแตกต่าง',
  uniqueText: 'เตรียมความพร้อมให้นักศึกษาเป็นผู้นำในโลกที่เปลี่ยนแปลงอย่างรวดเร็ว',
  features: [
    {
      title: 'การดูแลนักศึกษา',
      description:
        'ให้คำปรึกษาอย่างรอบด้าน แนะแนวอาชีพ และสร้างชุมชนที่เกื้อหนุน เพื่อให้นักศึกษาทุกคนพัฒนาศักยภาพได้อย่างเต็มที่',
    },
    {
      title: 'พันธมิตรภาคอุตสาหกรรม',
      description: 'ร่วมมือกับบริษัทเทคโนโลยีชั้นนำระดับโลก เพื่อมอบห้องปฏิบัติการและโอกาสฝึกงานในสถานการณ์จริง',
    },
    {
      title: 'ความเป็นเลิศทางวิชาการ',
      description: 'หลักสูตรบุกเบิกด้านเทคโนโลยีและวิทยาศาสตร์ ที่ผสานความลึกซึ้งเชิงทฤษฎีเข้ากับการประยุกต์ใช้จริง',
    },
    {
      title: 'งานวิจัยเชิงนวัตกรรม',
      description: 'ขับเคลื่อนการค้นพบล้ำสมัยด้านนาโนเทคโนโลยีและการผลิตยุคใหม่ เพื่อแก้ไขความท้าทายระดับโลก',
    },
    {
      title: 'วิสัยทัศน์ระดับโลก',
      description: 'สร้างสภาพแวดล้อมการเรียนรู้นานาชาติที่หลากหลาย เตรียมนักศึกษาสู่การเป็นผู้นำบนเวทีโลก',
    },
    {
      title: 'สร้างผลกระทบต่ออนาคต',
      description: 'ส่งเสริมให้บัณฑิตเป็นนักนวัตกรและผู้นำที่จะกำหนดอนาคตของเทคโนโลยีและสังคม',
    },
  ],
  deanTitle: 'สารจากคณบดี',
  deanQuote: 'ที่ SIITec เราเชื่อว่าอนาคตเป็นของผู้ที่สร้างสรรค์นวัตกรรม',
  deanText:
    'ยินดีต้อนรับสู่คณะเทคโนโลยีบูรณาการนวัตกรรม ที่ซึ่งเราจุดประกายนวัตกรรมผ่านความเป็นเลิศด้านการศึกษา การวิจัย และความร่วมมือ เรามุ่งมั่นเตรียมผู้นำแห่งอนาคตให้มีความรู้และทักษะในการสร้างสรรค์ทางออกที่สร้างผลกระทบต่อโลกที่เปลี่ยนแปลงอย่างรวดเร็ว',
  deanImageAlt: 'คณบดี',
  deanOrg: 'คณะเทคโนโลยีบูรณาการนวัตกรรม',
};

const about = { en, th };
export default about;
