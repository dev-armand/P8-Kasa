import TagName from "../Tag-name"
import Equipements from "../Equipements"
import Descriptions from "../Description"

function Body() {
  return(
    <body>
      <div>
      <h2>Paris center, on the romantic Canal Saint-Martin</h2>
      <h3>Paris, île-de-France</h3>
      <div>
      <TagName />
      <TagName />
      <TagName />
      </div>
      <p>Alexandre Dumas</p>
      </div>
      <Equipements />
      <Descriptions />
    </body>
  )
}

export default Body