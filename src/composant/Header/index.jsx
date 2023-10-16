import React, { useState } from 'react';
import Logo from '../../assets/Logo.png';
import './index.scss';
import { NavLink } from 'react-router-dom';

function Header() {
  // Define a state variable to track the active link
  const [activeLink, setActiveLink] = useState(null);

  // Function to set the active link
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <header className="header">
      <img className="header__logo" src={Logo} alt="logo" />
      <div className="header__navbar">
        <NavLink
          to="/Home"
          className={`header__mobile ${activeLink === 'Accueil' ? 'active' : ''}`}
          onClick={() => handleLinkClick('Accueil')}
        >
          ACCUEIL
        </NavLink>
        <NavLink
          to="/APropos"
          className={`header__mobile ${activeLink === 'APropos' ? 'active' : ''}`}
          onClick={() => handleLinkClick('APropos')}
        >
          A PROPOS
        </NavLink>
        <NavLink
          to="/Home"
          className={`header__desktop ${activeLink === 'Accueil' ? 'active' : ''}`}
          onClick={() => handleLinkClick('Accueil')}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/APropos"
          className={`header__desktop ${activeLink === 'APropos' ? 'active' : ''}`}
          onClick={() => handleLinkClick('APropos')}
        >
          A propos
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
