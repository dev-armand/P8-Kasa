import imageError from  "../../assets/error404.png";
import "./index.scss";

function Body() {
  return(
    <div className="error">
      <figure className="error__image-container">
        <img src={imageError} alt="error 404" className="error__image"></img>
      </figure>
      <p className="error__text">Oups! La page que vous demandez n'existe pas.</p>
      <a className="error__link" href="../Home">Retournez sur la page d'accueil</a>
    </div>
  )
}

export default Body