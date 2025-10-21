import "./Service.css";

const servicesData = [
  {
    title: "Diseño Web Estratégico & UX/UI",
    description:
      "Creamos la arquitectura visual y la experiencia de usuario de tu proyecto. Desde wireframes hasta prototipos interactivos, nos aseguramos de que tu diseño sea atractivo, intuitivo y optimizado para convertir.",
    price: 150,
  },
  {
    title: "Landing Page de Alto Impacto",
    description:
      "Diseñamos y desarrollamos landings pages con código limpio y optimizado desde cero, enfocadas en un único objetivo: captar leads, vender un producto o anunciar un evento. Rápidas y diseñadas para maximizar conversiones.",
    price: 350,
  },
  {
    title: "Desarrollo Web Personalizado",
    description:
      "Construimos sitios web complejos y escalables con código 100% a medida. Ya sea un portafolio interactivo, un sitio corporativo con panel de administración o una aplicación web, garantizamos rendimiento y seguridad.",
    price: 800,
  },
];

function Service() {
  return (
    <section id="servicios" className="section-service">
      <div className="section-container">
        <h2 className="title-service">
          Mis <span className="keyword">Servicios</span>
        </h2>
        <h3 className="subtitle-service">
          Transforma Visitantes en <span className="keyword">Clientes</span>
        </h3>

        <div className="services-container">
          {servicesData.map((service) => (
            <article key={service.title} className="service-card">
              <div className="card-content">
                <h4 className="card-title">{service.title}</h4>
                <p className="card-info">{service.description}</p>
              </div>

              <footer className="card-footer">
                <div className="card-price">
                  <small>Desde</small>
                  <span>${service.price}</span>
                </div>
                <a
                  className="card-btn"
                  href="https://wa.me/+51933738449"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cotizar Ahora
                </a>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;
