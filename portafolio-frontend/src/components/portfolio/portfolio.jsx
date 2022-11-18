import React from 'react'
import './portfolio.css'
import Works from './Works'

const Portfolio = () => {
    return (
    <section className="portfolio section" id="portfolio">
        <h2 className="section__title">Portafolio</h2>
        <span className="section__subtitle">Trabajos más recientes</span>
        <Works/>
    </section>
    )
}

export default Portfolio