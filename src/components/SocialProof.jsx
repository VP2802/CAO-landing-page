import React from 'react';
import './socialProof.css';

const PRESS_LOGOS = [
  { id: 'elle', name: 'Elle Vietnam', abbr: 'ELLE' },
  { id: 'bazaar', name: "Harper's Bazaar Vietnam", abbr: "BAZAAR" },
  { id: 'vogue', name: 'L\'Officiel Vietnam', abbr: "L'OFFICIEL" },
  { id: 'pnj', name: 'PNJ Group', abbr: 'PNJ' },
];

const TESTIMONIALS = [
  {
    id: 't1',
    quote: 'Glamorosa không chỉ là món trang sức – đây là tuyên ngôn của một người phụ nữ biết giá trị của chính mình. Mỗi lần tôi đeo nó, tôi cảm nhận được sự tự tin đặc biệt.',
    author: '— Khách hàng VIP · TP. Hồ Chí Minh',
    initials: 'N.A.',
  },
  {
    id: 't2',
    quote: 'Dây cổ Glamorosa là món quà tôi tự chọn cho kỷ niệm 10 năm thành lập công ty. Không có gì phù hợp hơn để đánh dấu hành trình đó.',
    author: '— Doanh nhân · Hà Nội',
    initials: 'T.L.',
  },
  {
    id: 't3',
    quote: 'Tôi đã được tư vấn rất tỉ mỉ trong buổi private viewing. Đội ngũ CAO thực sự hiểu tôi muốn gì và chiếc dây cổ được chọn hoàn hảo cho bộ váy cưới.',
    author: '— Cô dâu hạnh phúc · Đà Nẵng',
    initials: 'M.N.',
  },
];

export default function SocialProof() {
  return (
    <section className="proof section section--emerald" id="social-proof" aria-label="Đánh giá và báo chí về Glamorosa">
      <div className="container">
        {/* Header */}
        <div className="proof__header fade-up">
          <p className="eyebrow eyebrow--light">Được tin tưởng bởi</p>
          <div className="gold-divider" />
          <h2 className="proof__title">
            Tinh tuyển được<br />
            <em>giới mộ điệu công nhận</em>
          </h2>
        </div>

        {/* Press logos */}
        <div className="proof__press fade-up delay-1" aria-label="Báo chí đưa tin">
          {PRESS_LOGOS.map((logo) => (
            <div key={logo.id} className="proof__press-item" title={logo.name}>
              <span className="proof__press-logo">{logo.abbr}</span>
            </div>
          ))}
        </div>

        {/* Featured press quote */}
        <div className="proof__press-quote fade-up delay-2">
          <svg className="proof__press-quote-icon" viewBox="0 0 48 48" fill="currentColor" aria-hidden="true">
            <path d="M14 22c0-4.4 3.6-8 8-8v4c-2.2 0-4 1.8-4 4v2h4v8H6v-8h4l4-2v0zm20 0c0-4.4 3.6-8 8-8v4c-2.2 0-4 1.8-4 4v2h4v8H26v-8h4l4-2z" opacity="0.4"/>
          </svg>
          <blockquote>
            <p>
              "Glamorosa là món quà tình yêu cho khoảnh khắc đặc biệt –
              nơi cảm xúc được chạm khắc thành tác phẩm nghệ thuật đỉnh cao."
            </p>
            <footer>— Elle Vietnam</footer>
          </blockquote>
        </div>

        {/* KOL Section */}
        <div className="proof__kol fade-up delay-2">
          <div className="proof__kol-label">
            <p className="eyebrow eyebrow--light">Được lựa chọn bởi</p>
          </div>
          <div className="proof__kol-grid">
            {[
              { name: 'Thủy Tiên', role: 'Nghệ sĩ · Glamorosa Ambassador', image: '/images/thuy_tien.jpg' },
              { name: 'Lý Quí Khánh', role: 'Fashion Designer · Glamorosa Campaign', image: '/images/li_qui_khanh.jpg' },
            ].map((kol) => (
              <div key={kol.name} className="proof__kol-card">
                <img className="proof__kol-avatar" src={kol.image} alt={kol.name} />
                <div className="proof__kol-info">
                  <div className="proof__kol-name">{kol.name}</div>
                  <div className="proof__kol-role">{kol.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="proof__testimonials fade-up delay-3">
          <p className="eyebrow eyebrow--light" style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
            Cảm nhận khách hàng
          </p>
          <div className="proof__testimonials-grid">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="proof__testimonial" id={`testimonial-${t.id}`}>
                <div className="proof__testimonial-stars" aria-label="5 sao">
                  {'★'.repeat(5)}
                </div>
                <p className="proof__testimonial-quote">{t.quote}</p>
                <footer className="proof__testimonial-author">{t.author}</footer>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
