import "./index.scss"

function RatingStar() {
  return(
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star notChecked"></span>
      <span className="fa fa-star notChecked"></span>
    </div>
  )
}

export default RatingStar