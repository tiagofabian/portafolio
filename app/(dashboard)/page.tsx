import React from 'react'
import { Skills } from "@/components/dashboard/Skills";
import { WorkExperience } from "@/components/dashboard/WorkExperience";
import { Certs } from "@/components/dashboard/Certs";

const page = () => (
  <>
    <Skills />
    <WorkExperience/>
    <Certs/>
  </>
)

export default page
