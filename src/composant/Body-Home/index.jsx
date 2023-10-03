import Card from "../Card";
import Thumbnail from "../Thumbnail";
import './index.scss';
import React from "react";
import image1 from  "../../assets/image1.png";

function Body() {
  return(
    
    <div>
      <Thumbnail imageUrl={image1} text="Chez vous, partout et ailleurs" />
      <div className="cards">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </div>
    </div>
  )
}

export default Body