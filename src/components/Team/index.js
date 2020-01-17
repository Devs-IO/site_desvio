import React from 'react';

import './styles.css';

import CardsTeam from './CardsTeam';

import RebecaNonato from '../../assets/rebeca-nonato.png';
import DericksonLoss from '../../assets/derickson-loss.png';
import WanderHungerbuhler from '../../assets/wander-hungerbuhler.png';
import MickaelDantas from '../../assets/mickael-dantas.png';
import LucasT from '../../assets/lucas-t.png';
import AndreOliveira from '../../assets/andre-oliveira.png';

function Team(props) {
  return (
    <div className="team" id="quemfazacontecer" data-aos='fade-right'>
      <div className="desc-team">
        <strong>{props.title} <br/> <b>{props.titleDes}</b></strong>
      </div>

      <div className="cardsTeam">
        <CardsTeam dataAos='zoom-in-up' datAaosDuration="2000" name="Rebeca Nonato" skills="A Faz Tudo" profile={RebecaNonato} />
        <CardsTeam dataAos='zoom-in-up' datAaosDuration="2000" name="Derickson Loss" skills="O Empresário" profile={DericksonLoss} />
        <CardsTeam dataAos='zoom-in-up' datAaosDuration="2000" name="Wander Hungerbühler" skills="O Japa" profile={WanderHungerbuhler} />
        <CardsTeam dataAos='zoom-in-up' datAaosDuration="2000" name="Mickael Dantas" skills="O Gringo" profile={MickaelDantas} />
        <CardsTeam dataAos='zoom-in-up' datAaosDuration="2000" name="Lucas T." skills="O Teoremista" profile={LucasT} />
        <CardsTeam dataAos='zoom-in-up' datAaosDuration="2000" name="Lucas T." skills="O Spotify" profile={AndreOliveira} />
      </div>
    </div>
  );
}

export default Team;
