import "./Schedule.css";
import ItemSchedule from "./ItemScheduleSpeakerText";
import React, { useState } from "react";
import imgPierre from "../../assets/speakersDF/pierreGuillen.jpeg";
import imgArmando from "../../assets/speakersDF/armandoPicon.jpg";
import imgElvis from "../../assets/speakersDF/elvisCapia.jpg";
import imgGerman from "../../assets/speakersDF/germanCayo.jpg";
import imgGustavo from "../../assets/speakersDF/gustavoLizarraga.png";
import imgHansy from "../../assets/speakersDF/hansy.jpg";
import imgIbaceta from "../../assets/speakersDF/joelIbaceta.jpg";
import imgChirinos from "../../assets/speakersDF/carlosChirinos.jpg";

import ItemScheduleSpeakerText from "./ItemScheduleSpeakerText";
import imgPerfil from "../../assets/perfil.png";

import ItemScheduleText from "./ItemScheduleText";
const Schedule = () => {
  const [showAuditorio, setshowAuditorio] = useState(true);
  const [showWeb, setshowWeb] = useState(false);
  const [showMobile, setshowMobile] = useState(false);
  const [showCloud, setshowCloud] = useState(false);
  const [showSofSkills, setshowSofSkills] = useState(false);

  const toggleContainer = () => {
    if (showAuditorio != true) {
      setshowAuditorio(!showAuditorio);
    }
    setshowWeb(false);
    setshowMobile(false);
    setshowCloud(false);
    setshowSofSkills(false);
  };

  const toggleDay2 = () => {
    setshowAuditorio(false);
    setshowMobile(false);
    setshowCloud(false);
    setshowSofSkills(false);
    if (showWeb != true) {
      setshowWeb(!showWeb);
    }
  };

  const toggleDay3 = () => {
    setshowAuditorio(false);
    setshowWeb(false);
    setshowCloud(false);
    setshowSofSkills(false);
    if (showMobile != true) {
      setshowMobile(!showMobile);
    }
  };
  const toggleDay4 = () => {
    setshowAuditorio(false);
    setshowWeb(false);
    setshowMobile(false);
    setshowSofSkills(false);
    if (showCloud != true) {
      setshowCloud(!showCloud);
    }
  };

  const toggleDay5 = () => {
    setshowAuditorio(false);
    setshowWeb(false);
    setshowMobile(false);
    setshowCloud(false);
    if (showSofSkills != true) {
      setshowSofSkills(!showSofSkills);
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
          <button onClick={toggleDay5} className="button  btnDays btnDay5">
            Soft Skills
          </button>
        </div>

        {showAuditorio && (
          <div className="containerItemsSchedule">
            <ItemScheduleText
              backgroundSolid={"#f8b352f9"}
              backgroundLight={"#f8b352c6"}
              hours={"9:30 AM"}
              dateSession={"AGT 06"}
              titleSession={"Bienvenida al DevFest Ica 2023."}
            />
            <ItemScheduleSpeakerText
              backgroundSolid={"#f8b352f9"}
              imageUrl={imgPerfil}
              hours={"10:00 AM"}
              dateSession={"AGT 06"}
              titleSession={""}
            />
            <ItemScheduleSpeakerText
              backgroundSolid={"#f8b352f9"}
              imageUrl={imgPerfil}
              hours={"10:45 AM"}
              dateSession={"AGT 06"}
              titleSession={""}
            />
            <ItemScheduleText
              backgroundSolid={"#f8b352f9"}
              backgroundLight={"#f8b352c6"}
              hours={"11:30 AM"}
              dateSession={"AGT 06"}
              titleSession={"Break - Networking"}
            />
            <ItemScheduleSpeakerText
              backgroundSolid={"#f8b352f9"}
              imageUrl={imgElvis}
              hours={"11:50 AM"}
              dateSession={"AGT 06"}
              nameSpeaker={"Elvis Capia."}
              titleSession={"Mi camino a Google"}
              roleSpeaker={"Software Engineer - Google"}
            />
            <ItemScheduleSpeakerText
              backgroundSolid={"#f8b352f9"}
              imageUrl={imgPerfil}
              hours={"12:10 AM"}
              dateSession={"AGT 06"}
              titleSession={""}
            />
              <ItemScheduleSpeakerText
              backgroundSolid={"#f8b352f9"}
              imageUrl={imgPerfil}
              hours={"12:55 AM"}
              dateSession={"AGT 06"}
              titleSession={""}
            />
              <ItemScheduleSpeakerText
              backgroundSolid={"#f8b352f9"}
              imageUrl={imgPerfil}
              hours={"1:40 PM"}
              dateSession={"AGT 06"}
              titleSession={""}
            />
            <ItemScheduleText
              backgroundSolid={"#f8b352f9"}
              backgroundLight={"#f8b352c6"}
              hours={"1:40 AM"}
              dateSession={"AGT 06"}
              titleSession={"Break (Almuerzo) - Networking"}
            />
            <ItemScheduleSpeakerText
              backgroundSolid={"#f8b352f9"}
              imageUrl={imgPerfil}
              hours={"2:25 PM"}
              dateSession={"AGT 06"}
              titleSession={""}
            />
            <ItemScheduleText
              backgroundSolid={"#f8b352f9"}
              backgroundLight={"#f8b352c6"}
              hours={"3:10 PM"}
              dateSession={"AGT 06"}
              titleSession={"Cierre del evento."}
            />
          </div>
        )}

        {showWeb && (
          <div className="containerItemsSchedule">
            <ItemScheduleText
              backgroundSolid={"#81bced"}
              backgroundLight={"#c9dcec"}
              hours={"9:50 AM"}
              dateSession={"AGT 06"}
              titleSession={"Apertura Track Web 2023."}
            />
            <ItemScheduleSpeakerText
              backgroundSolid={"#1E2A6B"}
              imageUrl={imgPerfil}
              hours={"10:00 AM"}
              dateSession={"AGT 06"}
              titleSession={""}
            />
            <ItemScheduleSpeakerText
              backgroundSolid={"#1E2A6B"}
              imageUrl={imgPerfil}
              hours={"10:45 AM"}
              dateSession={"AGT 06"}
              titleSession={""}
            />
            <ItemScheduleText
              backgroundSolid={"#81bced"}
              backgroundLight={"#c9dcec"}
              hours={"11:30 AM"}
              dateSession={"AGT 06"}
              titleSession={"Break - Networking"}
            />
            <ItemScheduleSpeakerText
              backgroundSolid={"#1E2A6B"}
              imageUrl={imgPerfil}
              hours={"11:50 AM"}
              dateSession={"AGT 06"}
              titleSession={" "}
            />
            <ItemScheduleSpeakerText
              backgroundSolid={"#1E2A6B"}
              imageUrl={imgPerfil}
              hours={"12:35 PM"}
              dateSession={"AGT 06"}
              titleSession={" "}
            />
              <ItemScheduleSpeakerText
              backgroundSolid={"#1E2A6B"}
              imageUrl={imgPerfil}
              hours={"1:20 PM"}
              dateSession={"AGT 06"}
              titleSession={" "}
            />
            <ItemScheduleText
              backgroundSolid={"#81bced"}
              backgroundLight={"#c9dcec"}
              hours={"1:40 pM"}
              dateSession={"AGT 06"}
              titleSession={"Break (Almuerzo) - Networking"}
            />
            <ItemScheduleSpeakerText
              backgroundSolid={"#1E2A6B"}
              imageUrl={imgPerfil}
              hours={"2:25 PM"}
              dateSession={"AGT 06"}
              titleSession={" "}
            />
            <ItemScheduleText
              backgroundSolid={"#81bced"}
              backgroundLight={"#c9dcec"}
              hours={"3:10 PM"}
              dateSession={"AGT 06"}
              titleSession={"Cierre del Track Web."}
            />
          </div>
        )}

        {showMobile && (
          <div className="containerItemsSchedule">
          <ItemScheduleText
            backgroundSolid={"#77da6ace"}
            backgroundLight={"#74f863be"}
            hours={"9:50 AM"}
            dateSession={"AGT 06"}
            titleSession={"Apertura Track Mobile 2023."}
          />
          <ItemScheduleSpeakerText
            backgroundSolid={"#77da6ace"}
            imageUrl={imgArmando}
            hours={"10:00 AM"}
            dateSession={"AGT 06"}
            nameSpeaker={"Armando Picón."}
            titleSession={""}
            roleSpeaker={"Lead Mobile Engineer - Uber"}
          />
          <ItemScheduleSpeakerText
            backgroundSolid={"#77da6ace"}
            imageUrl={imgGustavo}
            hours={"10:45 AM"}
            dateSession={"AGT 06"}
            nameSpeaker={"Gustavo Lizarraga."}
            roleSpeaker={"GitHub Campus Expert"}
          />
          <ItemScheduleText
            backgroundSolid={"#77da6ace"}
            backgroundLight={"#74f863be"}
            hours={"11:30 AM"}
            dateSession={"AGT 06"}
            titleSession={"Break - Networking"}
          />
          <ItemScheduleSpeakerText
            backgroundSolid={"#77da6ace"}
            imageUrl={imgPierre}
            hours={"11:50 AM"}
            dateSession={"AGT 06"}
            nameSpeaker={"Pierre Guillén."}
            titleSession={""}
            roleSpeaker={"Founder Flutter Perú"}
          />
          <ItemScheduleSpeakerText
            backgroundSolid={"#77da6ace"}
            imageUrl={imgHansy}
            hours={"12:35 PM"}
            dateSession={"AGT 06"}
            nameSpeaker={"Hansy Smitch."}
            titleSession={""}
            roleSpeaker={"Mobile Engineer"}
          />
            <ItemScheduleSpeakerText
            backgroundSolid={"#77da6ace"}
            imageUrl={imgPerfil}
            hours={"1:20 PM"}
            dateSession={"AGT 06"}
            titleSession={""}
          />
          <ItemScheduleText
            backgroundSolid={"#77da6ace"}
            backgroundLight={"#74f863be"}
            hours={"1:40 pM"}
            dateSession={"AGT 06"}
            titleSession={"Break (Almuerzo) - Networking"}
          />
          <ItemScheduleSpeakerText
            backgroundSolid={"#77da6ace"}
            imageUrl={imgPerfil}
            hours={"2:25 PM"}
            dateSession={"AGT 06"}
            titleSession={""}
          />
          <ItemScheduleText
            backgroundSolid={"#77da6ace"}
            backgroundLight={"#74f863be"}
            hours={"3:10 PM"}
            dateSession={"AGT 06"}
            titleSession={"Cierre del Track Web."}
          />
        </div>
        )}

          {showCloud && (
          <div className="containerItemsSchedule">
          <ItemScheduleText
            backgroundSolid={"#e9df72"}
            backgroundLight={"#f8f09c"}
            hours={"9:50 AM"}
            dateSession={"AGT 06"}
            titleSession={"Apertura Track Cloud 2023."}
          />
          <ItemScheduleSpeakerText
            backgroundSolid={"#e9df72"}
            imageUrl={imgGerman}
            hours={"10:00 AM"}
            dateSession={"AGT 06"}
            nameSpeaker={"German Cayo."}
            titleSession={""}
            roleSpeaker={"Ministerio de Comercio Exterior y Turismo"}
          />
          <ItemScheduleSpeakerText
            backgroundSolid={"#e9df72"}
            imageUrl={imgPerfil}
            hours={"10:45 AM"}
            dateSession={"AGT 06"}
            titleSession={""}
          />
          <ItemScheduleText
            backgroundSolid={"#e9df72"}
            backgroundLight={"#f8f09c"}
            hours={"11:30 AM"}
            dateSession={"AGT 06"}
            titleSession={"Break - Networking"}
          />
          <ItemScheduleSpeakerText
            backgroundSolid={"#e9df72"}
            imageUrl={imgPerfil}
            hours={"11:50 AM"}
            dateSession={"AGT 06"}
            titleSession={""}
          />
          <ItemScheduleSpeakerText
            backgroundSolid={"#e9df72"}
            imageUrl={imgPerfil}
            hours={"12:35 PM"}
            dateSession={"AGT 06"}
            titleSession={""}
          />
            <ItemScheduleSpeakerText
            backgroundSolid={"#e9df72"}
            imageUrl={imgPerfil}
            hours={"1:20 PM"}
            dateSession={"AGT 06"}
            titleSession={""}
          />
          <ItemScheduleText
            backgroundSolid={"#e9df72"}
            backgroundLight={"#f8f09c"}
            hours={"1:40 pM"}
            dateSession={"AGT 06"}
            titleSession={"Break (Almuerzo) - Networking"}
          />
          <ItemScheduleSpeakerText
            backgroundSolid={"#e9df72"}
            imageUrl={imgPerfil}
            hours={"2:25 PM"}
            dateSession={"AGT 06"}
            titleSession={""}
          />
          <ItemScheduleText
            backgroundSolid={"#e9df72"}
            backgroundLight={"#f8f09c"}
            hours={"3:10 PM"}
            dateSession={"AGT 06"}
            titleSession={"Cierre del Track Cloud."}
          />
        </div>
        )}

          {showSofSkills && (
          <div className="containerItemsSchedule">
          <ItemScheduleText
            backgroundSolid={"#f84e34ac"}
            backgroundLight={"#f9b9af"}
            hours={"9:50 AM"}
            dateSession={"AGT 06"}
            titleSession={"Apertura Track Soft Skills 2023."}
          />
          <ItemScheduleSpeakerText
            backgroundSolid={"#f84e34ac"}
            imageUrl={imgIbaceta}
            hours={"10:00 AM"}
            dateSession={"AGT 06"}
            nameSpeaker={"Joel Ibaceta."}
            titleSession={""}
            roleSpeaker={"Chief Technology Officer"}
          />
          <ItemScheduleSpeakerText
            backgroundSolid={"#f84e34ac"}
            imageUrl={imgChirinos}
            hours={"10:45 AM"}
            dateSession={"AGT 06"}
            nameSpeaker={"Carlos Chirinos."}
            titleSession={""}
            roleSpeaker={"UI Designer | Creador de contenido"}
          />
          <ItemScheduleText
            backgroundSolid={"#f84e34ac"}
            backgroundLight={"#f9b9af"}
            hours={"11:30 AM"}
            dateSession={"AGT 06"}
            titleSession={"Break - Networking"}
          />
          <ItemScheduleSpeakerText
            backgroundSolid={"#f84e34ac"}
            imageUrl={imgPerfil}
            hours={"11:50 AM"}
            dateSession={"AGT 06"}
            titleSession={""}
          />
          <ItemScheduleSpeakerText
            backgroundSolid={"#f84e34ac"}
            imageUrl={imgPerfil}
            hours={"12:35 PM"}
            dateSession={"AGT 06"}
            titleSession={""}
          />
            <ItemScheduleSpeakerText
            backgroundSolid={"#f84e34ac"}
            imageUrl={imgPerfil}
            hours={"1:20 PM"}
            dateSession={"AGT 06"}
            titleSession={""}
          />
          <ItemScheduleText
            backgroundSolid={"#f84e34ac"}
            backgroundLight={"#f9b9af"}
            hours={"1:40 pM"}
            dateSession={"AGT 06"}
            titleSession={"Break (Almuerzo) - Networking"}
          />
          <ItemScheduleSpeakerText
            backgroundSolid={"#f84e34ac"}
            imageUrl={imgPerfil}
            hours={"2:25 PM"}
            dateSession={"AGT 06"}
            titleSession={""}
          />
          <ItemScheduleText
            backgroundSolid={"#f84e34ac"}
            backgroundLight={"#f9b9af"}
            hours={"3:10 PM"}
            dateSession={"AGT 06"}
            titleSession={"Cierre del Track Cloud."}
          />
        </div>
        )}
      </div>
    </section>
  );
};

export default Schedule;
