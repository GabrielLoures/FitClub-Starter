import React, { useRef } from "react"
import './Join.css'

import emailjs from '@emailjs/browser'

const Join = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o2oouxa', 'template_x07o5ed', form.current, '2g5C0VnqZwfkSD6mE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="join" id="join">

      <div className="left-j">

        <hr />
        <div>
          <span className="stroke-text">PREPARE-SE</span>
          <span>PARA LEVAR</span>
        </div>

        <div>
          <span>SEU CORPO</span>
          <span className="stroke-text">A OUTRO NÍVEL</span>
        </div>

      </div>

      <div className="right-j">

        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input type="email" name="user_email" placeholder="email@email.com" />
          <button className="btn btn-j">Cadastre-se</button>
        </form>

      </div>
      
    </div>
  )
}

export default Join