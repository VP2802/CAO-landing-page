import React, { useState } from 'react';
import './visualGallery.css';

const GALLERY_ITEMS = [
  {
    id: 'g1',
    src: '/images/gallery-01-macro.jpg',
    alt: 'Dây cổ Glamorosa – Macro detail đá quý',
    caption: 'Chi tiết đá quý – Sapphire & Kim cương',
    tag: 'Macro',
  },
  {
    id: 'g2',
    src: '/images/gallery-02-lifestyle.jpg',
    alt: 'Dây cổ Glamorosa – Lifestyle luxury',
    caption: 'Phong cách Lifestyle – Evening gala',
    tag: 'Lifestyle',
  },
  {
    id: 'g3',
    src: '/images/gallery-03-craft.jpg',
    alt: 'Dây cổ Glamorosa – Close-up chế tác',
    caption: 'Chế tác thủ công – Kỹ thuật nạm đá',
    tag: 'Craftsmanship',
  },
  {
    id: 'g4',
    src: '/images/gallery-04-portrait.jpg',
    alt: 'Dây cổ Glamorosa – Portrait lifestyle',
    caption: 'Vẻ đẹp tỏa sáng – Khoảnh khắc đặc biệt',
    tag: 'Portrait',
  },
  {
    id: 'g5',
    src: '/images/gallery-05-flatlay.jpg',
    alt: 'Dây cổ Glamorosa – Flatlay luxury',
    caption: 'Flat-lay – Bộ sưu tập Glamorosa',
    tag: 'Campaign',
  },
];

export default function VisualGallery() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  const prev = () => setActiveIdx((i) => (i - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  const next = () => setActiveIdx((i) => (i + 1) % GALLERY_ITEMS.length);

  const openLightbox = (idx) => {
    setLightboxIdx(idx);
    setLightboxOpen(true);
  };

  const closeLightbox = (e) => {
    if (e.target.classList.contains('lightbox')) setLightboxOpen(false);
  };

  return (
    <section className="gallery section section--dark" id="gallery" aria-label="Thư viện ảnh Glamorosa">
      <div className="container">
        {/* Header */}
        <div className="gallery__header fade-up">
          <p className="eyebrow eyebrow--light">Thư viện</p>
          <div className="gold-divider" />
          <h2 className="gallery__title">
            Vẻ đẹp trong<br /><em>từng khoảnh khắc</em>
          </h2>
        </div>

        {/* Main Viewer */}
        <div className="gallery__main fade-up delay-1">
          <div className="gallery__main-image-wrap">
            <img
              src={GALLERY_ITEMS[activeIdx].src}
              alt={GALLERY_ITEMS[activeIdx].alt}
              className="gallery__main-image"
              onClick={() => openLightbox(activeIdx)}
              id="gallery-main-image"
            />
            <button
              className="gallery__zoom-btn"
              onClick={() => openLightbox(activeIdx)}
              aria-label="Phóng to ảnh"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/>
              </svg>
            </button>
            <div className="gallery__caption">
              <span className="gallery__caption-tag">{GALLERY_ITEMS[activeIdx].tag}</span>
              <span>{GALLERY_ITEMS[activeIdx].caption}</span>
            </div>
          </div>

          {/* Arrows */}
          <button className="gallery__arrow gallery__arrow--prev" onClick={prev} aria-label="Ảnh trước">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button className="gallery__arrow gallery__arrow--next" onClick={next} aria-label="Ảnh tiếp theo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

        {/* Thumbnails */}
        <div className="gallery__thumbs fade-up delay-2">
          {GALLERY_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              className={`gallery__thumb ${idx === activeIdx ? 'gallery__thumb--active' : ''}`}
              onClick={() => setActiveIdx(idx)}
              aria-label={`Xem ảnh ${item.caption}`}
              aria-pressed={idx === activeIdx}
              id={`gallery-thumb-${idx}`}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
            </button>
          ))}
        </div>

        {/* Dots */}
        <div className="gallery__dots fade-up delay-3" role="tablist" aria-label="Chọn ảnh">
          {GALLERY_ITEMS.map((_, idx) => (
            <button
              key={idx}
              className={`gallery__dot ${idx === activeIdx ? 'gallery__dot--active' : ''}`}
              onClick={() => setActiveIdx(idx)}
              role="tab"
              aria-selected={idx === activeIdx}
              aria-label={`Ảnh ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Xem ảnh phóng to"
        >
          <button
            className="lightbox__close"
            onClick={() => setLightboxOpen(false)}
            aria-label="Đóng lightbox"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          <img
            src={GALLERY_ITEMS[lightboxIdx].src}
            alt={GALLERY_ITEMS[lightboxIdx].alt}
            className="lightbox__image"
          />
          <div className="lightbox__caption">
            {GALLERY_ITEMS[lightboxIdx].caption}
          </div>
        </div>
      )}
    </section>
  );
}
