import React, { useState, useEffect } from 'react';
import "../../assets/styles/info/comps.css";

const Competencies = () => {
  const [scrollCheckFlag, setScrollCheckFlag] = useState(false);
  const [competencies, setCompetencies] = useState({
    skills: [
      {
        name: "HTML",
        progressBar: 0,
        max: 82,
        card: "https://i.ibb.co/PDc3Zfc/html5-card.jpg",
        accDegree: 0
      },
      {
        name: "CSS",
        progressBar: 0,
        max: 83,
        card: "https://i.ibb.co/PznLD6j/css3-card.png",
        accDegree: 0
      },
      {
        name: "Javascript",
        progressBar: 0,
        max: 85,
        card: "https://i.ibb.co/HHLQMBS/javascript-card.png",
        accDegree: 0
      },
      {
        name: "C#",
        progressBar: 0,
        max: 35,
        card: "https://i.ibb.co/fn2B4kz/csharp-card.png",
        accDegree: 0
      },
      {
        name: "Java",
        progressBar: 0,
        max: 45,
        card: "https://i.ibb.co/XZKvKFw/java-card.png",
        accDegree: 0
      },
      {
        name: "PHP",
        progressBar: 0,
        max: 60,
        card: "https://i.ibb.co/8dSgmK7/php-card.webp",
        accDegree: 0
      }
    ],
    techs: [
      {
        name: "React",
        progressBar: 0,
        max: 90,
        card: "https://i.ibb.co/4gZNTYd/react-card.jpg",
        accDegree: 0
      },
      {
        name: "Node",
        progressBar: 0,
        max: 60,
        card: "https://i.ibb.co/xS7VCbG/node-card.png",
        accDegree: 0
      },
      {
        name: "Graphql",
        progressBar: 0,
        max: 50,
        card: "https://i.ibb.co/6gSPXLz/graphql-card.png",
        accDegree: 0
      },
      {
        name: "Firebase",
        progressBar: 0,
        max: 48,
        card: "https://i.ibb.co/023B5FV/firebase-card.png",
        accDegree: 0
      },
      {
        name: "Mongo",
        progressBar: 0,
        max: 40,
        card: "https://i.ibb.co/6bdgtF3/mongodb-card.png",
        accDegree: 0
      },
<<<<<<< HEAD
=======
      {
        name: "SQL",
        progressBar: 0,
        max: 55,
        card: "https://i.ibb.co/xXcfnVt/Curso-SQL.png",
        accDegree: 0
      },
      {
        name: "MySql",
        progressBar: 0,
        max: 62,
        card: "https://i.ibb.co/7CXrv0m/mysql.jpg",
        accDegree: 0
      },
>>>>>>> master
    ]
  });

  const flipCard = (e) => {
    const cardName = e.currentTarget.getAttribute('data-name');
    setCompetencies(prevState => ({
      ...prevState,
      skills: prevState.skills.map(skill => {
        if (skill.name === cardName) {
          return { ...skill, accDegree: skill.accDegree + 180 }
        } else {
          return skill
        }
      }),
      techs: prevState.techs.map(tech => {
        if (tech.name === cardName) {
          return { ...tech, accDegree: tech.accDegree + 180 }
        } else {
          return tech
        }
      })
    }));
  };

  const firstScrollCheck = () => {
    const cardInner = document.querySelectorAll(".comps-flipcard-inner");
    if (!scrollCheckFlag) {
      setScrollCheckFlag(true);
      setCompetencies(prevState => ({
        ...prevState,
        skills: prevState.skills.map(skill => 
          ({...skill, accDegree: skill.accDegree + 360})
        ),
        techs: prevState.techs.map(tech => 
          ({...tech, accDegree: tech.accDegree + 360})
        )
      }));
      cardInner.forEach(card => {
        card.addEventListener('transitionend', () => {
          card.style.transition = "transform 0.5s";
        });
      });
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCompetencies(prevState => {
        const updatedSkills = prevState.skills.map(skill => ({
          ...skill,
          progressBar: Math.min(skill.progressBar + 1, skill.max)
        }));

        const updatedTechs = prevState.techs.map(tech => ({
          ...tech,
          progressBar: Math.min(tech.progressBar + 1, tech.max)
        }));

        const allSkillsComplete = updatedSkills.every(skill => skill.progressBar >= skill.max);
        const allTechsComplete = updatedTechs.every(tech => tech.progressBar >= tech.max);
        if (allSkillsComplete && allTechsComplete) {
          clearInterval(interval);
        }

        return { skills: updatedSkills, techs: updatedTechs };
      });
    }, 30);

    window.addEventListener('scroll', firstScrollCheck);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', firstScrollCheck);
    }
  }, [scrollCheckFlag]);

  return (
    <div className='comps-container'>

      <div className='comps-subcontainer'>
        <h2 className='comps-title'>Habilidades</h2>
        <div className='comps-main'>
          {competencies.skills.map((skill, index) => (
            <div className='comps-flipcard-container' key={index}>
              <div className='comps-flipcard-inner' style={{ transform: `rotateY(${skill.accDegree}deg)` }}>
                <button className='comps-flipcard-front' data-name={skill.name} onClick={(e) => flipCard(e)}>
                  <h4 className='comps-progressbar-title'>{skill.name}</h4>
                  <div className='comps-progressbar-container'>
                    <span className='comps-count'>{`${skill.progressBar}%`}</span>
                    <div className='comps-bar' style={{width: `${skill.progressBar}%`}}></div>
                  </div>
                </button>
                <button className="comps-flipcard-back" data-name={skill.name} onClick={(e) => flipCard(e)}>
                  <img src={skill.card} alt="flip" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='comps-subcontainer'>
        <h2 className='comps-title'>Tecnologías</h2>
        <div className='comps-main'>
          {competencies.techs.map((tech, index) => (
            <div className='comps-flipcard-container' key={index}>
              <div className='comps-flipcard-inner' style={{ transform: `rotateY(${tech.accDegree}deg)` }}>
                <button className='comps-flipcard-front' data-name={tech.name} onClick={(e) => flipCard(e)}>
                  <h4 className='comps-progressbar-title'>{tech.name}</h4>
                  <div className='comps-progressbar-container'>
                    <span className='comps-count'>{`${tech.progressBar}%`}</span>
                    <div className='comps-bar' data-name={tech.name} style={{width: `${tech.progressBar}%`}}></div>
                  </div>
                </button>
                <button className="comps-flipcard-back" data-name={tech.name} onClick={(e) => flipCard(e)}>
                  <img src={tech.card} alt="flip" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Competencies;
