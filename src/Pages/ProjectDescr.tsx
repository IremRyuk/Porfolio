import { useParams } from 'react-router-dom'
import '../Styles/ProjectDescr/descr.css'
import Data from '../Storage/data.json'
// Swiper Js
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function ProjectDescr() {
    const {Id}:any = useParams()
    const FilteredData:{id:number;names:string;image:string[]}|undefined = Data.find(res=>res.id === parseInt(Id))
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
    </div>
    </center>
    }
    </>
  )
}
