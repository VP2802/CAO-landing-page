import React from 'react';
import './productStory.css';

const STORY_CARDS = [
  {
    id: 'self-empowerment',
    eyebrow: 'Người phụ nữ tự chọn',
    title: 'Milestone của chính mình',
    body: 'Glamorosa không chỉ là trang sức – đó là dấu mốc bạn tự trao cho mình. Khi bạn đủ mạnh mẽ để sống là chính mình, Glamorosa trở thành ngôn ngữ của sự tự do và tỏa sáng không cần lý do.',
    icon: '✦',
    accent: '#C9A96E',
  },
  {
    id: 'gifting',
    eyebrow: 'Quà tặng tình yêu',
    title: 'Khoảnh khắc đặc biệt',
    body: 'Một buổi cầu hôn. Kỷ niệm 10 năm. Lời cảm ơn sâu sắc nhất. Glamorosa là ngôn ngữ tình yêu được chạm khắc tỉ mỉ – món quà nói thay tất cả những điều bạn muốn nói.',
    icon: '◇',
    accent: '#A07840',
  },
];

export default function ProductStory() {
  return (
    <section className="product-story section" id="story" aria-label="Câu chuyện Glamorosa">
      <div className="container">
        {/* Header */}
        <div className="product-story__header fade-up">
          <p className="eyebrow">Câu chuyện</p>
          <div className="gold-divider gold-divider--left" />
          <h2 className="product-story__title">
            Mỗi sắc hoa,<br />
            <em>một nhịp kết nối</em>
          </h2>
          <p className="product-story__subtitle">
            Glamorosa lấy cảm hứng từ ngôn ngữ của những loài hoa rực rỡ nhất –
            nơi sắc màu của đá quý và đường cong của vàng thượng hạng cùng nhau
            kể một câu chuyện về vẻ đẹp có chiều sâu.
          </p>
        </div>

        {/* Story Grid */}
        <div className="product-story__grid">
          {STORY_CARDS.map((card, i) => (
            <div
              key={card.id}
              className={`product-story__card fade-up delay-${i + 2}`}
              id={`story-card-${card.id}`}
            >
              <div className="product-story__card-icon" style={{ color: card.accent }}>
                {card.icon}
              </div>
              <p className="eyebrow" style={{ color: card.accent }}>
                {card.eyebrow}
              </p>
              <h3 className="product-story__card-title">{card.title}</h3>
              <p className="product-story__card-body">{card.body}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="product-story__quote fade-up delay-4">
          <span className="product-story__quote-mark">"</span>
          <p>
            Món quà tình yêu cho khoảnh khắc đặc biệt — mỗi viên đá là một lời ngỏ,
            mỗi đường chỉ vàng là một lời hứa.
          </p>
          <footer>— CAO Fine Jewellery</footer>
        </blockquote>
      </div>
    </section>
  );
}
