import "./index.scss"
import React from "react";

function TagName({tagText}) {
  return(
    <div className="tagContainer">
      <p className="tagText">{tagText} </p>
    </div>
  )
}

export default TagName