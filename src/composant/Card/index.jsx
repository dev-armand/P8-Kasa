import React from "react";
import './index.scss';

function Card({ id, cover, title }) {
  return (
    <div id={id} className="card">
      <img className="card__image" src={cover} alt="cover" />
      <h2 className="card__title">{title}</h2>
    </div>
  );
}

export default Card;
