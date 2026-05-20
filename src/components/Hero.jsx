
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-gold-tag"><i className="fas fa-store-alt"></i> Mernstack & Shopify Developer</div>
        <h1><span className="hero-highlight">MERN Stack</span> &<br/> Shopify Developer<br /></h1>
        <p className="hero-desc">Hi, I’m <span className="hero-highlight">Muhammed Irfan KP</span> - a MERN Stack & React Frontend Developer focused on crafting modern, scalable, and user-friendly web applications. I enjoy building clean and responsive interfaces with strong attention to performance and usability. In addition to React development, I also work with Shopify to create custom e-commerce storefronts and seamless online shopping experiences.</p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary"><i className="far fa-paper-plane"></i> Hire me ..</a>
          <a href="/resume.pdf" className="btn-outline" target="_blank"><i className="fas fa-file-pdf"></i> resume</a>
        </div>
        <div className="hero-social">
          <a href="https://github.com/irffann-git" target="_blank"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/irffann/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://wa.me/919562390365" target="_blank"><i className="fab fa-whatsapp"></i></a>
          <a href="https://www.instagram.com/i.rffann/" target="_blank"><i className="fab fa-instagram"></i></a>
          <a href="https://www.facebook.com/irffann7" target="_blank"><i className="fab fa-facebook-f"></i></a>
        </div>
      </div>
      <div className="hero-image">
        <div className="hero-gold-tag-1"><i className="fas fa-store-alt"></i> shopify & react developer</div>
        <div className="portrait-luxury"><img src="/irfan1.png" alt="Muhammed Irfan portrait" /></div>
      </div>
    </div>
  );
};

export default Hero;