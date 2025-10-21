import "./Project.css";

const projectsData = [
  {
    title: "Landing Page para Academia",
    description:
      "El objetivo de este proyecto era crear un punto de acceso digital claro y atractivo para nuevos estudiantes. Desarrollé una landing page totalmente responsiva utilizando HTML semántico, CSS y JavaScript puro, enfocándome en una estructura de información intuitiva. El resultado es una página de carga rápida que guía al usuario de manera eficiente desde la oferta académica hasta el proceso de inscripción, asegurando una experiencia fluida en cualquier dispositivo.",
    technologies: ["HTML", "CSS", "JavaScript"],
    imageUrl: "src/assets/img/projects/cedp.png",
    liveUrl: "https://loberock.github.io/cedp-project/index.html",
    repoUrl: "",
    status: "Terminado",
  },
  {
    title: "Landing Page para Barbería",
    description:
      "Para este proyecto, el reto era capturar la esencia moderna de la barbería y transformarla en una experiencia digital. Construí una Single Page Application (SPA) con React y TailwindCSS, creando una interfaz dinámica y con un diseño pulcro. La página está optimizada para el rendimiento y permite a los clientes explorar servicios, productos y agendar citas de forma sencilla, convirtiendo visitantes en clientes recurrentes.",
    technologies: ["React", "TailwindCSS"],
    imageUrl: "src/assets/img/projects/infinity-style.png",
    liveUrl: "https://infinity-style.vercel.app/",
    repoUrl: "",
    status: "Terminado",
  },
  {
    title: "Sistema Web de Matrículas con Seguridad JWT",
    description:
      "Este es un proyecto integral de backend que demuestra mi interés en soluciones de software robustas. Desarrollé un API RESTful con Java y Spring Boot para gestionar el proceso de matrículas académicas. El núcleo del proyecto fue la implementación de un sistema de autenticación y autorización seguro mediante JSON Web Tokens (JWT), protegiendo las rutas y los datos sensibles. La aplicación se conecta a una base de datos MySQL utilizando JPA/Hibernate para una gestión de datos eficiente y escalable.",
    technologies: [
      "Angular",
      "Spring Boot",
      "TypeScript",
      "Java",
      "MySQL",
      "JWT",
    ],
    imageUrl: "src/assets/img/projects/cedpsac.png",
    liveUrl: "",
    repoUrl: "",
    status: "En Progreso",
  },
];

function Project() {
  return (
    <section id="proyectos" className="section-projects">
      <div className="section-container">
        <h2 className="title-projects">
          Mis <span className="keyword">Proyectos</span>
        </h2>
        <h3 className="subtitle-projects">
          Una selección de trabajos que demuestran mi pasión por el desarrollo.
        </h3>

        <div className="projects-list-container">
          {projectsData.map((project) => (
            <article key={project.title} className="project-spotlight-card">
              <div className="project-image-wrapper">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.imageUrl}
                    alt={`Imagen del proyecto ${project.title}`}
                    className="project-image"
                  />
                  {project.status === "En Progreso" && (
                    <span className="project-status-badge">En Progreso</span>
                  )}
                </a>
              </div>

              <div className="project-details">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-description-wrapper">
                  <p className="project-description">{project.description}</p>
                </div>
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Ver Demo
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link secondary"
                  >
                    Ver Código
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
