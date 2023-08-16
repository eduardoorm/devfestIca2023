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
  const [showDay1, setShowDay1] = useState(true);
  const [showDay2, setShowDay2] = useState(false);
  const [showDay3, setShowDay3] = useState(false);
  const [showDay4, setShowDay4] = useState(false);
  const toggleContainer = () => {
    if (showDay1 != true) {
      setShowDay1(!showDay1);
    }
    setShowDay2(false);
    setShowDay3(false);
  };

  const toggleDay2 = () => {
    setShowDay1(false);
    setShowDay3(false);
    if (showDay2 != true) {
      setShowDay2(!showDay2);
    }
  };

  const toggleDay3 = () => {
    setShowDay1(false);
    setShowDay2(false);
    if (showDay3 != true) {
      setShowDay3(!showDay3);
    }
  };
  const toggleDay4 = () => {
    setShowDay1(false);
    setShowDay2(false);
    if (showDay4 != true) {
      setShowDay3(!showDay4);
    }
  };
  return (
    <section id="schedule">
       <div className="containerSchedule">
        <h1>Agenda</h1>
        <div className="containenButtonsDay">
          <button onClick={toggleContainer} className="button btnDays btnDay1">
            Auditorio
          </button>
          <button onClick={toggleDay2} className="button btnDays btnDay2">
            Web
          </button>
          <button onClick={toggleDay3} className="button  btnDays btnDay3">
            Mobile
          </button>
          <button onClick={toggleDay4} className="button  btnDays btnDay4">
            Cloud
          </button>
        </div>

        {showDay1 && (
          <div className="containerItemsSchedule">
            <ItemScheduleSpeakerText
              backgroundSolid={"#1E2A6B"}
              imageUrl={imgPerfil}
              hours={"9:30 AM"}
              dateSession={"AGT 06"}
              titleSession={"Próximamente."}
            />
            <ItemScheduleSpeakerText
              backgroundSolid={"#1E2A6B"}
              imageUrl={imgPerfil}
              hours={"10:30 AM"}
              dateSession={"AGT 06"}
              titleSession={"Próximamente."}
            />
            <ItemScheduleSpeakerText
              backgroundSolid={"#1E2A6B"}
              imageUrl={imgPerfil}
              hours={"11:30 AM"}
              dateSession={"AGT 06"}
              titleSession={"Próximamente."}
            />
            <ItemScheduleText
              backgroundSolid={"#81bced"}
              backgroundLight={"#c9dcec"}
              hours={"16:45 PM"}
              dateSession={"AGT 06"}
              titleSession={"Próximamente."}
            />
          </div>
        )}

        {showDay2 && (
          <div className="containerItemsSchedule">
            <ItemScheduleSpeakerText
              backgroundSolid={"#1E2A6B"}
              imageUrl={imgPerfil}
              hours={"9:30 AM"}
              dateSession={"AGT 06"}
              titleSession={"Próximamente."}
            />
            <ItemScheduleSpeakerText
              backgroundSolid={"#1E2A6B"}
              imageUrl={imgPerfil}
              hours={"10:30 AM"}
              dateSession={"AGT 06"}
              titleSession={"Próximamente."}
            />
            <ItemScheduleSpeakerText
              backgroundSolid={"#1E2A6B"}
              imageUrl={imgPerfil}
              hours={"11:30 AM"}
              dateSession={"AGT 06"}
              titleSession={"Próximamente."}
            />
            <ItemScheduleText
              backgroundSolid={"#81bced"}
              backgroundLight={"#c9dcec"}
              hours={"12:00 PM"}
              dateSession={"AGT 06"}
              titleSession={"Próximamente."}
            />
          </div>
        )}

        {showDay3 && (
          <div className="containerItemsSchedule">
            <ItemScheduleSpeakerText
              backgroundSolid={"#1E2A6B"}
              imageUrl={imgPerfil}
              hours={"9:30 AM"}
              dateSession={"AGT 06"}
              titleSession={"Próximamente."}
            />
            <ItemScheduleSpeakerText
              backgroundSolid={"#1E2A6B"}
              imageUrl={imgPerfil}
              hours={"10:30 AM"}
              dateSession={"AGT 06"}
              titleSession={"Próximamente."}
            />
            <ItemScheduleSpeakerText
              backgroundSolid={"#1E2A6B"}
              imageUrl={imgPerfil}
              hours={"11:30 AM"}
              dateSession={"AGT 06"}
              titleSession={"Próximamente."}
            />
            <ItemScheduleText
              backgroundSolid={"#81bced"}
              backgroundLight={"#c9dcec"}
              hours={"12:00 PM"}
              dateSession={"AGT 06"}
              titleSession={"Próximamente."}
            />
          </div>
        )}

{showDay4 && (
          <div className="containerItemsSchedule">
            <ItemScheduleSpeakerText
              backgroundSolid={"#1E2A6B"}
              imageUrl={imgPerfil}
              hours={"9:30 AM"}
              dateSession={"AGT 06"}
              titleSession={"Próximamente."}
            />
            <ItemScheduleSpeakerText
              backgroundSolid={"#1E2A6B"}
              imageUrl={imgPerfil}
              hours={"10:30 AM"}
              dateSession={"AGT 06"}
              titleSession={"Próximamente."}
            />
            <ItemScheduleSpeakerText
              backgroundSolid={"#1E2A6B"}
              imageUrl={imgPerfil}
              hours={"11:30 AM"}
              dateSession={"AGT 06"}
              titleSession={"Próximamente."}
            />
            <ItemScheduleText
              backgroundSolid={"#81bced"}
              backgroundLight={"#c9dcec"}
              hours={"12:00 PM"}
              dateSession={"AGT 06"}
              titleSession={"Próximamente."}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Schedule;
