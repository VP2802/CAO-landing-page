import React, { useEffect, useRef } from 'react';
import './hero.css';

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero" aria-label="Giới thiệu Glamorosa">
      {/* Background */}
      <div className="hero__bg" aria-hidden="true">
        <div
          className="hero__bg-image"
          style={{
            background: `
              linear-gradient(160deg, rgba(14,17,16,0.88) 0%, rgba(14,17,16,0.35) 55%, rgba(14,17,16,0.78) 100%),
              url('/images/hero-bg.jpg') center/cover no-repeat
            `,
          }}
        />
        {/* Animated particles / shimmer overlay */}
        <div className="hero__shimmer" aria-hidden="true" />
      </div>

      <div className="hero__content container">
        {/* Badge */}
        <div className="hero__badge fade-up">
          <span className="hero__badge-dot" />
          <span>HIGH JEWELLERY · SỐ LƯỢNG GIỚI HẠN</span>
        </div>

        {/* Headline */}
        <h1 className="hero__headline fade-up delay-1">
          <span className="hero__headline-sub">Dây Cổ</span>
          <span className="hero__headline-main">Glamorosa</span>
          <span className="hero__headline-accent">— High Jewellery</span>
        </h1>

        {/* Description */}
        <p className="hero__desc fade-up delay-2">
          Tôn vinh khoảnh khắc rực rỡ nhất đời bạn.<br />
          Chế tác thủ công từ vàng thượng hạng và đá quý hiếm.<br />
          <em>Mỗi mảnh – một câu chuyện độc bản.</em>
        </p>

        {/* CTAs */}
        <div className="hero__ctas fade-up delay-3">
          <button
            className="btn btn--primary"
            id="hero-cta-primary"
            onClick={() => scrollTo('consultation')}
            aria-label="Đặt lịch tư vấn riêng cho Glamorosa"
          >
            Đặt lịch tư vấn riêng
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <button
            className="btn btn--outline-light"
            id="hero-cta-secondary"
            onClick={() => scrollTo('story')}
            aria-label="Khám phá câu chuyện Glamorosa"
          >
            Khám phá câu chuyện
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="hero__scroll-hint fade-in delay-5" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
          <span>Cuộn để khám phá</span>
        </div>
      </div>

      {/* Bottom gradient blend */}
      <div className="hero__bottom-blend" aria-hidden="true" />
    </section>
  );
}
