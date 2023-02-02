import React from 'react'

import './Programs.css'

import { programsData } from "../../data/programsData"
import RightArrow from '../../assets/rightArrow.png'

const Programs = () => {
  return (
    
    <div className="programs" id="programs">
      
      {/* Header */}
      <div className="programs-header">
        <span className='stroke-text'>Explore nossos</span>
        <span>Programas</span>
        <span className='stroke-text'>para entrar em forma</span>
      </div>

      {/* Categories */}
      <div className="programs-categories">

        {programsData.map(program => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Matricule-se Já</span>
              <img src={RightArrow} alt="Imagem de uma seta" />
            </div>
          </div>
        ))}

      </div>

    </div>

  )
}

export default Programs
