import { useParams } from 'react-router-dom'
import '../Styles/ProjectDescr/descr.css'
import Data from '../Storage/cc.json'
// Swiper Js
import { Swiper, SwiperSlide } from 'swiper/react';
import {useEffect} from 'react'

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { useSelector } from 'react-redux';
export default function ProjectDescr() {
  // Filter Data with Params
    const {Id}:any = useParams()
    const FilteredData:{id:number;names:string;webSiteDescriptionpl:string;myJobpl:string;image:string[];webSiteDescrition:string;websiteAdrress:string;myJob:string;skills:string;tiktok?:string;instagram?:string;facebook?:string;}|undefined = Data.find(res=>res.id === parseInt(Id))
  // Set Page Top
    useEffect(()=>{
      window.scrollTo(0,0)
    },[])
    const flag = useSelector((res:any)=>res.flag)
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
          {
          flag === 'pl'
          ?<p>Opis: {FilteredData.webSiteDescriptionpl}</p>
          :<p>Site Description: {FilteredData.webSiteDescrition}</p>
        }
      <center><div className='line'></div></center>
        {
          flag === 'pl'
          ?<p>Moja praca: {FilteredData.myJobpl}</p>
          :<p>My Job: {FilteredData.myJob}</p>
        }
      <center><div className='line'></div></center>
              {
          flag === 'pl'
          ?<p>Adres : <a href={`${FilteredData.websiteAdrress}`} target="_blank" style={{color:'rgb(0 255 147)'}}>{FilteredData.websiteAdrress}</a></p>
          :<p>WebSite Address: <a href={`${FilteredData.websiteAdrress}`} target="_blank" style={{color:'rgb(0 255 147)'}}>{FilteredData.websiteAdrress}</a></p>
        }
    </div>
    <div className="rightSoc">
             {
          flag === 'pl'
          ?<p>Umiejętności: {FilteredData.skills}</p>
          :<p>Skills: {FilteredData.skills}</p>
        } 
      <center><div className='line'></div></center>
      <p className='smallClass'>Tiktok: {FilteredData.tiktok === "Private By Owner"?<span>{FilteredData.tiktok}</span>:<a href={`${FilteredData.tiktok}`} target="_blank" style={{color:'rgb(0 255 147)'}} className='test2'>{FilteredData.tiktok}</a>}</p>
      <center><div className='line'></div></center>
      <p className='smallClass'>Instagram: {FilteredData.instagram === "Private By Owner"?<span>{FilteredData.instagram}</span>:<a href={`${FilteredData.instagram}`} target="_blank" style={{color:'rgb(0 255 147)'}}>{FilteredData.instagram}</a>}</p>
      {FilteredData.facebook?<center><div className='line'></div></center>:<></>}
      {FilteredData.facebook?<p className='smallClass'>Facebook: {FilteredData.facebook === "Private By Owner"?<span>{FilteredData.facebook}</span>:<a href={`${FilteredData.facebook}`} target="_blank" style={{color:'rgb(0 255 147)'}}>{FilteredData.facebook}</a>}</p>:<></>}
    </div>
    </div>
    </div>
    </center>
    }
    </>
  )
}
