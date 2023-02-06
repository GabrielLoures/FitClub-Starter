import React from 'react'
import "./Hero.css"
import Header from '../Header/Header'

import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import heart from "../../assets/heart.png"
import calories from "../../assets/calories.png"

import { motion } from "framer-motion"
import NumberCounter from "number-counter"

const Hero = () => {
  
  const transition = {type: 'spring', duration: 3}
  const mobile = window.innerWidth <= 768 ? true : false

  return (

    <div className="hero">

      <div className="blur hero-blur"></div>

      <div className="left-h">

        <Header />

        {/* The Best AD */}
        <div className="the-best-ad">
          <motion.div
            className='orange-cilinder'
            initial={{left: mobile ? '178px' : '260px'}}
            whileInView={{left: '8px'}}
            transition={{...transition, type: 'tween'}}
          ></motion.div>
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
            <span>
              <NumberCounter 
                end={140} 
                start={100} 
                delay='4'
                preFix='+'
              />
            </span>
            <span>Personal Trainers</span>
          </div>

          <div>
            <span>
              <NumberCounter 
                end={978} 
                start={800} 
                delay='4'
                preFix='+'
              />
            </span>
            <span>Alunos matriculados</span>
          </div>

          <div>
            <span>
              <NumberCounter 
                end={50} 
                start={0} 
                delay='2'
                preFix='+'
              />
            </span>
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
        
        <button className="btn">Matricule-se</button>

        <motion.div 
          className="heart-rate"
          initial={{right: '-1rem'}}
          whileInView={{right: '4rem'}}
          transition={transition}
        >
          <img src={heart} alt="Imagem de um coração laranja" />
          <span>Batimentos</span>
          <span>120 bpm</span>
        </motion.div>

        {/* Hero Images */}
        <img src={hero_image} alt="Homem amarrando o tênis" className="hero-image" />
        <motion.img 
          src={hero_image_back} 
          alt="Imagem decorativa" 
          className="hero-image-back" 
          initial={{right: '15rem'}}
          whileInView={{right: '24rem'}}
          transition={transition}
        />

        {/* Calories */}

        <motion.div 
          className="calories"
          initial={{right: '40rem'}}  
          whileInView={{right: '32rem'}}
          transition={transition}  
        >
          <img src={calories} alt="Imagem de barras laranjas" />
          <div>
            <span>Calorias</span>
            <span>220kcal</span>
          </div>
        </motion.div>

      </div>

    </div>
  )
}

export default Hero
