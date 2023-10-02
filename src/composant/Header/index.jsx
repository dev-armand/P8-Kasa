import Logo from  "../../assets/Logo.png";
import './index.scss';

function Header() {
  return (
    <header className="header">
      
      <img className="logo" src={Logo} alt="logo"></img>
     
     <div className="navbar">
      <a className="nav" href="../Home">ACCUEIL</a>
      <a href="../APropos">A PROPOS</a>
     </div>
    </header>
  )
}

export default Header