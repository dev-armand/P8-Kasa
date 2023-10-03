import './index.scss';
import vectorBas from  "../../assets/vectorBas.svg";
function ColapseBar(props) {
  const { colapseTitle, colapsetext } = props;

  return(
    <div className='colapseContainer'>
      <div className='colapseBar'>
        <p className='colapseTitle'>{colapseTitle}</p>
        <img className='colapseArrow' src={vectorBas} alt="vector bas" />
      </div>
      <div className='colapseTextContainer'>
        <p className='colapseText'> {colapsetext}</p>
      </div>
    </div>
  )
}

export default ColapseBar