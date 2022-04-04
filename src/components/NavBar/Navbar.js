import React, { useState,useRef } from 'react';
import { Link } from 'react-router-dom';
import "../../styles/Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "../../styles/Button_Animation.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const btnRef = useRef();
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () =>{ 
   
    // toggling the previous state
    setClick((prevState)=>!prevState);
   
};

const [showLinks , setShowLinks] = useState(false);
    
  
  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        MediCare
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <button  className='showlinks' onClick={()=>setShowLinks(!showLinks) }><FontAwesomeIcon icon={faBars} /></button>

        <ul className={showLinks ? 'hidden' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/DiseaesPred'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Disease Prediction
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/health'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Health
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/Doctor'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Doctor
            </Link>
          </li>
          <li className='nav-item'>
           
            
            <Link to={click?"/hi":"/"} className='nav-links ' id='change-language' onClick={  closeMobileMenu } 

            //button rubberband animation
            onMouseDown ={ e =>e.currentTarget.classList.add("btn-animation")}
            onMouseUp ={ e=> e.currentTarget.classList.remove("btn-animation")}
            >
            A/आ
            </Link>
          
          </li>
        </ul>

      </nav>
    </>
  );
}

export default Navbar;
