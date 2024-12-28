import React, { useState, useEffect } from 'react';
import "../../assets/styles/info/comps.css";
// Importaciones skills
import htmlCard from '../../assets/img/images/card/html5-card.jpg';
import cssCard from '../../assets/img/images/card/css3-card.png';
import javascriptCard from '../../assets/img/images/card/javascript-card.png';
import typescriptCard from '../../assets/img/images/card/typescript.png';
import csharpCard from '../../assets/img/images/card/csharp-card.png';
import javaCard from '../../assets/img/images/card/java-card.png';
import phpCard from '../../assets/img/images/card/php-card.webp';
// Importaciones techs
import reactCard from '../../assets/img/images/card/react-card.jpg';
import expressCard from '../../assets/img/images/card/expressjs.png';
import graphqlCard from '../../assets/img/images/card/graphql-card.png';
import firebaseCard from '../../assets/img/images/card/firebase-card.png';
import mongoCard from '../../assets/img/images/card/mongodb-card.png';
import nestCard from '../../assets/img/images/card/nestjs.png';
import sqlCard from '../../assets/img/images/card/Curso-SQL.png';
import mysqlCard from '../../assets/img/images/card/mysql.jpeg';

const Competencies = () => {
  const [scrollCheckFlag, setScrollCheckFlag] = useState(false);
  const [competencies, setCompetencies] = useState({
    skills: [
      {
        name: "HTML",
        progressBar: 0,
        max: 82,
        card: htmlCard,
        accDegree: 0
      },
      {
          name: "CSS",
          progressBar: 0,
          max: 83,
          card: cssCard,
          accDegree: 0
      },
      {
          name: "Javascript",
          progressBar: 0,
          max: 85,
          card: javascriptCard,
          accDegree: 0
      },
      {
          name: "Typescript",
          progressBar: 0,
          max: 65,
          card: typescriptCard,
          accDegree: 0
      },
      {
          name: "C#",
          progressBar: 0,
          max: 35,
          card: csharpCard,
          accDegree: 0
      },
      {
          name: "Java",
          progressBar: 0,
          max: 45,
          card: javaCard,
          accDegree: 0
      },
      {
          name: "PHP",
          progressBar: 0,
          max: 60,
          card: phpCard,
          accDegree: 0
      },
    ],
    techs: [
      {
        name: "React",
        progressBar: 0,
        max: 90,
        card: reactCard,
        accDegree: 0
      },
      {
          name: "Express",
          progressBar: 0,
          max: 60,
          card: expressCard,
          accDegree: 0
      },
      {
          name: "Graphql",
          progressBar: 0,
          max: 50,
          card: graphqlCard,
          accDegree: 0
      },
      {
          name: "Firebase",
          progressBar: 0,
          max: 48,
          card: firebaseCard,
          accDegree: 0
      },
      {
          name: "Mongo",
          progressBar: 0,
          max: 40,
          card: mongoCard,
          accDegree: 0
      },
      {
          name: "Nest",
          progressBar: 0,
          max: 77,
          card: nestCard,
          accDegree: 0
      },
      {
          name: "SQL",
          progressBar: 0,
          max: 55,
          card: sqlCard,
          accDegree: 0
      },
      {
          name: "MySql",
          progressBar: 0,
          max: 62,
          card: mysqlCard,
          accDegree: 0
      },
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
      cardInner.forEach((card, index) => {
        if(index === 0) {
          card.style.transition = "transform 1.8s";
        }
      });
      setCompetencies(prevState => ({
        ...prevState,
        skills: prevState.skills.map(skill => {
          if (skill.name === "HTML") {
            return {...skill, accDegree: skill.accDegree + 360}
          } else {
            return {...skill}
          }
        }
        ),
        techs: prevState.techs.map(tech => ({...tech}))
      }));
      cardInner.forEach((card, index) => {
        card.addEventListener('transitionend', () => {
          if(index === 0) {
            card.style.transition = "transform 0.5s";
          }
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
