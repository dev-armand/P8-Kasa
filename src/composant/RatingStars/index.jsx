import React from "react";
import "./index.scss";

function RatingStar({ checked }) {
  const starClass = checked ? "fa fa-star checked" : "fa fa-star notChecked";
  return (
    <div>
      <span className={starClass}></span>
    </div>
  );
}

export default RatingStar;
