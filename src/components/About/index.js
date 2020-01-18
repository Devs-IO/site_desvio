import React from "react";

import SlideAbout from "../../assets/about-us.svg";

import IconDesktop from "../../assets/icon-desktop.svg";
import IconMobile from "../../assets/icon-mobile.svg";

import ButtonStacks from "../ButtonStacks";

import "./styles.css";

function About(props) {
  return (
    <div className="aboutus" id="oquefazemos" data-aos="fade-left">
      <div className="desc-aboutus">
        <strong>
          {props.title} <br /> <b>{props.titleDes}</b>
        </strong>
        <p>{props.description}</p>
        <div className="infos-aboutus">
          <img src={SlideAbout} alt="O famoso o que fazemos" />

          <div className="infos-desc">
            <p>{props.infosOne}</p>
            <p>{props.infosTwo}</p>
            <p>{props.infosThree}</p>
          </div>
        </div>
      </div>

      <div className="btns-stacks">
        <ButtonStacks
          dataAos="zoom-in-up"
          datAaosDuration="2000"
          icon={IconDesktop}
          title="Desenvolvimento de Sites"
          description="Desenvolvemos seu site com as melhores
          tencologias do mercado. Nossa ideia não é
          criar apenas mais um site, mas sim criar O SITE!"
        />

        <ButtonStacks
          dataAos="zoom-in-up"
          datAaosDuration="2000"
          icon={IconDesktop}
          title="Desenvolvimento de Softwares"
          description="Temos a solução ideal para sua necessidade.
          Transformamos ideias em Projetos concretos.
          Substitua os seus problemas de TI ou do seu negócio por soluções Devs.io
          e maximize a sua produtividade!"
        />

        <ButtonStacks
          dataAos="zoom-in-up"
          datAaosDuration="2000"
          icon={IconMobile}
          title="Desenvolvimento de Aplicativos"
          description="Desenvolvemos seu aplicativo com as melhores
          tecnologias do mercado."
        />
      </div>
    </div>
  );
}

export default About;
