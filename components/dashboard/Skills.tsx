"use client"

import React, {useState, useEffect} from 'react'
import "@/assets/styles/dashboard/skills.css"
import Image from "next/image";
import { skills } from '@/lib/list/skills'

const Skills = () => {
  // const [scrollFlag, setScrollFlag] = useState(false);
  const [skillsState, setSkillsState] = useState(skills);

  const flipCard = (e: React.MouseEvent<HTMLButtonElement>) => {
    const cardName = e.currentTarget.getAttribute('data-name');
    setSkillsState(skills => ({
      ...skills,
      langs: skills.langs.map((lang) => 
        lang.name === cardName
          ? { ...lang, accDegree: lang.accDegree + 180 }
          : lang
      ),
      techs: skills.techs.map((tech) => 
        tech.name === cardName
          ? { ...tech, accDegree: tech.accDegree + 180 }
          : tech
      )
    }));
  };

  // const firstScrollCheck = () => {
  //   const cardInner = document.querySelectorAll(".skill-flipcard-inner");
  //   if (!scrollCheckFlag) {
  //     setScrollCheckFlag(true);
  //     cardInner.forEach((card, index) => {
  //       if(index === 0) {
  //         card.style.transition = "transform 1.8s";
  //       }
  //     });
  //     setSkillsState(prevState => ({
  //       ...prevState,
  //       skills: prevState.langs.map(skill => {
  //         if (skill.name === "HTML") {
  //           return {...skill, accDegree: skill.accDegree + 360}
  //         } else {
  //           return {...skill}
  //         }
  //       }
  //       ),
  //       techs: prevState.techs.map(tech => ({...tech}))
  //     }));
  //     cardInner.forEach((card, index) => {
  //       card.addEventListener('transitionend', () => {
  //         if(index === 0) {
  //           card.style.transition = "transform 0.5s";
  //         }
  //       });
  //     });
  //   }
  // }

  const rotateCard = () => {
    const interval = setInterval(() => {
      setSkillsState((skills) => {
        const updatedLangs = skills.langs.map(lang => ({
          ...lang,
          progressBar: Math.min(lang.progressBar + 1, lang.max)
        }));

        const updatedTechs = skills.techs.map(tech => ({
          ...tech,
          progressBar: Math.min(tech.progressBar + 1, tech.max)
        }));

        const allSkillsComplete = updatedLangs.every(lang => lang.progressBar >= lang.max);
        const allTechsComplete = updatedTechs.every(tech => tech.progressBar >= tech.max);
        if (allSkillsComplete && allTechsComplete) {
          clearInterval(interval);
        }

        return { langs: updatedLangs, techs: updatedTechs };
      });
    }, 30);

    // window.addEventListener('scroll', firstScrollCheck);

    return () => {
      clearInterval(interval);
      // window.removeEventListener('scroll', firstScrollCheck);
    }
  }

  useEffect(() => {
    rotateCard()
  }, []);

  return (
    <div className='skill-container d-container gap-4xl px-12xl py-6xl tb:px-8xl tb:py-4xl mb:gap-16xl mb:px-12xl mb:py-12xl'>
      
      <div className='skill-subcontainer gap-2xl mb:gap-13xl'>
        <h2 className='skill-title text-xs font-medium mb:text-15xl'>Lenguajes</h2>
        <div className='skill-main gap-sm mb:gap-3xl'>
          {skillsState.langs.map((lang, idx) => (
            <div className='skill-flipcard-container' key={idx}>
              <div className='skill-flipcard-inner' style={{ transform: `rotateY(${lang.accDegree}deg)` }}>
                <button className='skill-flipcard-front p-md gap-5xs mb:gap-md mb:p-10xl' data-name={lang.name} onClick={(e) => flipCard(e)}>
                  <h4 className='skill-progressbar-title text-[0.8vw] mb:text-9xl'>{lang.name}</h4>
                  <div className='skill-progressbar-container'>
                    {/* <span className='skill-count text-lg mb:text-4xl'>{`${lang.progressBar}%`}</span> */}
                    <div className='skill-bar h-[0.8vw] mb:h-[2vw]' style={{width: `${lang.progressBar}%`}}></div>
                  </div>
                </button>
                <button className="skill-flipcard-back" data-name={lang.name} onClick={(e) => flipCard(e)}>
                  <Image src={lang.card} alt="flip" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='skill-subcontainer gap-2xl mb:gap-13xl'>
        <h2 className='skill-title text-xs font-medium mb:text-15xl'>Tecnologías</h2>
        <div className='skill-main gap-sm mb:gap-3xl'>
          {skillsState.techs.map((tech, idx) => (
            <div className='skill-flipcard-container' key={idx}>
              <div className='skill-flipcard-inner' style={{ transform: `rotateY(${tech.accDegree}deg)` }}>
                <button className='skill-flipcard-front p-md gap-5xs mb:gap-3xs mb:p-10xl' data-name={tech.name} onClick={(e) => flipCard(e)}>
                  <h4 className='skill-progressbar-title text-[0.8vw] mb:text-9xl'>{tech.name}</h4>
                  <div className='skill-progressbar-container'>
                    {/* <span className='skill-count text-lg mb:text-4xl'>{`${tech.progressBar}%`}</span> */}
                    <div className='skill-bar h-[0.8vw] mb:h-[2vw]' data-name={tech.name} style={{width: `${tech.progressBar}%`}}></div>
                  </div>
                </button>
                <button className="skill-flipcard-back" data-name={tech.name} onClick={(e) => flipCard(e)}>
                  <Image src={tech.card} alt="flip" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export { Skills }