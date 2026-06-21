import React from 'react';
import './footer.css';

const NAV_LINKS = [
  { href: '#story', label: 'Câu chuyện' },
  { href: '#highlights', label: 'Điểm nổi bật' },
  { href: '#gallery', label: 'Thư viện' },
  { href: '#craftsmanship', label: 'Chế tác' },
  { href: '#styling', label: 'Phong cách' },
  { href: '#consultation', label: 'Đặt lịch' },
  { href: '#faq', label: 'FAQ' },
];

export default function Footer() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="footer" role="contentinfo">
      <div className="container">
        {/* Top CTA Banner */}
        <div className="footer__cta-banner">
          <div className="footer__cta-content">
            <p className="eyebrow eyebrow--light">Sẵn sàng cho khoảnh khắc của bạn?</p>
            <h2 className="footer__cta-title">
              Đặt lịch<br /><em>Private Viewing</em> ngay hôm nay
            </h2>
          </div>
          <a
            href="#consultation"
            className="btn btn--primary"
            id="footer-cta-btn"
            onClick={(e) => scrollTo(e, '#consultation')}
          >
            Đặt lịch tư vấn riêng
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        {/* Main Footer */}
        <div className="footer__main">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo" aria-label="CAO Fine Jewellery – Glamorosa">
              <span className="footer__logo-cao">CAO</span>
              <span className="footer__logo-line" aria-hidden="true" />
              <span className="footer__logo-glamorosa">Glamorosa</span>
            </div>
            <p className="footer__tagline">
              High Jewellery. Chế tác thủ công.<br />
              Số lượng giới hạn.
            </p>
            {/* Socials */}
            <div className="footer__socials" aria-label="Mạng xã hội CAO Fine Jewellery">
              <a
                href="https://www.facebook.com/CAO.Fine.Jewellery"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Facebook CAO Fine Jewellery"
                id="footer-facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/cao.finejewellery"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Instagram CAO Fine Jewellery"
                id="footer-instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav className="footer__nav" aria-label="Điều hướng trang">
            <p className="footer__nav-heading">Khám phá</p>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="footer__nav-link"
                    onClick={(e) => scrollTo(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="footer__contact">
            <p className="footer__nav-heading">Liên hệ</p>
            <address className="footer__address">
              <p>
                <strong>CAO Fine Jewellery</strong><br />
                11 Hàng Khay, Hoàn Kiếm,<br />
                Hà Nội, Việt Nam
              </p>
              <p>
                <a href="tel:+84900000000" id="footer-phone">+84 900 000 000</a>
              </p>
              <p>
                <a href="mailto:hello@caofinejewellery.com.vn" id="footer-email">
                  hello@caofinejewellery.com.vn
                </a>
              </p>
              <p>
                <a
                  href="https://caofinejewellery.com.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-website"
                >
                  caofinejewellery.com.vn
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} CAO Fine Jewellery. Tất cả quyền được bảo lưu.</p>
          <p>
            Landing page dành riêng cho bộ sưu tập{' '}
            <a href="https://caofinejewellery.com.vn/collections/glamorosa" target="_blank" rel="noopener noreferrer">
              Glamorosa
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
