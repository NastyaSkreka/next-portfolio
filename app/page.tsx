import About from "@/components/about";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <SectionDivider/>
      <About/>
      <Skills/>
      <Education/>
       <Contact/>
    </main>
  )
}
