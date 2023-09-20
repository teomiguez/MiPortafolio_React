import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import linkedin from '../assets/icons/linkedin.svg';
import github from '../assets/icons/github.svg';
import instagram from '../assets/icons/instagram.svg';

export const ContactAndNetworks = () => {
  const form = useRef();
  const serviceId = "service_o9o18so";
  const templateId = "template_yye2qbi";
  const publicKey = "UlF_T2H_1nfnQyLJg";

  const linkLinkedin = "https://www.linkedin.com/in/teo-miguez-de-araujo-9332b9167/";
  const linkInstagram = "https://www.instagram.com/teomiguez";
  const linkGithub = "https://github.com/teomiguez";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        alert("Mensaje enviado!");
      }, (error) => {
        alert("Ocurrio un error!");
      });
    document.querySelector('#form-contact').reset();
  };

  return (
    <div className='page contact-and-networks'>
      <div className='contact'>
        <h1 className='title-page'> Contacto </h1>
        <form id='form-contact' ref={form} onSubmit={sendEmail}>
          <div className='form-flex'>
            <div className='form-part1'>
              <div className='form-field'>
                <label> Campos requeridos (<strong className='color'>*</strong>) </label>
              </div>
              <div className='form-field'>
                <label for='name'> Nombre <strong className='color'>*</strong> </label>
                <input type='text' name='name' placeholder='Ingresa tu nombre' required />
              </div>
              <div className='form-field'>
                <label for='email'> Email <strong className='color'>*</strong> </label>
                <input type='text' name='email' placeholder='Ingresa tu email' required />
              </div>
            </div>
            <div className='form-part2'>
              <div className='form-field'>
                <label for='message'> Mensaje <strong className='color'>*</strong> </label>
                <textarea name='message' placeholder='Ingresa el mensaje' required />
              </div>
            </div>
          </div>
          <div className='form-btns'>
            <input type='reset' value='Borrar' />
            <input type='submit' value='Enviar' />
          </div>
        </form>
      </div>
      <div className='vertical-line' />
      <div className='networks'>
        <h1 className='title-page'> Redes </h1>
        <h2 className='subtitle-page'> ¡Seguime en mis redes! </h2>
        <div className='icons-networks'>
          <div className='icon-network'>
            <a href={linkGithub} alt='vinculo-github'>
              <img src={github} alt="mi-github" width="80px" height="80px" />
            </a>
            <h4> GitHub </h4>
          </div>
          <div className='icon-network'>
            <a href={linkInstagram} alt='vinculo-instagram'>
              <img src={instagram} alt="mi-instagram" width="80px" height="80px" />
            </a>
            <h4> Instagram </h4>
          </div>
          <div className='icon-network'>
            <a href={linkLinkedin} alt='vinculo-linkedin'>
              <img src={linkedin} alt="mi-linkedin" width="80px" height="80px" />
            </a>
            <h4> LinkedIn </h4>
          </div>
        </div>
      </div>
    </div>
  )
}
