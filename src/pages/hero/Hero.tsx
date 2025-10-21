import "./Hero.css";
import SocialLinks from "../../core/icons/social/SocialLinks";
import CV_MARIO from "../../assets/pdf/CV_MARIO_PINZÓN.pdf";

function Hero() {
  return (
    <section id="inicio" className="section-hero">
      <div className="hero-container">
        <h1 className="title-hero">
          Hola, soy <span className="keyword">Mario Pinzón</span>
        </h1>
        <h2 className="subtitle-hero">
          Ingenierio de Sistemas y Desarrollador Web
        </h2>
        <p className="text-hero">
          Transformo ideas en soluciones digitales robustas. Mi pasión es
          combinar un diseño limpio con código eficiente y escalable,
          construyendo cada proyecto desde cero.
        </p>

        <div className="btn-hero">
          <a href="#proyectos" className="cta-hero">
            Ver mis Proyectos
          </a>
          <a href={CV_MARIO} className="cv-hero" download>
            Descargar CV
          </a>
        </div>

        <SocialLinks className="redes-hero" />
      </div>
    </section>
  );
}

export default Hero;
