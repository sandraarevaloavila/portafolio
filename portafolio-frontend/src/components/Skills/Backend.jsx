import React from 'react'

const Backend = () => {
    return (
    <div className="skills__content">
        <h3 className="skills__title">Desarrolladora Backend</h3>
        <div className="skills__box">
            <div className="skills_group">
                <div className="skills__data">
                <i class='bx bxl-python skills__icon'></i>
                    <div>
                        <h3 className="skills__name">Python</h3>
                        <span className="skills__level">Básico</span>
                    </div>
                </div>
                <div className="skills__data">
                <i class='bx bxl-django skills__icon' ></i>
                    <div>
                        <h3 className="skills__name">Django</h3>
                        <span className="skills__level">Básico</span>
                    </div>
                </div>
                <div className="skills__data">
                <i class='bx bxs-data skills__icon' ></i>
                    <div>
                        <h3 className="skills__name">SQL</h3>
                        <span className="skills__level">Basico</span>
                    </div>
                </div>
                <div className="skills__data">
                <i class='bx bxl-mongodb skills__icon' ></i>
                    <div>
                        <h3 className="skills__name">MongoDB</h3>
                        <span className="skills__level">Básico</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Backend