import Intro from "../Page Components/Home Page/Intro";
import PralaxPicAbout from "../Page Components/Home Page/PralaxPicAbout";
import ProgrSkills from "../Page Components/Home Page/ProgrSkills";
import Projects from "../Page Components/Home Page/Projects";
import Videos from '../Page Components/Home Page/Videos';
import { useState,useEffect } from "react";

export default function Home() {
    // For Intro Page
    const [is,setIs] = useState<boolean>(false)

    // Set Page Top
    useEffect(()=>{

      // clear session storage on reloading
      window.onbeforeunload = function(){sessionStorage.removeItem('intro')}

      // move page top
      window.scrollTo(0,0)

      // set sessionStorage
      const getInfo = sessionStorage.getItem('intro')
      if(getInfo === null){
        setTimeout(()=>{
          sessionStorage.setItem('intro','true')
        },3000)
      }else{
        setIs(true)
      }
    },[])
  return (
    <>
    {is?null:<Intro />}
    <PralaxPicAbout />
    <Videos />
    <Projects />
    <ProgrSkills />
    </>
  )
}
