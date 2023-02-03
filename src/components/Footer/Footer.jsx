import React from 'react'
import './Footer.css'

import github from '../../assets/github.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className="footer-container">

      <hr />

      <div className="footer">

        <div className="social-links">
          <a href="https://github.com/GabrielLoures" target="_blank" rel="noreferrer">        
            <img src={github} alt="Logo do Github" />          
          </a>        
          <a href="https://instagram.com/gabriellouress" target="_blank" rel="noreferrer">        
            <img src={instagram} alt="Logo do Instagram" />         
          </a>        
          <a href="https://linkedin.com/in/gabriel-matheus-loures-ribeiro-07a453b8" target="_blank" rel="noreferrer">        
            <img src={linkedin} alt="Logo do LinkedIn" />        
          </a>                  
        </div>

        <div className="logo-f">
          <img src={logo} alt="Logo da FitClub" />
        </div>

      </div>

    </div>
  )
}

export default Footer
