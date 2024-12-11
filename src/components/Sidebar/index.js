import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/RHR LOGO.png'
import LogoSubtitle from '../../assets/images/Rivanno Grey.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react';
const Sidebar = () => {
    const [showNav, setShowNav] = useState(true);

   return (
    
       <div className='navbar'>
           <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className='sub-logo' src={LogoSubtitle} alt="name" />
            
        </Link>
        <nav className={showNav ? 'mobile-nav' : ''}>
            <NavLink exact="true" activeclassname="active" to="/" onClick={()=> setShowNav(false)}>
                <FontAwesomeIcon icon={faHome} color = "#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about" onClick={()=> setShowNav(false)}>
                <FontAwesomeIcon icon={faUser} color = "#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" onClick={()=> setShowNav(false)}>
                <FontAwesomeIcon icon={faEnvelope} color = "#4d4d4e" />
                </NavLink>
                <FontAwesomeIcon icon={faClose} color="#ffd700" size='3x' className='close-icon' onClick={()=> setShowNav(false)} />
        </nav>
        <ul>
            <li>
                <a target = "_blank" rel="noreferrer" href="https://www.linkedin.com/in/rivanno-haidar-rozaan">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target = "_blank" rel="noreferrer" href="https://github.com/RivannoHR/">
                     <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
        <FontAwesomeIcon icon={faBars} color='#ffd700' size='3x' className='hamburger-icon' onClick={() => setShowNav(true)} />
    </div>
)}

export default Sidebar;