import React from 'react'
import './Reasons.css'

import img1 from '../../assets/image1.png'
import img2 from '../../assets/image2.png'
import img3 from '../../assets/image3.png'
import img4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'

const Reasons = () => {
  return (
    
    <div className="reasons" id="reasons">
      
      <div className="left-r">
        <img src={img1} alt="Imagem de um homem com um haltere" />
        <img src={img2} alt="Imagem de um homem com barra W" />
        <img src={img3} alt="Imagem de um homem pegando um haltere" />
        <img src={img4} alt="Imagem de um homem malhando biceps" />
      </div>

      <div className="right-r">

        <span className='text1-r'>Motivos</span>

        <div>
          <span className='stroke-text'>Motivos </span>
          <span>para treinar conosco</span>
        </div>

        <div className='details-r'>

          <div>
            <img src={tick} alt="Imagem de um tick laranja" />
            <span>+140 PERSONAL TRAINERS</span>
          </div>

          <div>
            <img src={tick} alt="Imagem de um tick laranja" />
            <span>TREINE MAIS RÁPIDO E EFICIENTE</span>
          </div>

          <div>
            <img src={tick} alt="Imagem de um tick laranja" />
            <span>UM PROGRAMA GRÁTIS POR MEMBRO</span>
          </div>

          <div>
            <img src={tick} alt="Imagem de um tick laranja" />
            <span>PARCEIROS CONFIÁVEIS</span>
          </div>

        </div>

        <span className='text2-r'>Nosso Parceiros</span>

        <div className="partners">
          <img src={nb} alt="Logo NewBalance" />
          <img src={adidas} alt="Logo Adidas" />
          <img src={nike} alt="Logo Nike" />
        </div>

      </div>

    </div>

  )
}

export default Reasons
