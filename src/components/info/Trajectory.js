import React, { useState, useEffect, useRef } from 'react';
import "../../assets/styles/info/trajectory.css";

const Trajectory = () => {
  const academyRefs = useRef([]);
  const workingRefs = useRef([]);
  const [accordion, setAccordion] = useState({
    academy: [
      {
        name: "aiep",
        selected: false,
        title: "Instituto Profesional Aiep",
        content: {
          subtitle: "analista y programador de sistemas",
          yearRange: "2018-2021",
          subjects: [
            "Programación Orientada a Objetos.",
            "Base de Datos Relacionales",
            "Arquitectura MVC",
            "Lenguajes de Modelado (Bizagi, Uml).",
            "Calidad de Software.",
            "Documentación y Toma de Requerimientos(ERS).",
            "Manejo de Redes Básico.",
            "Armado y Desarmado de Computadoras."
          ]
        }
      },
      {
        name: "escalab",
        selected: false,
        title: "Escalab Academy",
        content: {
          subtitle: "cursos de tecnología moderna",
          yearRange: "2022-2024",
          subjects: [
            "Curso de Javascript.",
            "Curso de React JS.",
            "Curso de Node JS.",
            "Curso de Graphql.",
            "Curso de Nest JS.",
          ]
        }
      }
    ],
    working: [
      {
        name: "ecomsur",
        selected: false,
        title: "Ecomsur",
        content: {
          subtitle: "desarrollador frontend",
          yearRange: "2023-2024",
          subjects: [
            "Vtex.",
            "React",
            "Typescript",
            "Graphql",
            "Node",
            "GTM",
            "GitLab",
            "Azure",
            "Mysql",
          ]
        }
      },
    ]
  });

  const updateDropDown = (e) => {
    const btnDataName = e.currentTarget.getAttribute("data-name");
    setAccordion(prevAccordion => ({
      ...prevAccordion,
      academy: prevAccordion.academy.map(obj => {
        if (obj.name === btnDataName) {
          return { ...obj, selected: !obj.selected };
        } else {
          return obj;
        }
      }),
      working: prevAccordion.working.map(obj => {
        if (obj.name === btnDataName) {
          return { ...obj, selected: !obj.selected };
        } else {
          return obj;
        }
      })
    }));
  };

  useEffect(() => {
    ['academy', 'working'].forEach((section) => {
      const refs = section === 'academy' ? academyRefs.current : workingRefs.current;
      accordion[section].forEach((acc, index) => {
        const content = refs[index];
        if (content) {
          content.style.height = acc.selected ? content.scrollHeight + "px" : "0px";
        }
      });
    });
  }, [accordion]);

  return (
    <div className='trajectory-container'>
      <div className='trajectory-subcontainer'>
        <h2 className='trajectory-title'>Historial Académico</h2>
        <div className='trajectory-main'>
          {accordion.academy.map((obj, index) => (
            <div className="accordion-container" key={index}>
              <div className="accordion-label-container">
                <label>{obj.title}</label>
                <button className="accordion-btn" data-name={obj.name} onClick={(e) => updateDropDown(e)}>
                  <div className="arrow-dropdown">
                    <div className={`left ${obj.selected ? "active-left" : ""}`}></div>
                    <div className={`right ${obj.selected ? "active-right" : ""}`}></div>
                  </div>
                </button>
              </div>
              <div
                className="accordion-content"
                ref={(el) => (academyRefs.current[index] = el)}
              >
                <div>
                  <span><strong>{obj.content.subtitle} </strong><i>{obj.content.yearRange}</i></span>
                  <ul>
                    {obj.content.subjects.map((subject, idx) => (
                      <li key={idx}>{subject}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='trajectory-subcontainer'>
        <h2 className='trajectory-title'>Historial Laboral</h2>
        <div className='trajectory-main'>
          {accordion.working.map((obj, index) => (
            <div className="accordion-container" key={index}>
              <div className="accordion-label-container">
                <label>{obj.title}</label>
                <button className="accordion-btn" data-name={obj.name} onClick={(e) => updateDropDown(e)}>
                  <div className="arrow-dropdown">
                    <div className={`left ${obj.selected ? "active-left" : ""}`}></div>
                    <div className={`right ${obj.selected ? "active-right" : ""}`}></div>
                  </div>
                </button>
              </div>
              <div
                className="accordion-content"
                ref={(el) => (workingRefs.current[index] = el)}
              >
                <div>
                  <span><strong>{obj.content.subtitle} </strong><i>{obj.content.yearRange}</i></span>
                  <ul>
                    {obj.content.subjects.map((subject, idx) => (
                      <li key={idx}>{subject}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trajectory;
