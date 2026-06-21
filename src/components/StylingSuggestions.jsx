import React, { useState } from 'react';
import './stylingSuggestions.css';

const LOOKS = [
  {
    id: 'business',
    tag: 'Look 01',
    title: 'CEO Morning Power',
    subtitle: 'Business · Doanh nhân',
    desc: 'Glamorosa trên cổ áo blazer trắng tinh – khi bạn bước vào phòng họp, mọi ánh nhìn đều hiểu: đây là người dẫn đầu.',
    style: 'Blazer trắng · Quần âu · Heels trơn',
    src: '/images/look-business.jpg',
    color: '#2F4F4F',
  },
  {
    id: 'evening',
    tag: 'Look 02',
    title: 'Gala Night',
    subtitle: 'Evening · Dạ tiệc',
    desc: 'Ánh đèn sân khấu chiếu vào Glamorosa – và cả căn phòng nhìn thấy bạn. Đây là khoảnh khắc của sự rực rỡ hoàn toàn.',
    style: 'Đầm dạ hội cổ V · Lưng trần · Earring nhỏ',
    src: '/images/look-evening.jpg',
    color: '#1A1E1C',
  },
  {
    id: 'wedding',
    tag: 'Look 03',
    title: 'Wedding Moment',
    subtitle: 'Bridal · Cưới & Kỷ niệm',
    desc: 'Ngày trọng đại nhất – Glamorosa là lời hứa được đúc thành vàng, ghi dấu khoảnh khắc sẽ không bao giờ phai.',
    style: 'Áo dài ren · Đầm cưới tối giản · Updo',
    src: '/images/look-wedding.jpg',
    color: '#8B7355',
  },
];

export default function StylingSuggestions() {
  const [activeLook, setActiveLook] = useState(0);

  return (
    <section className="styling section section--alt" id="styling" aria-label="Gợi ý phối đồ cùng Glamorosa">
      <div className="container">
        {/* Header */}
        <div className="styling__header fade-up">
          <p className="eyebrow">Phong cách</p>
          <div className="gold-divider" />
          <h2 className="styling__title">
            Glamorosa cho<br />
            <em>mọi khoảnh khắc</em>
          </h2>
          <p className="styling__subtitle">
            Từ phòng họp đến dạ tiệc – dây cổ Glamorosa là dấu ấn cá nhân bạn mang theo.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="styling__tabs fade-up delay-1" role="tablist" aria-label="Chọn look">
          {LOOKS.map((look, i) => (
            <button
              key={look.id}
              className={`styling__tab ${i === activeLook ? 'styling__tab--active' : ''}`}
              onClick={() => setActiveLook(i)}
              role="tab"
              aria-selected={i === activeLook}
              aria-controls={`look-panel-${look.id}`}
              id={`look-tab-${look.id}`}
            >
              <span className="styling__tab-tag">{look.tag}</span>
              <span className="styling__tab-title">{look.title}</span>
            </button>
          ))}
        </div>

        {/* Look panels */}
        {LOOKS.map((look, i) => (
          <div
            key={look.id}
            className={`styling__panel ${i === activeLook ? 'styling__panel--active' : ''}`}
            role="tabpanel"
            id={`look-panel-${look.id}`}
            aria-labelledby={`look-tab-${look.id}`}
            hidden={i !== activeLook}
          >
            <div className="styling__panel-inner">
              {/* Image */}
              <div className="styling__panel-image">
                <img
                  src={look.src}
                  alt={`${look.title} – Glamorosa styling`}
                  loading="lazy"
                />
                <div className="styling__panel-tag" style={{ backgroundColor: look.color }}>
                  {look.tag}
                </div>
              </div>
              {/* Content */}
              <div className="styling__panel-content">
                <p className="eyebrow">{look.subtitle}</p>
                <h3 className="styling__panel-title">{look.title}</h3>
                <p className="styling__panel-desc">{look.desc}</p>
                <div className="styling__panel-outfit">
                  <span className="styling__panel-outfit-label">Phối cùng</span>
                  <span className="styling__panel-outfit-value">{look.style}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
