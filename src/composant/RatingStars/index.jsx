import React from "react";
import "./index.scss";

function RatingStar({ checked }) {
  // Use the `checked` prop to conditionally apply the class
  const starClass = checked ? "fa fa-star checked" : "fa fa-star notChecked";

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <span className={starClass}></span>
    </div>
  );
}

export default RatingStar;
