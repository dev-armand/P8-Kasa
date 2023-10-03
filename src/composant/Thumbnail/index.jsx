import React from 'react';
import './index.scss';

function Thumbnail(props) {
  const { imageUrl, text } = props;

  return (
    <div className="thumbnail">
      <img src={imageUrl} alt="paysage" className="image" />
      <p className="text">{text}</p>
    </div>
  );
}

export default Thumbnail