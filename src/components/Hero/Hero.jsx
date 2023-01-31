import React from 'react'
import Header from '../Header/Header'

import "./Hero.css"

const Hero = () => {
  return (
    
    <div className="hero">

      <div className="left-h">

        <Header />

        {/* The Best AD */}
        <div className="the-best-ad">
          <div></div>
          <span>A melhor e maior academia da cidade</span>
        </div>

        {/* Hero Heading */}

      </div>

      <div className="right-h">
        RIGHT SIDE
      </div>

    </div>
  )
}

export default Hero
