import React from 'react';
import "./heroStyle.css";

export default function Hero(props) {

  return (
    <div className={props.cName}>
      <img alt='heroImg' src={props.heroImg} />

      <div className='hero__text'>
          <h1>{props.title}</h1>
          <p>{props.desc}</p>
          <a href={props.url} className={props.btnclass}> {props.battoText} </a>
      </div>
    </div>
  );
}
