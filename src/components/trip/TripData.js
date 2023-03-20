import React from 'react'


export default function TripData(props) {

  return (
    <div className='trip__box'>
         <div className='trip__box__image'>
             <img src={props.image} alt="t-img" />
         </div>

         <h4>{props.heading}</h4>
         <p>{props.desc}</p>
    </div>
  )
}
