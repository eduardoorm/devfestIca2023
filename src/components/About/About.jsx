import React from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTopButton from "../Elements/ScrollToTopButton/ScrollToTopButton";

const About = () => {
  AOS.init({
    duration: 1100,
  });
  return (
    <section id="about">
      <div className="containerAbout">
        <div className="textContainerAbout">
          <h1>ACERCA DE</h1>
          El DevFest es un evento diseñado para brindar una experiencia
          enriquecedora y educativa a estudiantes de nivel secundaria y
          universitarios. Este evento será una oportunidad única para explorar
          una amplia gama de temas: tecnología, desarrollo personal, habilidades
          blandas, productividad y más.
          <p>
            DevFest Ica será un espacio inspirador donde el aprendizaje y la
            colaboración se unen, brindando a los asistentes una experiencia
            enriquecedora y la oportunidad de expandir sus conocimientos y
            conexiones en un ambiente estimulante.
          </p>
          <b>¡COMPLETAMENTE GRATUITO!.</b>
        </div>
        <ScrollToTopButton></ScrollToTopButton>
        <div className="imgFlutter"></div>
      </div>
    </section>
  );
};

export default About;
