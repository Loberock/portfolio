import { useEffect, useState } from "react";
import "./Navbar.css";
import pzdevIcon from "/icono.ico";

const navLinks = [
  { href: "#inicio", text: "Inicio" },
  { href: "#servicios", text: "Servicios" },
  { href: "#proyectos", text: "Proyectos" },
  { href: "#sobre-mi", text: "Sobre Mí" },
  { href: "#testimonios", text: "Testimonios" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#inicio");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );
      let current = "";
      sections.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = navLinks[index].href;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar-blur">
      <div className="nav-container">
        <a className="nav-logo" href="/">
          <img className="nav-icono" src={pzdevIcon} alt="Logo PZDEV" />
          PZDEV
        </a>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                className={`nav-link ${
                  activeSection === link.href ? "active" : ""
                }`}
                href={link.href}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>

        <a className="nav-btn" href="#contacto">
          Contacto
        </a>

        <button
          className={`hamburger-btn ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <svg
            className="hamburger-icon"
            viewBox="0 0 100 80"
            width="30"
            height="30"
          >
            <rect className="bar top" width="100" height="10" rx="5"></rect>
            <rect
              className="bar middle"
              y="30"
              width="100"
              height="10"
              rx="5"
            ></rect>
            <rect
              className="bar bottom"
              y="60"
              width="100"
              height="10"
              rx="5"
            ></rect>
          </svg>
        </button>
      </div>

      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                className={`sidebar-link ${
                  activeSection === link.href ? "active" : ""
                }`}
                href={link.href}
                onClick={handleLinkClick}
              >
                {link.text}
              </a>
            </li>
          ))}
          <li>
            <a
              className="sidebar-contacto"
              href="#contacto"
              onClick={handleLinkClick}
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
