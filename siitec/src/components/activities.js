import React from 'react';

import '../styles/components/Activities.css';
export default function Activities() {
  const newsItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800&h=500&fit=crop",
      date: "23.03.2025",
      title: "ТГУ готов к онлайн-приему вступительных экзаменов у абитуриентов",
      description: "Университет полностью подготовил техническую базу для проведения дистанционных экзаменов",
      tag: "НОВОСТИ",
      featured: true
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
      date: "22.03.2025",
      title: "Жизнь замечательных ученых: биофизики и Владислав Замша",
      description: "История выдающегося ученого и его вклад в развитие биофизики",
      tag: "НАУКА"
    },
    {
      id: 3,
      date: "21.03.2025",
      title: "Ко Дню Победы в ТГУ проведен разговор о важном с первокурсниками Великой Отечественной войны",
      description: "Студенты встретились с ветеранами и обсудили исторические события",
      tag: "СОБЫТИЯ",
      noPicture: true
    },
    {
      id: 4,
      date: "20.03.2025",
      title: "Онлайн-консультации – помощь студентам в период пандемии и трудоустройства",
      description: "Университет запускает сервис онлайн-консультаций для студентов",
      tag: "ОБРАЗОВАНИЕ",
      noPicture: true
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop",
      date: "19.03.2025",
      title: "Ученые выяснили, почему «ядовита» Тува и как сделать регион чистым",
      description: "Экологическое исследование показало пути решения проблем региона",
      tag: "ИССЛЕДОВАНИЯ"
    }
  ];

  return (
    <div className="news-section">
      <div className="news-container">
        <div className="news-header">
          <h2 className="news-title">Новости</h2>
          <a href="#" className="news-view-all">
            все новости
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </a>
        </div>

        <div className="news-grid">
          {newsItems.map((item, index) => (
            <article key={item.id} className={`news-card ${index === 0 ? 'featured' : ''} ${item.noPicture ? 'no-picture' : ''}`}>
              {!item.noPicture && (
                <div className="news-card-image">
                  <img src={item.image} alt={item.title} />
                  <span className="news-tag">{item.tag}</span>
                </div>
              )}
              <div className="news-card-content">
                {item.noPicture && <span className="news-tag-inline">{item.tag}</span>}
                <time className="news-date">{item.date}</time>
                <h3 className="news-card-title">{item.title}</h3>
                {item.description && (
                  <p className="news-description">{item.description}</p>
                )}
                <a href="#" className="news-read-more">
                  подробнее
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