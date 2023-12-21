import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import "../../styles/Navbar.css";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "../../styles/Button_Animation.css";

const Button = styled.div`
  position: relative;
  width: 40px;
  height: 24px;
  border-radius: 20px;
  background: ${props => (props.checked ? "white" : "#1B1D29")};
  cursor: pointer;
  transition: all ${props => `${props.transition}ms`} ease;

  input[type="checkbox"] {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    z-index: 999;
  }

  span {
    position: absolute;
    top: 2px;
    left: ${props => (props.checked ? "18px" : "2px")};
    background: ${props => (props.checked ? "#1B1D29" : "white")};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transition: all ${props => `${props.transition}ms`} ease;
  }
`;

function Navbar(props) {
  const [checked, setChecked] = useState(false);
  const [click, setClick] = useState(false);
  const btnRef = useRef();
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {

    // toggling the previous state
    setClick((prevState) => !prevState);

  };

  const [showLinks, setShowLinks] = useState(false);


  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo1' onClick={closeMobileMenu}>
          MediCare
        </Link>
        <Link to='/covid' className='navbar-logo2' onClick={closeMobileMenu}>
          Covid-19 Updates
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <button className='showlinks' onClick={() => setShowLinks(!showLinks)}><FontAwesomeIcon icon={faBars} /></button>

        <ul className={showLinks ? 'hidden' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links1' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/DiseaesPred'
              className='nav-links2'
              onClick={closeMobileMenu}
            >
              Disease Prediction
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/health'
              className='nav-links3'
              onClick={closeMobileMenu}
            >
              Health
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/Doctor'
              className='nav-links4'
              onClick={closeMobileMenu}
            >
              Doctor
            </Link>
          </li>
          <li className='nav-item'>


            <Link to={click ? "/hi" : "/"} className='nav-links5 ' id='change-language' onClick={closeMobileMenu}

              //button rubberband animation
              onMouseDown={e => e.currentTarget.classList.add("btn-animation")}
              onMouseUp={e => e.currentTarget.classList.remove("btn-animation")}
            >
              A/आ
            </Link>

          </li>
        </ul>
        <div className="modebtn form-check form-switch form-check-reverse  bord col-1">

          <Button checked={checked} transition={300}>
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
              onClick={props.togglemode}
            />
            <span />
          </Button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
