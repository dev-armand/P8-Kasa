
import Thumbnail from "../Banner";
import React from "react";
import image2 from  "../../assets/image2.png";
import ColapseBar from "../ColapseBar";
import "./index.scss"

function Body() {
  return(
    <div className="containerBody">
      <Thumbnail imageUrl={image2} />
      <div className="colapseBody">

      
      <ColapseBar colapseTitle={"Fiabilité"} colapseText={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."}/>
      <ColapseBar colapseTitle={"Respect"} colapseText={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}/>
      <ColapseBar colapseTitle={"Service"} colapseText={"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."}/>
      <ColapseBar colapseTitle={"Sécurité"} colapseText={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}/>
      </div>
    </div>
  )
}

export default Body