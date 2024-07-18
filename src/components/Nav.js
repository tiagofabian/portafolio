import React from 'react';
import "../assets/styles/app/nav.css"
import { Link } from "react-router-dom";

const Nav = () => {
    
    return (
        <nav>
            <div className='nav-presentation'>
                <img src="https://i.ibb.co/VB8KfnL/Linkedin-Perfil2.png" alt="perfil-img" className='nav-photo-img'/>
                <div className='nav-presentation-title'>
                    <h1><span>TIAGO</span> <br /> <span id="cyan">ALCÁZAR</span></h1>
                    <h4>DESAROLLADOR DE SOFTWARE</h4>
                    <p className='aboutme-description'>
                        Soy un desarrollador fullstack
                        especializado en JavaScript, con
                        experiencia en el manejo de proyectos
                        a gran escala, incluyendo plataformas
                        de E-commerce y otras aplicaciones
                        web. A lo largo de mi carrera
                        he estudiado diferentes tipos de
                        tecnologías y siempre estoy listo para
                        afrontar nuevos desafios.
                    </p>
                </div>
            </div>
            <div className='nav-btn-section'>
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <Link className="nav-link" to="/info">
                            Info
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className="nav-link" to="/extra">
                            Extra
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;
