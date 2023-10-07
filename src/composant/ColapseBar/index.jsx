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
    <div className='colapseContainer'>
      <div className='colapseBar' onClick={handleCollapseToggle}>
        <p className='colapseTitle'>{colapseTitle}</p>
        <img
          className='colapseArrow'
          src={vectorHaut}
          alt="flèche haute"
          style={{ transform: `rotate(${rotationAngle}deg)` }} // Apply rotation based on the angle
        />
      </div>
      <div className={`colapseTextContainer ${isCollapsed ? 'collapsed' : ''}`}>
        <p className='colapseText'> {colapseText}</p>
      </div>
    </div>
  );
}

export default ColapseBar;