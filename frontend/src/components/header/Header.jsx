import { useState } from "react";
import { Link } from "react-router-dom";
import ToggleMenu from "./togglemenu/Togglemenu";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">
          <Link to="/" aria-label="Go to homepage">
            Minimal Image Gallery
          </Link>
        </h1>
        {/* Pulsante hamburger solo su mobile */}
        <button
          className="mobile-menu-icon"
          aria-label="Toggle navigation menu"
          onClick={toggleMenu}
        >
          ☰
        </button>
        {/* Menu per desktop */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/nature">Nature</Link>
            </li>
            <li>
              <Link to="/cities">Cities</Link>
            </li>
            <li>
              <Link to="/animals">Animals</Link>
            </li>
            <li>
              <Link to="/technology">Technology</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Mostra ToggleMenu solo su mobile e se isOpen è true */}
      {isOpen && <ToggleMenu isOpen={isOpen} toggleMenu={toggleMenu} />}
    </header>
  );
};

export default Header;
