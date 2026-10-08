// Contact page (/Contact). contactInfo and departments line up with the arrays in Contact.jsx.
const en = {
  title: "Contact Us",
  infoTitle: "Contact Information",
  infoDescription:
    "Get in touch with us through any of these channels. Our team is here to assist you.",
  extension: "Ext. {number}",
  contactInfo: [
    // { title: 'Campus Address', content: '1 Chalongkrung Rd, Ladkrabang, Bangkok 10520, Thailand' },
    {
      title: "School Building",
      content:
        "College of Advanced Manufacturing Innovation (CAM-I), 4th Floor",
      details: "School of Integrated Innovative Technology",
    },
    { title: "Phone Number", hours: "Monday - Friday: 8:30 AM - 4:30 PM" },
    { title: "Email Address" },
    // { title: 'Website' },
    {
      title: "Office Hours",
      content: "8:30 AM - 4:30 PM",
      details: "Monday to Friday (Excluding Public Holidays)",
    },
  ],
  departmentsTitle: "Department Contacts",
  departments: [
    "Administration Office",
    "Academic Affairs",
    "Student Affairs",
    "International Affairs",
  ],
  socialTitle: "Connect With Us",
  socialDescription:
    "Follow us on social media for the latest updates, news, and events.",
  quickLinksTitle: "Quick Links",
  quickLinks: [
    "KMITL Main Website",
    "Admissions Portal",
    "Registration System",
    "University Library",
  ],
  locationTitle: "Our Location",
  locationDescription:
    "Visit us at our beautiful campus in Ladkrabang, Bangkok",
  mapTitle: "KMITL Campus Location",
  mapLabel: "Interactive map showing KMITL campus location",
  getDirections: "Get Directions",
  callMainOffice: "Call Main Office",
};

const th = {
  title: "ติดต่อเรา",
  infoTitle: "ข้อมูลการติดต่อ",
  infoDescription:
    "ติดต่อเราได้ทุกช่องทางด้านล่างนี้ ทีมงานของเรายินดีให้ความช่วยเหลือ",
  extension: "ต่อ {number}",
  contactInfo: [
    // { title: "ที่ตั้ง", content: "เลขที่ 1 ถนนฉลองกรุง แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพฯ 10520" },
    {
      title: "อาคารคณะ",
      content: "วิทยาลัยนวัตกรรมการผลิตขั้นสูง (CAM-I) ชั้น 4",
      details: "คณะเทคโนโลยีบูรณาการนวัตกรรม",
    },
    {
      title: "หมายเลขโทรศัพท์",
      hours: "วันจันทร์ - วันศุกร์ เวลา 8:30 - 16:30 น.",
    },
    { title: "อีเมล" },
    // { title: "เว็บไซต์" },
    {
      title: "เวลาทำการ",
      content: "8:30 - 16:30 น.",
      details: "วันจันทร์ถึงวันศุกร์ (เว้นวันหยุดราชการ)",
    },
  ],
  departmentsTitle: "ติดต่อหน่วยงาน",
  departments: [
    "สำนักงานบริหาร",
    "ฝ่ายวิชาการ",
    "ฝ่ายกิจการนักศึกษา",
    "ฝ่ายวิเทศสัมพันธ์",
  ],
  socialTitle: "ติดตามเรา",
  socialDescription:
    "ติดตามข่าวสาร ความเคลื่อนไหว และกิจกรรมล่าสุดได้ทางโซเชียลมีเดีย",
  quickLinksTitle: "ลิงก์ด่วน",
  quickLinks: [
    "เว็บไซต์หลัก สจล.",
    "ระบบรับสมัคร",
    "ระบบทะเบียน",
    "หอสมุดสถาบัน",
  ],
  locationTitle: "แผนที่",
  locationDescription:
    "แวะมาเยี่ยมชมวิทยาเขตที่สวยงามของเราที่ลาดกระบัง กรุงเทพฯ",
  mapTitle: "ที่ตั้ง สจล.",
  mapLabel: "แผนที่แสดงที่ตั้งของ สจล.",
  getDirections: "ขอเส้นทาง",
  callMainOffice: "โทรหาสำนักงาน",
};

const contact = { en, th };
export default contact;
