import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './WorkCarousel.css';
import projects from '../data/project';

const WorkCarousel = () => {
  return (
    <section id="work">
      <h2><i className="fas fa-paint-brush"></i> selected works</h2>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        speed={700}
        pagination={{ clickable: true, dynamicBullets: false }}
        grabCursor={true}
        className="works-swiper neoncore-swiper"
      >
        {projects.map((project, idx) => (
          <SwiperSlide key={idx}>
            <div className="project-card neoncore-card">
              <div className="card-art neoncore-image">
                <img src={project.image} alt={project.title} />
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
                    <i className="fas fa-arrow-right"></i>
                  </a>
                  {project.github && (
                    <a href={project.github} className="btn-github" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                      <span>CODE</span>
                    </a>
                  )}
                  {project.password && (
                    <div className="password-neoncore">
                      <i className="fas fa-lock"></i> {project.password}
                    </div>
                  )}
                </div>
                {/* Futuristic progress bar (decoration) */}
                <div className="hologram-bar">
                  <div className="hologram-fill"></div>
                </div>
              </div>
              {/* Corner neon accents */}
              <div className="corner-glow corner-tl"></div>
              <div className="corner-glow corner-tr"></div>
              <div className="corner-glow corner-bl"></div>
              <div className="corner-glow corner-br"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default WorkCarousel;