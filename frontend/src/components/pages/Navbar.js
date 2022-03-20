import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () =>{ 
   
    // toggling the previous state
    setClick((prevState)=>!prevState);
   
};
    
  
  return (
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        MediCare
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/DiseasePred'
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
<<<<<<< HEAD:frontend/src/components/pages/Navbar.js
            <Link to='/hi' className='nav-links' id='change-language' onClick={closeMobileMenu}>
=======
           
            
            <Link to={click?"/hi":"/"} className='nav-links ' id='change-language' onClick={  closeMobileMenu } 

            //button rubberband animation
            onMouseDown ={ e =>e.currentTarget.classList.add("btn-animation")}
            onMouseUp ={ e=> e.currentTarget.classList.remove("btn-animation")}
            >
>>>>>>> 5ad5c5e63d73b5174b42f1908f955f555723ab84:src/components/NavBar/Navbar.js
            A/आ
            </Link>
          </li>
        </ul>
      </nav>
  );
}

export default Navbar;