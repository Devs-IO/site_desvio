import React from "react";

import "./styles.css";

function CardsTeam(props) {
  return (
    <div className="cards">
      <div className="info-devs">
        <p>{props.skills}</p>
        <strong>{props.name}</strong>
      </div>
      <div className="profile-devs">
        <img src={props.profile} alt={props.name} />
      </div>
      <div className="icone-linkedin">
        <a href={props.link2}><img src={props.redeSocial2} alt={props.name} /></a>
      </div>
      <div className="icone-github">
        <a href={props.link}><img src={props.redeSocial} alt={props.name} /></a>
      </div>
    </div>
  );
}

export default CardsTeam;
