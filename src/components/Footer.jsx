
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div>© {year} Muhammed Irfan KP — Mernstack & shopify developer</div>
    </footer>
  );
};

export default Footer;