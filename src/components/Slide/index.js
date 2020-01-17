import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import SlideHome from '../../assets/projects-paper.svg';

import './styles.css';

class Slide extends Component {

  componentDidMount(){
    AOS.init({
      duration: 2000
    })
  }
  render() {
    return (
      <div className="slide-home" data-aos='fade-right'>
        <div className="desc-slide-home">
          <strong>{this.props.title} <b>{this.props.titleDes}</b></strong>
          <img src={SlideHome} alt="Tire os projetos do papel de forma SIMPLES"/>
        </div>
      </div>
    );
  }

}

export default Slide;
