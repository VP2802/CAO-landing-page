/* ============================================
   SCROLL ANIMATIONS UTILITY
   ============================================ */

/**
 * Initializes Intersection Observer for scroll-triggered animations.
 * Adds 'is-visible' class to elements with animation classes when they enter viewport.
 */
export function initScrollAnimations() {
  const animatedEls = document.querySelectorAll(
    '.fade-up, .fade-in, .slide-left, .slide-right'
  );

  if (!animatedEls.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Once visible, stop observing to save resources
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -60px 0px',
    }
  );

  animatedEls.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}

/**
 * Parallax effect for hero background
 */
export function initParallax() {
  const heroEl = document.querySelector('.hero__bg-image');
  if (!heroEl) return;

  const handleScroll = () => {
    const scrollY = window.scrollY;
    heroEl.style.transform = `translateY(${scrollY * 0.35}px) scale(1.1)`;
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}
