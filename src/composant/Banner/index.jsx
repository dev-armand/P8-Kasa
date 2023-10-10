import React from 'react';
import './index.scss';

function Banner(props) {
  const { imageUrl, text } = props;
  return (
    <div className="banner">
      <img src={imageUrl} alt="paysage" className="banner__image" />
      <p className="banner__text">{text}</p>
    </div>
  );
}

export default Banner;
