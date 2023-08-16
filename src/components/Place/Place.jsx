import React from "react";
import "./Place.css";
export const Place = () => {
  return (
    <div className="sectionPlaceEvent">
      <h1>Lugar</h1>
      <div className="containerPlaceEvent">
        <div className="containerDetailPlaceEvent">
          <div className="containerDirectionEvent">
            <div className="imgDirectionEvent"></div>
            <div className="containerTxtDirectionEvent">
              Auditorio - Universidad Tecnológica del Perú.
            </div>
          </div>
          <div className="mapPlaceEvent">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.810783638198!2d-75.73695792394733!3d-14.088344383268158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9110e28a886bb93b%3A0x8a1345519fcf2cbc!2sFaculty%20of%20Systems%20Engineering!5e0!3m2!1sen!2spe!4v1690926819058!5m2!1sen!2spe"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="imgPlaceEvent"></div>
      </div>
    </div>
  );
};
