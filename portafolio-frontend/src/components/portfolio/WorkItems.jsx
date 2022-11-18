import React from 'react'
import { useState } from 'react'

const WorkItems = ({item}) => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index)=> {
    setToggleState(index);
    }
    return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt="" className='work__img'/>
        <h3 className="work__title">{item.title}</h3>

        <a href={item.web} className="work__button" rel="noopener noreferrer" target='_blank'>
            Web <i class='bx bx-right-top-arrow-circle work__button-icon'></i>
        </a>

        <a href={item.code} className="work__button" rel="noopener noreferrer" target='_blank'>
            Codigo <i class='bx bx-right-top-arrow-circle work__button-icon'></i>
        </a>
        <span className="detail__button" onClick={()=> toggleTab(1)}>Detalles
        <i class='bx bx-right-top-arrow-circle detail__button-icon'></i></span>
        <div className={toggleState === 1 ? "work__modal active-modal": "work__modal"} >
            <div className="work__modal-content">
            <i class='bx bx-x work__modal-close' onClick={()=>toggleTab(0)}></i>
            <h3 className="work__modal-title">{item.title}</h3>
            <p className="work__modal-description">{item.description}</p>
            <p className="work__modal-description">{item.description2}</p>
            <ul className="work__modal-actions grid">
                <li className="work__modal-action">
                <i class="uil uil-check"></i>
                {item.action1}
                </li>
                <li className="work__modal-action">
                <i class="uil uil-check"></i>
                {item.action2}
                </li>
                <li className="work__modal-action">
                <i class="uil uil-check"></i>
                {item.action3}
                </li>
                <li className="work__modal-action">
                <i class="uil uil-check"></i>
                {item.action4}
                </li>
                <li className="work__modal-action">
                <i class="uil uil-check"></i>
                {item.action5}
                </li>
                <li className="work__modal-action">
                <i class="uil uil-check"></i>
                {item.action6}
                </li>
            </ul>

          </div>
        </div>
        
    </div>
  )
}
 
export default WorkItems