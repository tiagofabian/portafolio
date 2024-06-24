import React from 'react';
import "../assets/styles/app/nav.css"
import { Link } from "react-router-dom";
// import perfilIMG from "../assets/img/images/LinkedinPerfil2.png"

const Nav = () => {
    
    return (
        <nav>
            <div className='nav-presentation'>
                {/* <img src={perfilIMG} alt="perfil-img" className='nav-photo-img'/> */}
                <div className='nav-presentation-title'>
                    <h1><span>TIAGO</span> <br /> <span id="cyan">ALCÁZAR</span></h1>
                    <h4>DESAROLLADOR DE SOFTWARE</h4>
                    <p className='aboutme-description'>
                        Soy un desarrollador fullstack especializado 
                        en React con Node. Poseo experiencia diseñando 
                        aplicaciones web con multiples librerias y 
                        herramientas de optiomización, prueba, 
                        documentación y despliegue. A lo largo de mi 
                        carrera, he estudiado diferentes tipos de 
                        tecnologías y siempre estoy listo para afrontar 
                        nuevos desafíos.
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
