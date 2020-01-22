import React from "react";

import "./styles.css";

import CardsTeam from "./CardsTeam";

import RebecaNonato from "../../assets/rebeca-nonato.png";
import DericksonLoss from "../../assets/derickson-loss.png";
import WanderHungerbuhler from "../../assets/wander-hungerbuhler.png";
import MickaelDantas from "../../assets/mickael-dantas.png";
import LucasT from "../../assets/lucas-t.png";
import AndreOliveira from "../../assets/andre-oliveira.png";
import GitHub from "../../assets/github.png";

function Team(props) {
  return (
    <div className="team" id="quemfazacontecer" data-aos="fade-right">
      <div className="desc-team">
        <strong>
          {props.title} <br /> <b>{props.titleDes}</b>
        </strong>
      </div>

      <div className="cardsTeam">
        <CardsTeam
          dataAos="zoom-in-up"
          datAaosDuration="2000"
          name="Rebeca Nonato"
          skills="A Faz Tudo"
          profile={RebecaNonato}
          redeSocial={GitHub}
        />
        <CardsTeam
          dataAos="zoom-in-up"
          datAaosDuration="2000"
          name="Derickson Loss"
          skills="O Empresário"
          profile={DericksonLoss}
          redeSocial={GitHub}
        />
        <CardsTeam
          dataAos="zoom-in-up"
          datAaosDuration="2000"
          name="Wander Hungerbühler"
          skills="O Japa"
          profile={WanderHungerbuhler}
          redeSocial={GitHub}
        />
        <CardsTeam
          dataAos="zoom-in-up"
          datAaosDuration="2000"
          name="Mickael Dantas"
          skills="O Gringo"
          profile={MickaelDantas}
          redeSocial={GitHub}
        />
        <CardsTeam
          dataAos="zoom-in-up"
          datAaosDuration="2000"
          name="Lucas T."
          skills="O Teoremista"
          profile={LucasT}
          redeSocial={GitHub}
        />
        <CardsTeam
          dataAos="zoom-in-up"
          datAaosDuration="2000"
          name="André Oliveira"
          skills="O Spotify"
          profile={AndreOliveira}
          redeSocial={GitHub}
        />
      </div>
    </div>
  );
}

export default Team;
