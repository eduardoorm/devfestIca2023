import React from "react";
import "./Main.css";
import ScrollToTopButton from "../Elements/ScrollToTopButton/ScrollToTopButton";

const Main = () => {
  return (
    <div className="containerMain">
      <p className="tituloContainerMain">
        DevFest Ica 2023<p className="anioContainerMain">Ica</p>
      </p>
      <a
        target="_blank"
        href="https://gdg.community.dev/e/mwg6gb/"
      >
        <button className="button btnInscribirse">¡Inscribirse!</button>
      </a>
    </div>
  );
};

export default Main;
