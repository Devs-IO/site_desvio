import React from "react";

import Menu from "./components/Menu";
import Slide from "./components/Slide";
import About from "./components/About";
import Team from "./components/Team";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Menu />
      <Slide title="Tire seus projetos do papel de forma" titleDes="SIMPLES" />
      <About
        title="O famoso"
        titleDes="O QUE FAZEMOS?"
        description="Concepção, Desenvolvimento de Softwares, Sites e Apps,
          Consultoria, Outsourcing, Soluções de Produtos, Suportes Técnicos, Manutenção, Hospedagem e Domínio."
        infosOne="Nós temos a solução que você precisa para colocar aquela ideia, projeto, soluções para seu negócio no mercado o quanto antes!"
        infosTwo="Se estava procurando por uma empresa que pudesse desenvolver seu site, aplicativo. Você realmente, não chegou aqui por acaso."
        infosThree="A metodologia que utilizamos para você chegar até aqui, será a mesma para ajudar você, a conseguir converter com seus clientes."
      />
      <Team title="Quem faz" titleDes="ACONTECER" />
    </div>
  );
}

export default App;
