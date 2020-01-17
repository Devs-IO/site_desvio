import React from 'react';

import './styles.css';

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
    </div>
  );
}

export default CardsTeam;
