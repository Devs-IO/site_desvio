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

       <div className="btns-stacks"> 

        <ButtonStacks
          dataAos="zoom-in-up"
          datAaosDuration="2000"
          icon={IconMobile}
          title="Consultoria"
          description="Substitua os seus problemas de TI ou do seu negócio por 
          soluções Devs.io e maximize a sua produtividade. Somos 
          especializados em inovar, prover soluções criativas 
          e resolver problemas de maior complexidade."
        />

        <ButtonStacks
          dataAos="zoom-in-up"
          datAaosDuration="2000"
          icon={IconMobile}
          title="Outsourcing"
          description="Temos as melhores soluções tecnológicas, capazes de otimizar 
          a gestão dos negócios. E oferecemos maior monitoramento e prevenção 
          contra falhas no sistema, além de permitir a flexibilidade de processos."
        />

        <ButtonStacks
          dataAos="zoom-in-up"
          datAaosDuration="2000"
          icon={IconMobile}
          title="Suportes Técnicos"
          description="Temos as melhores soluções tecnológicas, os melhores equipamentos em custo x benefício.
          Oferecemos todo o suporte e manutenção que você e sua empresa necessita."
        />

      </div>
    </div>
  );
}

export default About;
