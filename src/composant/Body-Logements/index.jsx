import React from "react"
import { useParams, Navigate } from 'react-router-dom';
import TagName from "../Tag-name"
import ColapseBar from "../ColapseBar"
import "./index.scss"
import RatingStar from "../RatingStars"
import Carrousel from "../Carrousel"
import ListeLogements from "../../logements.json"

function Body() {
  const id = useParams();
  const ficheLogement = ListeLogements.find(logement => logement.id === id.id);

  /* Tags */
  const tagsLogement = ficheLogement?.tags.map((tags, index) => {
      return <TagName key={index} tagText={tags} />
  });

  /* Notes */
  let noteLogement = [];
let etoileComplete = true;
for (let index = 0; index < 5; index++) {
  if (index === parseInt(ficheLogement?.rating)) {
    etoileComplete = false;
  }
  // Pass `checked` prop based on the condition
  noteLogement.push(<RatingStar checked={etoileComplete} />);
}


  /* Équipements */
  const equipementsLogement = ficheLogement?.equipments.map((equipment, index) => {
      return <li key={index}>{equipment}</li>
  })

  return(
    <>
            {
                ficheLogement ? (
    <div className="containerBody">
      <div className="carousel">
      <Carrousel  images={ficheLogement?.pictures}/>
      </div>
      <div className="logementTitleContainer">
        <h2 className="logementTitle">{ficheLogement?.title}</h2>
        <h3 className="logementLocalisation">{ficheLogement?.location}</h3>
      </div>
      <div className="tagNameContainer">
      {tagsLogement}
      </div>
      <div className="ratingContainer">
       <div className="starsContainer">
       {noteLogement}
       </div>
        
        <div className="profilePictureContainer">
        <p className="profileName">{ficheLogement?.host.name}</p>
        <img className="profilePicture" src={ficheLogement?.host.picture} alt="propriétaire" />
        </div>
      </div>
      <div className="colapseContain">
        <div className="colapseItem">
          <ColapseBar colapseTitle={"Description"} colapseText={ficheLogement?.description} />
        </div>
        <div className="colapseItem">
          <ColapseBar colapseTitle={"Equipements"} colapseText={equipementsLogement} />
        </div>
      </div>
    </div>
  ) : <Navigate replace to="/error404"/>
}
</>
)
}


export default Body