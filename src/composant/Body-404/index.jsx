import imageError from  "../../assets/error404.png";
import "./index.scss";
import { NavLink } from "react-router-dom";

function Body() {
  return(
    <div className="error">
      <figure className="error__image-container">
        <img src={imageError} alt="error 404" className="error__image"></img>
      </figure>
      <p className="error__text">Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to={"/Home"}>
      <p className="error__link">Retournez sur la page d'accueil</p>
      </NavLink>
    </div>
  )
}

export default Body