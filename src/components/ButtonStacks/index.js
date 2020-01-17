import React from 'react';

import './styles.css';

function ButtonStack(props){
  return (
    <div className="stacks">
      <div className="stack-developer" data-aos={props.dataAos} data-aos-duration={props.dataAosDuration}>
        <img src={props.icon} alt=""/>
        <div className="desc-stack">
        <strong>{props.title}</strong>
        <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ButtonStack;
