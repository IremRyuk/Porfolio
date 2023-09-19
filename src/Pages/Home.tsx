// import Intro from "../Page Components/Home Page/Intro";
import PralaxPicAbout from "../Page Components/Home Page/PralaxPicAbout";
import ProgrSkills from "../Page Components/Home Page/ProgrSkills";
import Projects from "../Page Components/Home Page/Projects";
import {useEffect} from 'react'

export default function Home() {
    // Set Page Top
    useEffect(()=>{
      window.scrollTo(0,0)
    },[])
  return (
    <>
    {/* <Intro /> */}
    <PralaxPicAbout />
    <ProgrSkills />
    <Projects />
    </>
  )
}
