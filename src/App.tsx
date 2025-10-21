import "./App.css";
import Footer from "./core/footer/Footer";

import Navbar from "./core/navbar/Navbar";
import AboutMe from "./pages/about-me/AboutMe";
import Contact from "./pages/contact/Contact";
import Hero from "./pages/hero/Hero";
import Project from "./pages/projects/Project";
import Service from "./pages/services/Service";
import Testimonial from "./pages/testimonials/Testimonial";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <main>
        <Hero />
        <Service />
        <Project />
        <AboutMe />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
