import { Link } from "react-router-dom";
import "./Togglemenu.css"

const ToggleMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`toggle-menu ${isOpen ? "open" : ""}`}>
      <button
        className="close-btn"
        onClick={toggleMenu}
        aria-label="Close menu"
      >
        ✖
      </button>
      <ul className="menu-links">
        <li>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/nature" onClick={toggleMenu}>
            Nature
          </Link>
        </li>
        <li>
          <Link to="/cities" onClick={toggleMenu}>
            Cities
          </Link>
        </li>
        <li>
          <Link to="/animals" onClick={toggleMenu}>
            Animals
          </Link>
        </li>
        <li>
          <Link to="/technology" onClick={toggleMenu}>
            Technology
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ToggleMenu;
