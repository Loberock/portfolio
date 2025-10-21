import { useState } from "react";
import "./AboutMe.css";
import profileImage from "/src/assets/img/profile.jpeg";
import CV_MARIO from "../../assets/pdf/CV_MARIO_PINZÓN.pdf";
import * as Icons from "../../core/icons/stack/index.ts";
import type { SVGProps } from "react";

interface Tech {
  name: string;
  component: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

const techCategories: Record<string, Tech[]> = {
  Frontend: [
    { name: "HTML5", component: Icons.HtmlIcon },
    { name: "CSS3", component: Icons.CssIcon },
    { name: "JavaScript", component: Icons.JavaScriptIcon },
    { name: "React", component: Icons.ReactIcon },
    { name: "Angular", component: Icons.AngularIcon },
    { name: "TailwindCSS", component: Icons.TailwindIcon },
    { name: "Bootstrap", component: Icons.BootstrapIcon },
  ],
  Backend: [
    { name: "Java", component: Icons.JavaIcon },
    { name: "Spring Boot", component: Icons.SpringBootIcon },
    { name: "NodeJS", component: Icons.NodeIcon },
  ],
  DataBases: [
    { name: "MySQL", component: Icons.MySQLIcon },
    { name: "SQLServer", component: Icons.SQLServerIcon },
    { name: "PostgreSQL", component: Icons.PostgreSQLIcon },
  ],
  VersionControl: [
    { name: "Git", component: Icons.GitIcon },
    { name: "Github", component: Icons.GithubIcon },
  ],
};

function AboutMe() {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section id="sobre-mi" className="section-about">
      <div className="section-container">
        <h2 className="title-about">
          Sobre <span className="keyword">Mí</span>
        </h2>

        <div className="bento-grid-container">
          <div className="bento-cell cell-bio">
            <div className="bento-cell-info">
              <h3 className="cell-title">Hola, soy Mario Pinzón</h3>
              <p>
                Soy un desarrollador de software y estudiante del octavo ciclo
                de Ingeniería de Sistemas en la UTP. Mi pasión es construir el
                universo digital: desde interfaces web intuitivas hasta la
                lógica de backend que las impulsa. Me defino por mi proactividad
                y mi enfoque en la calidad, escribiendo código limpio y
                escalable. Busco constantemente oportunidades que me desafíen y
                me permitan transformar problemas complejos en soluciones
                tecnológicas eficientes.
              </p>
            </div>
          </div>

          <div className="bento-cell cell-profile">
            <img
              src={profileImage}
              alt="Foto de Mario Pinzón"
              className="profile-image"
            />
          </div>

          <div className="bento-cell cell-linkedin">
            <div className="bento-cell-info">
              <h3 className="cell-title">¿Tienes una idea?</h3>
              <p>Conectemos y hagámosla realidad.</p>
            </div>
            <a href="#contacto" className="bento-cta">
              Contáctame &rarr;
            </a>
          </div>

          <div className="bento-cell cell-tech">
            <div className="tech-header">
              <h3 className="cell-title">Mi Stack Tecnológico</h3>

              <div className="tech-tabs">
                {Object.keys(techCategories).map((category) => (
                  <button
                    key={category}
                    className={`tech-tab ${
                      activeTab === category ? "active" : ""
                    }`}
                    onClick={() => setActiveTab(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="tech-grid">
              {techCategories[activeTab].map((tech) => {
                const IconComponent = tech.component;
                return (
                  <div key={tech.name} className="tech-item" title={tech.name}>
                    <IconComponent className="tech-icon" />
                    <span>{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bento-cell cell-cv">
            <div className="bento-cell-info">
              <h3 className="cell-title">Mi Trayectoria Profesional</h3>
              <p>Conoce a fondo mi experiencia y formación académica.</p>
            </div>
            <a href={CV_MARIO} download className="bento-cta">
              Descargar CV &darr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
