import logo from "../images/logo.svg";
import { socialLinks, pageLinks } from "../data";



function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        
      
        
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href} className="nav-link">
                {link.text}
              </a>
            </li>
          ))}
        </ul>

        <ul className="nav-icons" id="nav-icons">
          {socialLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="nav-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={`fab fa-${link.text}`}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar