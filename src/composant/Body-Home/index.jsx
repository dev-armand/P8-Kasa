
import Card from "../Card";
import Banner from "../Banner"; 
import './index.scss';
import image1 from  "../../assets/image1.png";
import ListeLogements from "../../logements.json"
import { NavLink } from "react-router-dom";

function Body() { 

  return (
    <div>
      <Banner imageUrl={image1} text="Chez vous, partout et ailleurs" />
      <div className="cards">
        {ListeLogements.map((logement) => (
          <NavLink key={logement.id} to={"/logement/"+logement.id+"/#"}>
            
              <Card key={logement.id} id={logement.id} cover={logement.cover} title={logement.title}  />
    
           
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Body; 