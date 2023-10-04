import TagName from "../Tag-name"
import ColapseBar from "../ColapseBar"
import "./index.scss"
import alexandreDumas from "../../assets/alexandreDumas.jpg"
import RatingStar from "../RatingStars"

function Body() {
  return(
    <div>
      <div className="carousel">

      </div>
      <div className="logementTitleContainer">
        <h2 className="logementTitle">Paris center, on the romantic Canal Saint-Martin</h2>
        <h3 className="logementLocalisation">Paris, île-de-France</h3>
      </div>
      <div className="tagNameContainer">
      <TagName tagText={"Copy"} />
      <TagName tagText={'Canal'} />
      <TagName tagText={'Paris 10'} />
      </div>
      <div className="ratingContainer">
        <RatingStar />
        <div className="profilePictureContainer">
        <p className="profileName">Alexandre Dumas</p>
        <img className="profilePicture" src={alexandreDumas} alt=" de profile" />
        </div>
      </div>
      <ColapseBar colapseTitle={"Description"} />
      <ColapseBar colapseTitle={"Equipements"} />
    </div>
  )
}

export default Body