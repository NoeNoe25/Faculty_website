import React from 'react';
import '../styles/components/Activities.css';
import news1 from '../assets/images/news/news1.webp';
import news2 from '../assets/images/news/news2.webp';
import news3 from '../assets/images/news/news3.webp';
import news4 from '../assets/images/news/news4.webp';
import news5 from '../assets/images/news/news5.webp';

export default function Activities() {
  const newsItems = [
    {
      id: 1,
      image: news1,
      date: "23.03.2025",
      title: "Faculty of Integrated Innovative Technology",
      description: "The Faculty of Integrated Innovative Technology, King Mongkut's Institute of Technology Ladkrabang (KMITL), announced the establishment of the #School of Integrated Innovative Technology to promote teaching, research, and academic services in materials innovation.",
      tag: "Highlights",
      featured: true,
      link: "http://www.cmit.kmitl.ac.th/news/direct-admission-1-1-2025-copy/"
    },
    {
      id: 2,
      image: news3,
      date: "15.09.2025",
      title: "Direct Admission 1-1 2025",
      description: "DIRECT ADMISSION 1-1 Early Round Academic Year 2025 Dual Degree",
      tag: "News",
      link: "http://www.cmit.kmitl.ac.th/news/direct-admission-1-1-2023/"
    },
    {
      id: 3,
      image: news2,
      date: "13.02.2025",
      title: "Direct Admission 1-1 2025",
      description: "DIRECT ADMISSION 1-1 Early Round Academic Year 2025 Dual Degree",
      tag: "News",
      imageAfter: true,
      link: "http://www.cmit.kmitl.ac.th/news/tcas1-67/"
    },
    {
      id: 4,
      image: news4,
      date: "28.11.2022",
      title: "TCAS1-66",
      description: "TCAS1-66 ประกาศการรับสมัครคัดเลือกบุคคลเข้าศึกษาต่อ วิทยาลัยเทคโนโลยีและนวัตกรรมวัสดุ เปิดรับสมัครบุคคลเข้าศึกษาต่อระดับปริญญาตรี แบบ Portfolio รอบที่ 1 ประจำปีการศึกษา 2566...",
      tag: "News",
      imageAfter: true,
      link: "http://www.cmit.kmitl.ac.th/news/tcas1-66/"
    },
    {
      id: 5,
      image: news5,
      date: "28.11.2022",
      title: "DIRECT ADMISSION 1-1 (Early Round)",
      description: "DIRECT ADMISSION 1-1 (Early Round) Academic Year 2023 Dual Degree...",
      tag: "News",
      link: "http://www.cmit.kmitl.ac.th/news/direct-admission-1-1-early-round/"
    }
  ];

  return (
    <div className="news-section">
      <div className="news-container">
        <div className="news-header">
          <h2 className="news-title">News and Highlights</h2>
          <a href="http://www.cmit.kmitl.ac.th/%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2%E0%B8%99%E0%B8%B2%E0%B9%82%E0%B8%99/" className="news-view-all">
            See All News
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </a>
        </div>

        <div className="news-grid">
          {newsItems.map((item, index) => (
            <article 
              key={item.id} 
              className={`news-card 
                ${index === 0 ? 'featured' : ''} 
                ${item.imageAfter ? 'image-after' : ''}
              `}
            >
              {/* Normal Layout (Cards 1, 2, 5) */}
              {!item.imageAfter && (
                <div className="news-card-image">
                  <img src={item.image} alt={item.title} />
                  <span className="news-tag">{item.tag}</span>
                </div>
              )}

              <div className="news-card-content">
                <time className="news-date">{item.date}</time>
                <h3 className="news-card-title">{item.title}</h3>
                
                {item.description && (
                  <p className="news-description">{item.description}</p>
                )}
                
                {/* Image After Description (Cards 3 & 4) */}
                {item.imageAfter && (
                  <div className="news-card-image-after">
                    <img src={item.image} alt={item.title} />
                    <span className="news-tag">{item.tag}</span>
                  </div>
                )}
                
                <a 
                  href={item.link} 
                  className="news-read-more"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Read More
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}