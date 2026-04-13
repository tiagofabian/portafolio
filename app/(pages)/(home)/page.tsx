import React from 'react'
import { Skills } from "@/components/Skills";
import { WorkExperience } from "@/components/WorkExperience";
import { Certs } from "@/components/Certs";

const page = () => (
  <div className='
    dashboard flex flex-col 
    gap-lg
    sm:gap-md
  '>
    <Skills />
    <WorkExperience/>
    <Certs/>
  </div>
)

export default page