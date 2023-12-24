import { useParams } from 'react-router-dom'
import '../Styles/ProjectDescr/descr.css'
import Data from '../Storage/data.json'
// Swiper Js
import { Swiper, SwiperSlide } from 'swiper/react';
import {useEffect} from 'react'

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
export default function ProjectDescr() {
  // Filter Data iwth Params
    const {Id}:any = useParams()
    const FilteredData:{id:number;names:string;image:string[];webSiteDescrition:string;websiteAdrress:string;myJob:string;skills:string;github?:string;}|undefined = Data.find(res=>res.id === parseInt(Id))
  // Set Page Top
    useEffect(()=>{
      window.scrollTo(0,0)
    },[])
  return (
    <>
    {FilteredData &&
    <center>
    <div className="projectdescr">
    <Swiper
        spaceBetween={30}
        // Changing Effect
        effect={'fade'}
        // Infinite Loop
        loop={true}
        // AutoPlay
        autoplay={{
            delay: 2100,
            disableOnInteraction: false,
          }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        {FilteredData?.image.map((img,index)=>(
    <SwiperSlide key={index}>
    <img src={img} className='imgCur'/>
  </SwiperSlide>
        ))}
    <p className="projectName">{FilteredData.names}</p>
    </Swiper>

    {/* Project Description */}
    <div className='description'>
    <div className="leftText">
      <p>Site Descrition: {FilteredData.webSiteDescrition}</p>
      <center><div className='line'></div></center>
      <p>My Job: {FilteredData.myJob}</p>
      <center><div className='line'></div></center>
      <p>WebSite Address: <a href={`${FilteredData.websiteAdrress}`} target="_blank" style={{color:'rgb(0 255 147)'}}>{FilteredData.websiteAdrress}</a></p>
    </div>
    <div className="rightSoc">
      <p>Skills: {FilteredData.skills}</p>
      <center><div className='line'></div></center>
      <p>My Repositories: {FilteredData.github === "Private By Owner"?<span>{FilteredData.github}</span>:<a href={`${FilteredData.github}`} target="_blank" style={{color:'rgb(0 255 147)'}}>{FilteredData.github}</a>}</p>
    </div>
    </div>
    </div>
    </center>
    }
    </>
  )
}
