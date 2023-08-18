import React from "react";
import "./Registration.css";
import logo from "../../assets/logoDash.png";
export const Registration = () => {
  return (
    <section id="register">
      <div className="SectionRegistation">
        <div className="containerRegistration">
          <div className="txtContainerRegistration">
            <p>¿Qué esperas?</p>
            <p className="txtInscribete">INSCRÍBETE</p>
          </div>
          <div className="containerButtons">
            <a
              href="https://gdg.community.dev/events/details/google-gdg-ica-presents-devfest-ica-2023/"
              target="_blank"
            >
              <button className="button btnRegistration">¡Regístrate!</button>
            </a>
            <br />
            <a href="https://drive.google.com/file/d/1vnzdY6vkmK4Y66buIrMXJH0ogV36jk6F/view?usp=sharing"  target="_blank">
              <button className="button btnCodeConduct">
                Código de Conducta
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
