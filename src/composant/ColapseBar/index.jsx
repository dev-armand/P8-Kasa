import React, { useState } from "react";
import './index.scss';
import vectorHaut from  "../../assets/vectorHaut.svg";

function ColapseBar(props) {
  const { colapseTitle, colapseText } = props;

  const [isCollapsed, setIsCollapsed] = useState(true);
  const [rotationAngle, setRotationAngle] = useState(0); // Initial angle is 0 degrees

  const handleCollapseToggle = () => {
    setIsCollapsed(!isCollapsed);
    // Toggle the rotation angle between 0 and 180 degrees
    setRotationAngle(rotationAngle === 0 ? 180 : 0);
  };

  return (
    <div className='colapse'>
      <div className='colapse__bar' onClick={handleCollapseToggle}>
        <p className='colapse__title'>{colapseTitle}</p>
        <img
          className='colapse__arrow'
          src={vectorHaut}
          alt="flèche haute"
          style={{ transform: `rotate(${rotationAngle}deg)` }} // Apply rotation based on the angle
        />
      </div>
      <div className={`colapse__text-container ${isCollapsed ? 'collapsed' : ''}`}>
        <p className='colapse__text'> {colapseText}</p>
      </div>
    </div>
  );
}

export default ColapseBar;