import React, { useState } from 'react'

import "./Header.css"

import Logo from "../../assets/logo.png"
import Bars from "../../assets/bars.png"

import { Link } from "react-scroll"

const Header = () => {

  const mobile = window.innerWidth <= 768 ? true : false
  const [menuOpened, setMenuOpened] = useState(false)

  return (
    <div className="header">

      <img className="logo" src={Logo} alt="Logo da empresa" />

      {(menuOpened === false && mobile === true) ? (
        <div 
          className='sand-bars'
          onClick={() => setMenuOpened(true)}  
        >
          <img src={Bars} alt="Menu sanduíche" />
        </div>
      ) : (
        <ul className="header-menu">

          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="logo"
              span={true}
              smooth={true}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="programs"
              span={true}
              smooth={true}
            >
              Programas
            </Link>
          </li>

          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="reasons"
              span={true}
              smooth={true}
            >
              Por que FitClub?
            </Link>
          </li>

          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="plans-container"
              span={true}
              smooth={true}
            >
              Planos
            </Link>
          </li>

          <li>
            <Link
              onClick={() => setMenuOpened(false)} 
              to="testimonials"
              span={true}
              smooth={true}  
            >
              Testimonials
            </Link>  
          </li>
          
        </ul>
      )}

    </div>
  )
}

export default Header
