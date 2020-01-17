import React from 'react';

import Logo from '../../assets/logo.svg';

import './styles.css';

function Menu() {

    return (
      <nav className="menu">
        <img src={Logo} alt="Devs.io"/>
        <ul className="list-menu">
          <li><a href="#oquefazemos">O que fazemos</a></li>
          <li><a href="#quemfazacontecer">Quem faz acontecer</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
    );
  }

export default Menu;
