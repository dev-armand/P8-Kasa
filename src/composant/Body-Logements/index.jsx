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
  const tagsLogement = ficheLogement?.tags.map((tags, index) =>  <TagName key={index} tagText={tags} />)

  /* Notes */
  let noteLogement = [];
  let starsComplete = true;
  for (let index = 0; index < 5; index++) {
    if (index === parseInt(ficheLogement?.rating)) {
    starsComplete = false;
    }
    noteLogement.push(<RatingStar key={index} checked={starsComplete} />);
  }

  const equipementsLogement = ficheLogement?.equipments.map((equipment, index) => {
      return <li key={index}>{equipment}</li>
  })

  return (
  <>
    {ficheLogement ? (
      <div className="logement">
          <Carrousel  images={ficheLogement?.pictures}/>
        <div className="logement__title-container">
          <h2 className="logement__title">{ficheLogement?.title}</h2>
          <h3 className="logement__localisation">{ficheLogement?.location}</h3>
        </div>
        <div className="logement__tag">
          {tagsLogement}
        </div>
        <div className="logement__rating-container">
          <div className="logement__stars">
          {noteLogement}
          </div>
          <div className="logement__host-container">
            <p className="logement__host-name">{ficheLogement?.host.name}</p>
            <img className="logement__host-profile-pic" src={ficheLogement?.host.picture} alt="propriétaire" />
          </div>
        </div>
        <div className="logement__colapse">
          <div className="logement__colapse-item">
            <ColapseBar colapseTitle={"Description"} colapseText={ficheLogement?.description} />
          </div>
          <div className="logement__colapse-item">
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