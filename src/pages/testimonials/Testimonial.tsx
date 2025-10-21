import { useState, useEffect } from "react";
import "./Testimonial.css";

const testimonials = [
  {
    id: 1,
    name: "Ana Martínez",
    title: "CEO de Innovatech",
    image: "/img/ana.jpg",
    quote:
      "Trabajar con este equipo ha sido una experiencia transformadora. Profesionalismo, atención al detalle y resultados increíbles.",
  },
  {
    id: 2,
    name: "Luis Torres",
    title: "Director de Marketing",
    image: "/img/luis.jpg",
    quote:
      "Su capacidad de entender las necesidades del cliente y convertirlas en soluciones eficientes es excepcional.",
  },
  {
    id: 3,
    name: "María López",
    title: "Emprendedora",
    image: "/img/maria.jpg",
    quote:
      "Recomiendo sus servicios sin dudarlo. Puntuales, creativos y con un toque humano que marca la diferencia.",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  });

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section id="testimonios" className="testimonials-section">
      <div className="container-testimonials">
        <h2 className="title-testimonials">Testimonios</h2>
        <p className="subtitle-testimonials">
          Lo que nuestros clientes dicen de nosotros
        </p>

        <div className="slider">
          <button className="slider-btn prev" onClick={prevSlide}>
            ‹
          </button>

          <div className="slider-window">
            <div
              className="slider-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((t) => (
                <div className="testimonial-card" key={t.id}>
                  <div className="testimonial-header">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="testimonial-image"
                    />
                    <div>
                      <h4 className="testimonial-name">{t.name}</h4>
                      <p className="testimonial-title">{t.title}</p>
                    </div>
                  </div>
                  <p className="testimonial-quote">“{t.quote}”</p>
                </div>
              ))}
            </div>
          </div>

          <button className="slider-btn next" onClick={nextSlide}>
            ›
          </button>
        </div>

        <div className="dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`dot ${index === currentIndex ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
