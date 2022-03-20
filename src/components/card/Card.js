import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className='card'>
        <img src={props.image} alt={props.name}/>
        <h2>{props.name}</h2>
        <p>{props.house}</p>
    </div>
  )
}

export default Card