import "./index.scss"
import React from "react";

function TagName({tagText}) {
  return(
    <div className="tag">
      <p className="tag__text">{tagText} </p>
    </div>
  )
}

export default TagName