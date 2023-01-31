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
        <div className="hero-text">

          <div>
            <span>Entre em </span>
            <span className="stroke-text">Forma</span>
          </div>

          <div>
            <span>Com a melhor</span>
          </div>

          <div className="p-text">
            <span>Na nossa academia, vamos ajudá-lo a entrar em forma de maneira rápida e prática com os melhores treinos da atualidade</span>
          </div>

        </div>

        {/* Figures */}
        <div className="figures">

          <div>
            <span>+140</span>
            <span>Personal Trainers</span>
          </div>

          <div>
            <span>+978</span>
            <span>Alunos matriculados</span>
          </div>

          <div>
            <span>+50</span>
            <span>Atividades físicas</span>
          </div>

        </div>

        {/* Hero Buttons */}
        <div className="hero-buttons">

          <button className="btn">Comece Agora</button>
          <button className="btn">Saiba Mais</button>

        </div>
        
      </div>

      <div className="right-h">
        RIGHT SIDE
      </div>

    </div>
  )
}

export default Hero
