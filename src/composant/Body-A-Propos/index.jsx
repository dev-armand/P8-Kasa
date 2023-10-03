
import Thumbnail from "../Thumbnail";
import React from "react";
import image2 from  "../../assets/image2.png";
import ColapseBar from "../ColapseBar";

function Body() {
  return(
    <div>
      <Thumbnail imageUrl={image2} />
      <ColapseBar colapseTitle={"Fiabilité"} colapsetext={"La description de ton article viens ici."}/>
      <ColapseBar colapseTitle={"Respect"} colapsetext={"La description de ton article viens ici."}/>
      <ColapseBar colapseTitle={"Service"} colapsetext={"La description de ton article viens ici."}/>
      <ColapseBar colapseTitle={"Sécurité"} colapsetext={"La description de ton article viens ici."}/>

    </div>
  )
}

export default Body