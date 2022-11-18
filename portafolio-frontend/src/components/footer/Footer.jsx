import React from 'react'
import './footer.css'


const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Sandra Arévalo</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">Sobre mi</a>
                </li>
                <li>
                    <a href="#skills" className="footer__link">Habilidades</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Portafolio</a>
                </li>
            </ul>
            <div className="footer__social">
                <a href="https://github.com/sandraarevaloavila" className="footer__social-link" rel="noopener noreferrer" target='_blank'>
                <i class="uil uil-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/sandraarevaloa/" className="footer__social-link" rel="noopener noreferrer" target='_blank'>
                    <i class="uil uil-linkedin"></i>
                </a>
            </div>
            <span className="footer__copy">&#169; Sandra Arévalo. Todos los derechos reservados</span>
        </div>
    </footer>
  )
}

export default Footer