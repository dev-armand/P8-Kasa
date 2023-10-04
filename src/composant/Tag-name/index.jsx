import "./index.scss"
function TagName(props) {
  const { tagText} = props;
  return(
    <div className="tagContainer">
      <p className="tagText">{tagText} </p>
    </div>
  )
}

export default TagName