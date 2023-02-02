import React from 'react'
import './Plans.css'

import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
    <div className="plans-container">

      <div className="programs-header">
        <span className='stroke-text'>Comece agora</span>
        <span>Sua jornada</span>
        <span className='stroke-text'>Conosco</span>
      </div>

      {/* Plans Cards */}
      <div className="plans">
        {plansData.map((plan, index) => (
          <div className="plan" key={index}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>R$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, index) => (
                <div className="feature">
                  <img src={whiteTick} alt="Tick branco" />
                  <span key={index}>{feature}</span>
                </div>
              ))}
            </div>

            <div className='p-links'>
              <span>
                Veja mais benefícios {`->`}
              </span>
              <button className='btn'>Matricule-se</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Plans
