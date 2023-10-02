import { Link } from "react-router-dom"
import './index.scss';

function Card() {
  return(
    <Link to='../Logements'>
    <div className="cardContainer"> 
      <div className="card">
        <p className="cardTitle">Titre de la location</p>
      </div>
    </div>
    </Link>
  )
}

export default Card