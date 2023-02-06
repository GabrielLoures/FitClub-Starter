import React, { useState } from 'react'

import "./Header.css"

import Logo from "../../assets/logo.png"
import Bars from "../../assets/bars.png"

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
          <li onClick={() => setMenuOpened(false)}>Home</li>
          <li onClick={() => setMenuOpened(false)}>Programas</li>
          <li onClick={() => setMenuOpened(false)}>Sobre Nós</li>
          <li onClick={() => setMenuOpened(false)}>Planos</li>
          <li onClick={() => setMenuOpened(false)}>Depoimentos</li>
        </ul>
      )}

    </div>
  )
}

export default Header
