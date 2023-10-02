import Card from "../Card";
import Thumbnail from "../Thumbnail";
import './index.scss';

function Body() {
  return(
    
    <div>
      <Thumbnail />
      <div className="cards">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </div>
    </div>
  )
}

export default Body