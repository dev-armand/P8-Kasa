import Header from "../../composant/Header";
import Body from "../../composant/Body-Logements";
import Footer from "../../composant/Footer";
import "./index.scss"

function Logement() {
  return(
    <div className="marginAdjust">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default Logement