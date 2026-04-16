import { Skills } from "@/components/Skills"
import { Certs } from "@/components/Certs"
import { WorkExperience } from "@/components/WorkExperience"

const Page = () => (
  <div className='
    dashboard flex flex-col 
    gap-lg
    sm:gap-md
  '>
    <Skills />
    <WorkExperience />
    <Certs />
  </div>
)

export default Page