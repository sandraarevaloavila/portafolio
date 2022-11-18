import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Ponte en contacto</h2>
        <span className="section__subtitle">Contáctame</span>
        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Hablar conmigo</h3>
                <div className="contact__info">
                    <div className="contact__card">
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">sandrita.bibi12@gmail.com</span>
                            <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" 
                            className="contact__button"
                            rel="noopener noreferrer" target='_blank'>Escribeme
                            <i class="uil uil-fast-mail contact__card-icon"></i></a>
                    </div>
                    <div className="contact__card">
                            <h3 className="contact__card-title">WhatsApp</h3>
                            <span className="contact__card-data">+57 3006838428</span>
                            <a href="https://web.whatsapp.com/" 
                            className="contact__button"
                            rel="noopener noreferrer" target='_blank'>Escribeme
                            <i class='bx bxl-whatsapp contact__card-icon'></i></a>
                    </div>
                    <div className="contact__card">
                            <h3 className="contact__card-title">Linkedin</h3>
                            <span className="contact__card-data">sandraarevaloa</span>
                            <a href="https://www.linkedin.com/in/sandraarevaloa/" 
                            className="contact__button"
                            rel="noopener noreferrer" target='_blank'>Escribeme
                            <i class='bx bxl-linkedin contact__card-icon'></i>
                            </a>
                    </div>
                </div>
            </div>
            <div className="contact__content">
                <h3 className="contact__title">Cuentame tu proyecto</h3>
                <form action="" className="contact__form">
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Nombre</label>
                        <input type="text" name='name' className='contact__form-input' 
                        placeholder='Insert your name' />
                    </div>
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Mail</label>
                        <input type="email" name='email' className='contact__form-input' 
                        placeholder='Insert your email' />
                    </div>
                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag">Proyecto</label>
                        <textarea name="project" id="" cols="30" rows="10"
                        className='contact__form-input'
                        placeholder='Write your project'></textarea>
                    </div>
                    <span className="button contact__button-send">
                    Enviar Mensaje
                    <i class='bx bx-mail-send bx-fade-left' ></i>
                    </span>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact