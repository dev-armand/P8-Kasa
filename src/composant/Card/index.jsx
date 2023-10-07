import React from "react";
import { Link } from "react-router-dom";
import './index.scss';

function Card({ id, cover, title }) {
  return (
    <div id={id} className="cardContainer">
      
            <img className="card" src={cover} alt="cover" />
          <h2 className="cardTitle">{title}</h2>
     
    </div>
  );
}

export default Card;
