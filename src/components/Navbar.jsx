import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
  <div className="logo">irfan</div>
</Link>
      <div className="nav-right">
        <div className="nav-links">
          <a href="#work">work</a>
          <a href="#edu-exp">education</a>
          <a href="#experience">experience</a>
          <a href="#skills">skills</a>
          <a href="#contact">contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;