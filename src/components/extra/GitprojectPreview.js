import React, { useState } from 'react';
import '../../assets/styles/extra/gitproject-preview.css'

const GitprojectPreview = () => {
    const [gitProject, setGitProject] = useState([
        {
            id: "restcountry",
            title: "Rest Countries",
            preview: "https://i.ibb.co/W5jZx2C/screencapture-localhost-8080-2024-07-10-14-39-02.png",
            url: "https://github.com/tiagofabian/restcountries",
            description: "Una aplicación capaz de consultar información variada sobre diferentes países del mundo, incluyendo su territorio, capital, número de residentes, etc."
        },
        {
            id: "rickandmorty",
            title: "Rick and Morty",
            preview: "https://i.ibb.co/Bsb6cd9/screencapture-localhost-3000-2024-07-10-14-12-36.png",
            url: "https://github.com/tiagofabian/rick-and-morty",
            description: "Esta aplicación reúne a todos los personajes de la serie animada Rick and Morty como tarjetas coleccionables que puedes añadir a tu lista de favoritos."
        },
        {
            id: "superhero",
            title: "Marvel",
            preview: "https://i.ibb.co/GFnwh5X/screencapture-localhost-3000-2024-07-10-14-57-21.png",
            url: "https://github.com/tiagofabian/super-hero",
            description: "En esta aplicacion encuentras toda la informacion acerca de los personajes de Marvel y su participacion en la historia."
        },
        {
            id: "nutricionalapp",
            title: "Nutricional App",
            preview: "https://i.ibb.co/jhzfpvs/screencapture-localhost-3000-2024-07-10-14-28-53.png",
            url: "https://github.com/tiagofabian/nutricional-app",
            description: "Una aplicación que ofrece amplia información sobre alimentos saludables que puedes incorporar fácilmente a tu dieta."
        }
    ])


    return (
        <div className='gitproject-container'>
            <h2 className='gitproject-title'>Proyectos</h2>
            <div className='gitproject-subcontainer'>
            {
                gitProject && gitProject.map((gp, index) => (
                    <div className='gitproject-card' key={index}>
                        <div className="gitproject-image-container">
                            <a href={gp.url} target="_blank" rel="noreferrer"><img src={gp.preview} alt="alt" /></a>
                        </div>
                        <div className='gitproject-description'>
                            <p>
                                <span>{gp.title}</span> - {gp.description}
                            </p>
                            <a href={gp.url} target="_blank" rel="noreferrer">{gp.url}</a>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default GitprojectPreview;
