import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import ProductStory from './components/ProductStory';
import ProductHighlights from './components/ProductHighlights';
import VisualGallery from './components/VisualGallery';
import Craftsmanship from './components/Craftsmanship';
import StylingSuggestions from './components/StylingSuggestions';
import SocialProof from './components/SocialProof';
import ConsultationForm from './components/ConsultationForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { initScrollAnimations, initParallax } from './utils/scrollAnimations';
import './styles/globals.css';
import './styles/app.css';

/* ── Sticky nav bar ── */
function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      role="banner"
      aria-label="Thanh điều hướng CAO Glamorosa"
    >
      <div className="navbar__inner">
        {/* Logo */}
        <a href="#hero" className="navbar__logo" id="navbar-logo" onClick={(e) => scrollTo(e, '#hero')} aria-label="Trang chủ CAO Glamorosa">
          <span className="navbar__logo-cao">CAO</span>
          <span className="navbar__logo-sep" aria-hidden="true">·</span>
          <span className="navbar__logo-g">Glamorosa</span>
        </a>

        {/* Desktop Nav */}
        <nav className="navbar__nav" aria-label="Điều hướng chính">
          {[
            ['#story', 'Câu chuyện'],
            ['#highlights', 'Điểm nổi bật'],
            ['#gallery', 'Thư viện'],
            ['#craftsmanship', 'Chế tác'],
            ['#styling', 'Phong cách'],
            ['#faq', 'FAQ'],
          ].map(([href, label]) => (
            <a key={href} href={href} className="navbar__link" onClick={(e) => scrollTo(e, href)}>
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#consultation"
          className="btn btn--primary navbar__cta"
          id="navbar-cta"
          onClick={(e) => scrollTo(e, '#consultation')}
        >
          Đặt lịch tư vấn
        </a>

        {/* Mobile menu button */}
        <button
          className="navbar__menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={menuOpen}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            {menuOpen
              ? <path d="M18 6L6 18M6 6l12 12"/>
              : <path d="M3 12h18M3 6h18M3 18h18"/>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="navbar__mobile-menu" role="dialog" aria-label="Mobile menu">
          {[
            ['#story', 'Câu chuyện'],
            ['#highlights', 'Điểm nổi bật'],
            ['#gallery', 'Thư viện'],
            ['#craftsmanship', 'Chế tác'],
            ['#styling', 'Phong cách'],
            ['#social-proof', 'Đánh giá'],
            ['#faq', 'FAQ'],
          ].map(([href, label]) => (
            <a key={href} href={href} className="navbar__mobile-link" onClick={(e) => scrollTo(e, href)}>
              {label}
            </a>
          ))}
          <a
            href="#consultation"
            className="btn btn--primary"
            style={{ marginTop: '1rem' }}
            onClick={(e) => scrollTo(e, '#consultation')}
          >
            Đặt lịch tư vấn
          </a>
        </div>
      )}
    </header>
  );
}

/* ── Scroll to top button ── */
function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;
  return (
    <button
      className="scroll-top-btn"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Cuộn về đầu trang"
      id="scroll-top-btn"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </button>
  );
}

/* ── App ── */
export default function App() {
  useEffect(() => {
    const cleanupAnimations = initScrollAnimations();
    const cleanupParallax = initParallax();
    return () => {
      cleanupAnimations?.();
      cleanupParallax?.();
    };
  }, []);

  return (
    <>
      <a href="#hero" className="skip-link">Bỏ qua điều hướng</a>
      <NavBar />
      <main id="main-content">
        <Hero />
        <ProductStory />
        <ProductHighlights />
        <VisualGallery />
        <Craftsmanship />
        <StylingSuggestions />
        <SocialProof />
        <ConsultationForm />
        <FAQ />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
