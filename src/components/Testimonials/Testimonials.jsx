import React from 'react'
import './Testimonials.css'

import { testimonialsData } from '../../data/testimonialsData'
import { useState } from 'react'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'

const Testimonials = () => {

  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length

  return (
    <div className="testimonials">

      <div className="left-t">
        <span>Depoimentos</span>
        <span className='stroke-text'>O que falam</span>
        <span>Sobre a gente</span>

        <span>
          {testimonialsData[selected].review}
        </span>

        <span>
          <span className='name-t'>
            {testimonialsData[selected].name}
          </span> {" "}

          - {testimonialsData[selected].status}
        </span>
      </div>

      <div className="right-t">

        <div className='arrows'>
          <img 
            src={leftArrow} 
            alt="Seta para a esquerda"
            onClick={(() => {
              selected === 0 ? setSelected(tLength -1) : setSelected((prev) => prev -1)
            })}  
          />
          <img 
            src={rightArrow} 
            alt="Seta para a direita"
            onClick={(() => {
              selected === tLength - 1 ? setSelected(0) : setSelected((prev) => prev +1)
            })}  
          />
        </div>

        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt="Foto do cliente" />

      </div>

    </div>
  )
}

export default Testimonials
