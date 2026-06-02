import { useRef, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './WorkCarousel.css';
import projects from '../data/project';

/* ─────────────────────────────────────────
   3D Tilt Card — full bleed image + overlay
   ───────────────────────────────────────── */
const TiltCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const shineRef = useRef(null);
  const rafRef = useRef(null);

  const MAX_TILT = 12; // degrees

  const handleMouseMove = useCallback((e) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      const card = cardRef.current;
      const shine = shineRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;

      const rotateY = ((x - cx) / cx) * MAX_TILT;
      const rotateX = -((y - cy) / cy) * MAX_TILT;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      card.style.transition = 'transform 0.08s ease-out, box-shadow 0.4s ease';

      if (shine) {
        const shineX = (x / rect.width) * 100;
        const shineY = (y / rect.height) * 100;
        shine.style.background = `radial-gradient(circle at ${shineX}% ${shineY}%, rgba(212,163,115,0.14) 0%, transparent 60%)`;
        shine.style.opacity = '1';
      }
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const card = cardRef.current;
    const shine = shineRef.current;
    if (card) {
      card.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      card.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.4s ease';
    }
    if (shine) shine.style.opacity = '0';
  }, []);

  const padIndex = String(index + 1).padStart(2, '0');

  return (
    <div
      className="luxe-card"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── Full-bleed image ── */}
      <div className="luxe-image">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          draggable="false"
        />
      </div>

      {/* ── Overlay layers ── */}
      <div className="luxe-overlay" aria-hidden="true" />
      <div className="luxe-scanline" aria-hidden="true" />
      <div className="luxe-grain" aria-hidden="true" />

      {/* ── Top badges ── */}
      <div className="luxe-label" aria-label={`Category: ${project.label}`}>
        {project.label}
      </div>
      <div className="luxe-index" aria-hidden="true">{padIndex}</div>

      {/* ── Main overlay content ── */}
      <div className="luxe-content">
        <div className="luxe-badge">{project.badge}</div>

        <h3 className="luxe-title">{project.title}</h3>

        <p className="luxe-desc">{project.desc}</p>

        <div className="luxe-tech" aria-label="Technologies used">
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>

        <div className="luxe-actions">
          <a
            href={project.link}
            className="btn-luxe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Explore ${project.title}`}
          >
            <span>EXPLORE</span>
            <i className="fas fa-arrow-right" aria-hidden="true" />
          </a>

          {project.github && (
            <a
              href={project.github}
              className="btn-gh-luxe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code on GitHub`}
            >
              <i className="fab fa-github" aria-hidden="true" />
              <span>CODE</span>
            </a>
          )}

          {project.password && (
            <div className="password-luxe">
              <i className="fas fa-lock" aria-hidden="true" />
              {project.password}
            </div>
          )}
        </div>
      </div>

      {/* ── Decorative layers ── */}
      <div className="luxe-bottomline" aria-hidden="true" />
      <div className="luxe-corner lc-tl" aria-hidden="true" />
      <div className="luxe-corner lc-tr" aria-hidden="true" />
      <div className="luxe-corner lc-bl" aria-hidden="true" />
      <div className="luxe-corner lc-br" aria-hidden="true" />

      {/* ── 3D tilt shine ── */}
      <div className="luxe-shine" ref={shineRef} aria-hidden="true" />
    </div>
  );
};

/* ─────────────────────────────────────────
   WorkCarousel — main export
   ───────────────────────────────────────── */
const WorkCarousel = () => {
  return (
    <section id="work">
      <h2>
        <i className="fas fa-paint-brush" aria-hidden="true" />
        {' '}selected works
      </h2>

      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        speed={700}
        pagination={{ clickable: true, dynamicBullets: false }}
        grabCursor={true}
        className="works-swiper"
      >
        {projects.map((project, idx) => (
          <SwiperSlide key={idx}>
            <TiltCard project={project} index={idx} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default WorkCarousel;