import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './WorkCarousel.css';
import projects from '../data/project';

const WorkCarousel = () => {
  return (
    <section id="work" className="work-section">
      <h2>
        <i className="fas fa-paint-brush"></i> selected works
      </h2>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        speed={700}
        threshold={8}               // ← easier swipe detection on mobile
        touchRatio={1.2}           // ← responsive to finger movement
        resistance={true}
        resistanceRatio={0.85}
        grabCursor={true}
        pagination={{
          clickable: true,
          dynamicBullets: false,
          renderBullet: (index, className) => 
            `<span class="${className}" aria-label="Go to slide ${index + 1}"></span>`
        }}
        className="works-swiper neoncore-swiper"
      >
        {projects.map((project, idx) => (
          <SwiperSlide key={idx}>
            <div className="project-card neoncore-card">
              <div className="card-art neoncore-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <span className="art-label neoncore-label">{project.label}</span>
                <div className="scanline"></div>
              </div>
              <div className="project-content neoncore-content">
                <div className="content-header">
                  <h3>{project.title}</h3>
                  <div className="glow-underline"></div>
                </div>
                <div className="project-badge neoncore-badge">{project.badge}</div>
                <p className="neoncore-desc">{project.desc}</p>
                <div className="project-tech neoncore-tech">
                  {project.tech.map(t => <span key={t}>{t}</span>)}
                </div>
                <div className="card-actions neoncore-actions">
                  <a href={project.link} className="btn-neoncore" target="_blank" rel="noopener noreferrer">
                    <span>EXPLORE</span>
                    <i className="fas fa-arrow-right" aria-hidden="true"></i>
                  </a>
                  {project.github && (
                    <a href={project.github} className="btn-github" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github" aria-hidden="true"></i>
                      <span>CODE</span>
                    </a>
                  )}
                  {project.password && (
                    <div className="password-neoncore">
                      <i className="fas fa-lock" aria-hidden="true"></i> {project.password}
                    </div>
                  )}
                </div>
                <div className="hologram-bar" aria-hidden="true">
                  <div className="hologram-fill"></div>
                </div>
              </div>
              <div className="corner-glow corner-tl" aria-hidden="true"></div>
              <div className="corner-glow corner-tr" aria-hidden="true"></div>
              <div className="corner-glow corner-bl" aria-hidden="true"></div>
              <div className="corner-glow corner-br" aria-hidden="true"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default WorkCarousel;