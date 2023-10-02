import imageError from  "../../assets/error404.png";
import "./index.scss";


function Body() {
return(
  <div className="containerError">
    <figure className="imageErrorContainer">
    <img src={imageError} alt="error 404" className="imageError"></img>
    </figure>
    <p className="oups">Oups! La page que vous demandez n'existe pas.</p>
    <a className="retour" href="../Home">Retournez sur la page d'accueil</a>
  </div>
)
}

export default Body