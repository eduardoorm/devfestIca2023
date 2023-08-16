import React from "react";
import "./InformationBar.css";
import ItemInformationBar from "./ItemInformationBar";
const InformationBar = () => {
  return (
    <div className="sectionInformationBar">
      <div className="containerInformation">
        <div className="containerInformationBar">
          <ItemInformationBar
            backgroundColor="#1B6EF3"
            textInformation={"Construye una app desde Cero"}
          ></ItemInformationBar>
          <ItemInformationBar
            backgroundColor={"#F09D00"}
            textInformation={"#DevFestIca"}
          ></ItemInformationBar>
          <ItemInformationBar
            backgroundColor={"#DC362E"}
            textInformation={"Conecta con desarolladores locales"}
          ></ItemInformationBar>
          <ItemInformationBar
            backgroundColor={"#202124"}
            textInformation={" Obten un certificado al finalizar"}
          ></ItemInformationBar>
          <ItemInformationBar
            backgroundColor={"#1B6EF3"}
            textInformation={"Muchas sorpresas durante el evento"}
          ></ItemInformationBar>
          <ItemInformationBar
            backgroundColor={"#F09D00"}
            textInformation={"Descubre el desarrollo móvil"}
          ></ItemInformationBar>
          <ItemInformationBar
            backgroundColor={"#DC362E"}
            textInformation={"#GoogleIO2023Ica"}
          ></ItemInformationBar>
          <ItemInformationBar
            backgroundColor={"#1B6EF3"}
            textInformation={"Inicia en el desarrollo web"}
          ></ItemInformationBar>
          <ItemInformationBar
            backgroundColor={"#DC362E"}
            textInformation={"Aprende sobre Inteligencia Artificial"}
          ></ItemInformationBar>
        </div>
      </div>
    </div>
  );
};

export default InformationBar;
