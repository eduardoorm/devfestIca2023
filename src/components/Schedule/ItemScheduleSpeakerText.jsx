import React from "react";
import './ItemsSchedule.css'
const ItemScheduleSpeakerText = ({ hours, nameSpeaker,roleSpeaker, dateSession, titleSession , imageUrl ,backgroundSolid }) => {
  return (
    <div className="containerItemSchedule">
      <div className="containerDateHourItemSchedule">
        <p className="hourItemSchedule">
          {hours} <br></br>
          <span className="dateItemSchedule">{dateSession}</span>
        </p>
      </div>
      <div style={{borderLeftColor:backgroundSolid}} className="sessionInformationItemSchedule">
        <div style={{backgroundImage:`url(${imageUrl})`}} className="imgSpeakerItemSchedule"></div>
        <p className="titleSessionItemSchedule">
          <span className="nameSpeakerItemSchedule">{nameSpeaker}</span>
          <span className="nameTalk">"{titleSession}"</span> 
          <br/>
          <span className="rolSpeaker">{roleSpeaker}</span>
        </p>
      </div>
    </div>
  );
};

export default ItemScheduleSpeakerText;
