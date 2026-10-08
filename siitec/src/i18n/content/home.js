// Text for the home page sections. Arrays line up item-for-item with the
// images/links defined in each component.
const en = {
  hero: {
    logoAlt: 'SIITec Logo',
    titleLine1: 'SCHOOL OF INTEGRATED',
    titleLine2: 'INNOVATIVE TECHNOLOGY',
    subtitle: 'Leaders in integrating science & engineering to create innovation',
    explorePrograms: 'Explore Programs',
    goToSlide: 'Go to slide {number}',
    news: [
      { title: 'SIITEC', date: 'March 23, 2025' },
      { title: 'Explore SIITec Departments', date: 'June 25, 2026' },
      { title: 'SIITec Review by U-Review', date: 'May 8, 2025' },
    ],
    stats: {
      researchLabs: 'Research Labs',
      industryPartners: 'Industry Partners',
      publications: 'Publications',
      graduateEmployment: 'Graduate Employment',
    },
  },
  research: {
    subtitle: 'Advancing Knowledge Through Research',
    title: 'Research Highlights',
    description:
      'SIITec research addresses real-world challenges through projects ranging from advanced materials to advanced manufacturing. Through international collaborations and patent partners, our faculty create innovations that make a difference while students gain hands-on experience preparing them for future careers.',
    items: [
      {
        title: 'Research Groups',
        description:
          'Interdisciplinary research groups and centers conducting high-impact studies across science, engineering, and technology to address real-world challenges.',
      },
      {
        title: 'Research Publications',
        description:
          'Peer-reviewed journals, conference papers, and scholarly publications showcasing innovative research and academic contributions at national and international levels.',
      },
      {
        title: 'Patents & International Awards',
        description:
          'Research-driven innovations leading to patents and international awards, reflecting excellence in applied research and technological advancement.',
      },
      {
        title: 'MOUs/MOAs and Partnerships',
        description:
          'Strategic collaborations with universities, industries, and global partners through MOUs and MOAs to strengthen research, innovation, and student opportunities.',
      },
    ],
  },
  news: {
    title: 'News and Highlights',
    seeAll: 'See All News',
    readMore: 'Read More',
    tags: { highlights: 'Highlights', news: 'News' },
    items: [
      {
        title: 'Faculty of Integrated Innovative Technology',
        description: 'The Faculty of Integrated Innovative Technology',
      },
      {
        title: 'Direct Admission 1-1 2025',
        description: 'DIRECT ADMISSION 1-1 Early Round Academic Year 2025 Dual Degree',
      },
      {
        title: 'Direct Admission 1-1 2025',
        description: 'DIRECT ADMISSION 1-1 Early Round Academic Year 2025 Dual Degree',
      },
      {
        title: 'TCAS1-66',
        description:
          'TCAS1-66 ประกาศการรับสมัครคัดเลือกบุคคลเข้าศึกษาต่อ วิทยาลัยเทคโนโลยีและนวัตกรรมวัสดุ เปิดรับสมัครบุคคลเข้าศึกษาต่อระดับปริญญาตรี แบบ Portfolio รอบที่ 1 ประจำปีการศึกษา 2566...',
      },
      {
        title: 'DIRECT ADMISSION 1-1 (Early Round)',
        description: 'DIRECT ADMISSION 1-1 (Early Round) Academic Year 2023 Dual Degree...',
      },
      {
        title: 'Direct Admission 1-1 2025',
        description: 'DIRECT ADMISSION 1-1 Early Round Academic Year 2025 Dual Degree',
      },
    ],
  },
  videos: {
    title: 'Faculty Videos',
    description: 'Explore our collection of educational and informational videos',
    unsupported: 'Your browser does not support the video tag.',
    localVideo: 'Local Video',
    items: [
      {
        title: 'Faculty Introduction 2024',
        description:
          'Welcome message from our faculty dean discussing our vision and goals for the academic year.',
      },
      {
        title: 'Why Study Nano Materials Engineering?',
        description:
          'Have you ever wondered how materials invisible to the naked eye can be transformed into advanced technologies? The Department of Nanoscience and Nanotechnology focuses on the design, synthesis, and development of nanoscale materials, driving innovations in electronics, energy, healthcare, environmental technology, and advanced manufacturing. Students gain both theoretical knowledge and hands-on experience to prepare for careers in cutting-edge industries.',
      },
      {
        title: 'Manufacturing Systems Engineering: Shaping the Future of Smart Manufacturing',
        description:
          'Are you passionate about becoming an engineer in modern manufacturing? The Manufacturing Systems Engineering Program, offered by the Department of Manufacturing System Technology equips students with the knowledge and practical skills needed for the next generation of industry.',
      },
    ],
  },
  testimonials: {
    subtitle: 'SIITec Success Stories',
    title: 'What Our Alumni Say',
    description: 'Hear from graduates who are making an impact in technology and innovation',
    previous: 'Previous testimonial',
    next: 'Next testimonial',
    goTo: 'Show testimonial {number}',
    items: [
      {
        role: "Computer Science Graduate '23",
        quote:
          'The hands-on research experience and mentorship I received prepared me perfectly for my career in AI development. The interdisciplinary approach opened doors I never imagined.',
      },
      {
        role: "Robotics Engineering Graduate '22",
        quote:
          'Working on cutting-edge projects with industry partners gave me real-world experience that set me apart. I landed my dream job before graduation.',
      },
      {
        role: "Data Science Graduate '24",
        quote:
          'The collaborative environment and access to state-of-the-art facilities made learning exciting. Every professor was invested in our success.',
      },
    ],
  },
  partners: {
    title: 'Our Partners',
    question: 'Interested in partnering with us?',
    pitch: 'Work with SIITec on joint research, student internships and industry projects.',
    become: 'Become a Partner',
    mailSubject: 'Partnership Inquiry',
    mailBody: 'I am interested in becoming a partner with SIITec. Please send me more information.',
  },
};

const th = {
  hero: {
    logoAlt: 'โลโก้ SIITec',
    titleLine1: 'คณะเทคโนโลยี',
    titleLine2: 'บูรณาการนวัตกรรม',
    subtitle: 'ผู้นำด้านการบูรณาการวิทยาศาสตร์และวิศวกรรมศาสตร์เพื่อสร้างสรรค์นวัตกรรม',
    explorePrograms: 'สำรวจหลักสูตร',
    goToSlide: 'ไปยังสไลด์ที่ {number}',
    news: [
      { title: 'SIITEC', date: '23 มีนาคม 2568' },
      { title: 'สำรวจภาควิชาของ SIITec', date: '25 มิถุนายน 2569' },
      { title: 'รีวิว SIITec โดย U-Review', date: '8 พฤษภาคม 2568' },
    ],
    stats: {
      researchLabs: 'ห้องปฏิบัติการวิจัย',
      industryPartners: 'พันธมิตรภาคอุตสาหกรรม',
      publications: 'ผลงานตีพิมพ์',
      graduateEmployment: 'บัณฑิตมีงานทำ',
    },
  },
  research: {
    subtitle: 'ต่อยอดองค์ความรู้ผ่านงานวิจัย',
    title: 'ไฮไลต์งานวิจัย',
    description:
      'งานวิจัยของ SIITec มุ่งแก้ปัญหาในโลกจริง ผ่านโครงการตั้งแต่วัสดุขั้นสูงไปจนถึงการผลิตขั้นสูง ด้วยความร่วมมือระดับนานาชาติและพันธมิตรด้านสิทธิบัตร คณาจารย์ของเราสร้างสรรค์นวัตกรรมที่สร้างความเปลี่ยนแปลง ขณะที่นักศึกษาได้รับประสบการณ์ลงมือปฏิบัติจริงเพื่อเตรียมพร้อมสู่อาชีพในอนาคต',
    items: [
      {
        title: 'กลุ่มวิจัย',
        description:
          'กลุ่มวิจัยและศูนย์วิจัยแบบสหวิทยาการ ที่ดำเนินงานวิจัยที่มีผลกระทบสูงด้านวิทยาศาสตร์ วิศวกรรมศาสตร์ และเทคโนโลยี เพื่อแก้ปัญหาในโลกจริง',
      },
      {
        title: 'ผลงานตีพิมพ์',
        description:
          'บทความในวารสารวิชาการที่ผ่านการประเมินโดยผู้ทรงคุณวุฒิ บทความในการประชุมวิชาการ และผลงานวิชาการที่แสดงถึงงานวิจัยเชิงนวัตกรรมทั้งในระดับชาติและนานาชาติ',
      },
      {
        title: 'สิทธิบัตรและรางวัลระดับนานาชาติ',
        description:
          'นวัตกรรมจากงานวิจัยที่นำไปสู่สิทธิบัตรและรางวัลระดับนานาชาติ สะท้อนความเป็นเลิศด้านการวิจัยประยุกต์และความก้าวหน้าทางเทคโนโลยี',
      },
      {
        title: 'MOU/MOA และความร่วมมือ',
        description:
          'ความร่วมมือเชิงกลยุทธ์กับมหาวิทยาลัย ภาคอุตสาหกรรม และพันธมิตรทั่วโลกผ่าน MOU และ MOA เพื่อเสริมสร้างงานวิจัย นวัตกรรม และโอกาสของนักศึกษา',
      },
    ],
  },
  news: {
    title: 'ข่าวสารและไฮไลต์',
    seeAll: 'ดูข่าวทั้งหมด',
    readMore: 'อ่านเพิ่มเติม',
    tags: { highlights: 'ไฮไลต์', news: 'ข่าว' },
    items: [
      {
        title: 'คณะเทคโนโลยีบูรณาการนวัตกรรม',
        description: 'คณะเทคโนโลยีบูรณาการนวัตกรรม',
      },
      {
        title: 'รับสมัครตรง 1-1 ปี 2568',
        description: 'รับสมัครตรง (DIRECT ADMISSION) 1-1 รอบแรก ปีการศึกษา 2568 หลักสูตรปริญญาควบ',
      },
      {
        title: 'รับสมัครตรง 1-1 ปี 2568',
        description: 'รับสมัครตรง (DIRECT ADMISSION) 1-1 รอบแรก ปีการศึกษา 2568 หลักสูตรปริญญาควบ',
      },
      {},
      {
        title: 'รับสมัครตรง 1-1 (รอบแรก)',
        description: 'รับสมัครตรง (DIRECT ADMISSION) 1-1 รอบแรก ปีการศึกษา 2566 หลักสูตรปริญญาควบ...',
      },
      {
        title: 'รับสมัครตรง 1-1 ปี 2568',
        description: 'รับสมัครตรง (DIRECT ADMISSION) 1-1 รอบแรก ปีการศึกษา 2568 หลักสูตรปริญญาควบ',
      },
    ],
  },
  videos: {
    title: 'วิดีโอของคณะ',
    description: 'ชมวิดีโอเพื่อการศึกษาและข้อมูลต่าง ๆ ของคณะ',
    unsupported: 'เบราว์เซอร์ของคุณไม่รองรับการเล่นวิดีโอ',
    localVideo: 'วิดีโอ',
    items: [
      {
        title: 'แนะนำคณะ 2567',
        description: 'สารต้อนรับจากคณบดี ว่าด้วยวิสัยทัศน์และเป้าหมายของคณะในปีการศึกษานี้',
      },
      {
        title: 'ทำไมต้องเรียนวิศวกรรมวัสดุนาโน?',
        description:
          'คุณเคยสงสัยไหมว่าวัสดุที่มองไม่เห็นด้วยตาเปล่าจะถูกเปลี่ยนให้กลายเป็นเทคโนโลยีขั้นสูงได้อย่างไร? ภาควิชานาโนศาสตร์และนาโนเทคโนโลยีมุ่งเน้นการออกแบบ สังเคราะห์ และพัฒนาวัสดุระดับนาโน ขับเคลื่อนนวัตกรรมด้านอิเล็กทรอนิกส์ พลังงาน การแพทย์และสุขภาพ เทคโนโลยีสิ่งแวดล้อม และการผลิตขั้นสูง นักศึกษาจะได้รับทั้งความรู้เชิงทฤษฎีและประสบการณ์ลงมือปฏิบัติจริง เพื่อเตรียมพร้อมสู่อาชีพในอุตสาหกรรมแห่งอนาคต',
      },
      {
        title: 'วิศวกรรมระบบการผลิต: สร้างอนาคตของการผลิตอัจฉริยะ',
        description:
          'คุณมีความมุ่งมั่นที่จะเป็นวิศวกรในอุตสาหกรรมการผลิตยุคใหม่หรือไม่? หลักสูตรวิศวกรรมระบบการผลิต ภาควิชาเทคโนโลยีระบบการผลิต มอบความรู้และทักษะเชิงปฏิบัติที่จำเป็นสำหรับอุตสาหกรรมยุคถัดไป',
      },
    ],
  },
  testimonials: {
    subtitle: 'เรื่องราวความสำเร็จของ SIITec',
    title: 'เสียงจากศิษย์เก่า',
    description: 'ฟังเรื่องราวจากบัณฑิตที่กำลังสร้างผลงานด้านเทคโนโลยีและนวัตกรรม',
    previous: 'ความคิดเห็นก่อนหน้า',
    next: 'ความคิดเห็นถัดไป',
    goTo: 'แสดงความคิดเห็นที่ {number}',
    items: [
      {
        role: "บัณฑิตสาขาวิทยาการคอมพิวเตอร์ รุ่นปี '23",
        quote:
          'ประสบการณ์การทำวิจัยจริงและการดูแลจากอาจารย์ที่ปรึกษา ช่วยเตรียมความพร้อมสำหรับอาชีพด้านการพัฒนา AI ได้อย่างสมบูรณ์แบบ แนวทางแบบสหวิทยาการเปิดโอกาสที่ไม่เคยคาดคิดมาก่อน',
      },
      {
        role: "บัณฑิตสาขาวิศวกรรมหุ่นยนต์ รุ่นปี '22",
        quote:
          'การได้ทำโครงการล้ำสมัยร่วมกับพันธมิตรภาคอุตสาหกรรม ทำให้มีประสบการณ์จริงที่โดดเด่นกว่าใคร และได้งานในฝันตั้งแต่ก่อนเรียนจบ',
      },
      {
        role: "บัณฑิตสาขาวิทยาการข้อมูล รุ่นปี '24",
        quote:
          'บรรยากาศการทำงานร่วมกันและการเข้าถึงเครื่องมือที่ทันสมัย ทำให้การเรียนรู้สนุกและน่าตื่นเต้น อาจารย์ทุกท่านใส่ใจในความสำเร็จของพวกเรา',
      },
    ],
  },
  partners: {
    title: 'พันธมิตรของเรา',
    question: 'สนใจร่วมเป็นพันธมิตรกับเราหรือไม่?',
    pitch: 'ร่วมงานกับ SIITec ด้านงานวิจัย การฝึกงานของนักศึกษา และโครงการร่วมกับภาคอุตสาหกรรม',
    become: 'ร่วมเป็นพันธมิตร',
    mailSubject: 'สอบถามความร่วมมือ',
    mailBody: 'ฉันสนใจร่วมเป็นพันธมิตรกับ SIITec กรุณาส่งข้อมูลเพิ่มเติมให้ฉันด้วย',
  },
};

const home = { en, th };
export default home;
