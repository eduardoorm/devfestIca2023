import "./Schedule.css";
import ItemSchedule from "./ItemScheduleSpeakerText";
import React, { useState } from "react";
import imgPierre from "../../assets/speakers/pierreGuillen.jpg";
import imgDiego from "../../assets/speakers/diegoDeGranda.jpg";
import imgSebastian from "../../assets/speakers/sebastiaGomez.jpg";
import imgJose from "../../assets/speakers/joseCarlos.jpg";
import imgRafael from "../../assets/speakers/rafaelGonzales.jpg";
import ItemScheduleSpeakerText from "./ItemScheduleSpeakerText";
import imgPerfil from "../../assets/perfil.png";

import ItemScheduleText from "./ItemScheduleText";
const Schedule = () => {
  return (
    <section id="schedule">
      <div className="containerSchedule">
        <h1>Agenda</h1>
        <div className="containenButtonsDay">
        </div>
          <div className="containerItemsSchedule">
            <ItemScheduleSpeakerText
              backgroundSolid={"#DB4437"}
              imageUrl={imgPerfil}
              hours={"9:30 AM"}
              dateSession={"DIC 02"}
              titleSession={"Próximamente"}
              nameSpeaker={""}
            />
                        <ItemScheduleSpeakerText
              backgroundSolid={"#DB4437"}
              imageUrl={imgPerfil}
              hours={"10:15 AM"}
              dateSession={"DIC 02"}
              titleSession={"Próximamente"}
              nameSpeaker={""}
            />
                        <ItemScheduleSpeakerText
              backgroundSolid={"#DB4437"}
              imageUrl={imgPerfil}
              hours={"11:30 AM"}
              dateSession={"DIC 02"}
              titleSession={"Próximamente"}
              nameSpeaker={""}
            />
              <ItemScheduleSpeakerText
              backgroundSolid={"#DB4437"}
              imageUrl={imgPerfil}
              hours={"12:15 PM"}
              dateSession={"DIC 02"}
              titleSession={"Próximamente"}
              nameSpeaker={""}
            />
              <ItemScheduleSpeakerText
              backgroundSolid={"#DB4437"}
              imageUrl={imgPerfil}
              hours={"14:00 PM"}
              dateSession={"DIC 02"}
              titleSession={"Próximamente"}
              nameSpeaker={""}
            />

          <ItemScheduleSpeakerText
              backgroundSolid={"#DB4437"}
              imageUrl={imgPerfil}
              hours={"14:45 PM"}
              dateSession={"DIC 02"}
              titleSession={"Próximamente"}
              nameSpeaker={""}
            />

            <ItemScheduleSpeakerText
              backgroundSolid={"#DB4437"}
              imageUrl={imgPerfil}
              hours={"15:30 PM"}
              dateSession={"DIC 02"}
              titleSession={"Próximamente"}
              nameSpeaker={""}
            />

            <ItemScheduleSpeakerText
              backgroundSolid={"#DB4437"}
              imageUrl={imgPerfil}
              hours={"16:15 PM"}
              dateSession={"DIC 02"}
              titleSession={"Próximamente"}
              nameSpeaker={""}
            />
          </div>

          
      </div>
    </section>
  );
};

export default Schedule;
