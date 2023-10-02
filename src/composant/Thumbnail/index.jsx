import image1 from  "../../assets/image1.png";
import './index.scss';

function Thumbnail() {
  return(
    <div className="thumbnail">
      <img src={image1} alt="paysage" className="image"></img>
      <p className="text">Chez vous, partout et ailleurs</p>
    </div>
  )
}

export default Thumbnail