import Logo from  "../../assets/Logo.png";
import './index.scss';
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <img className="logo" src={Logo} alt="logo"></img>
     <div className="navbar">
      <NavLink to="/Home" className="nav">ACCUEIL</NavLink>
      <NavLink to="/APropos">A PROPOS</NavLink>
     </div>
    </header>
  )
}

export default Header