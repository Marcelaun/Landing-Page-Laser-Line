
import LaserLineLogo from '../../assets/Laser_Line_logo.svg';
import HambMenuIcon from '../../assets/Menu/Menu_Alt_04.svg';
import CloseHambMenuIcon from '../../assets/Menu/Close_MD.svg';
import './Navbar.css';

import { useRef } from 'react';
import { Link } from 'react-router-dom';



export default function Navbar () {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  
  const hideNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  return (
    <header className="header">
      <nav ref={navRef} className="navbar">
        <img src={LaserLineLogo} alt="Logo Laser Line" className="nav-logo" />
        <ul className="nav-links">
      <li className="link">
      <Link className="link-btn" to="/" onClick={hideNavbar} >
            Home
        </Link>
      </li>
      <li className="link">
      <Link className="link-btn" to="/About" onClick={hideNavbar}>
            Sobre
        </Link>
      </li>
      <li className="link">
      <Link className="link-btn" to="/Contacts" onClick={hideNavbar}>
            Contato
        </Link>
      </li>
      
      
     </ul>
     
      </nav>
      <button className="nav-btn nav-close-btn" onClick={showNavbar}>
      <img className="Botao_close_hamb" src={CloseHambMenuIcon} alt="Fechar guia" />
     </button>
      <button className="nav-btn" onClick={showNavbar}>
      <img src={HambMenuIcon} alt="Abrir Guia" />
    </button>
    </header>
  )
}