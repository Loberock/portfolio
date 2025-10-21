import "./Footer.css";
import pzdevIcon from "/icono.ico";
import SocialLinks from "../../core/icons/social/SocialLinks";

const navLinks = [
  { href: "#inicio", text: "Inicio" },
  { href: "#servicios", text: "Servicios" },
  { href: "#proyectos", text: "Proyectos" },
  { href: "#sobre-mi", text: "Sobre Mí" },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-about">
          <a className="footer-logo" href="#inicio">
            <img className="footer-icon" src={pzdevIcon} alt="Logo PZDEV" />
            PZDEV
          </a>
          <p>Creando experiencias digitales memorables desde cero.</p>
        </div>

        <div className="footer-links">
          <h4>Navegación</h4>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-social">
          <h4>Conecta conmigo</h4>
          <SocialLinks />
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} PZDEV. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
