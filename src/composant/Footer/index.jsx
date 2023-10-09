import './index.scss';
import Logo from  "../../assets/logoFooter.png";

function Footer() {
  return (
    <footer className='footer'>
      <img className='footerimg' src={Logo} alt="logo kasa"></img>
      <p className='footerp'> © 2020 Kasa. All rights reserved </p>
    </footer>
  )
}

export default Footer
