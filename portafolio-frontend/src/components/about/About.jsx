import React from 'react';
import './about.css';
import AboutImg from '../../assets/about.jpg';
import CV from '../../assets/HVSandraMireyaArevaloAvila..pdf';
import Info from './Info';

const About = () => {
    return (
    <section className="about section" id="about">
        <h2 className="section__title">Sobre mi</h2>
        <span className="section__subtitle">Mi perfil</span>
        <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img" />
            <div className="about__data">
                <Info/>
                <p className="about__description">
                Profesional de mercadeo, con conocimientos en el 
                manejo de herramientas ofimáticas, tecnológicas de 
                desarrollo web developer; Experiencia laboral y práctica en procesos
                administrativos, realizando actividades de atención a
                clientes internos y externos, contacto con proveedores,
                facturación y elaboración de informes. Caracterizada
                por la disposición al aprendizaje, capacidad para el
                trabajo en equipo, comunicación asertiva,
                organización y atención al detalle.
                </p>
                <a download='' href={CV} className="button button-flex">
                    Descargar HV
                    <i class='bx bxs-file-pdf' ></i>
                </a>
            </div>
        </div>
    </section>
    )
}

export default About