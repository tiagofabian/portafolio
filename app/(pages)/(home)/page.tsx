"use client"

import React from 'react'
import dynamic from 'next/dynamic'
import { Skills } from "@/components/Skills";
import { Certs } from "@/components/Certs";

const WorkExperience = dynamic(() => 
  import("@/components/WorkExperience").then(mod => mod.WorkExperience),
  { ssr: false }
)

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