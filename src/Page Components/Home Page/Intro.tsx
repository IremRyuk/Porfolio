import '../../Styles/Home/home.css'
import {useEffect} from 'react'
import $ from 'jquery'
export default function Intro() {
    useEffect(()=>{
     // Remove Title And Launch Sliders
  setTimeout(()=>{
      $('.intro-title').css({display:'none'})
      $('.left').css({animation: 'LeftSlide 1.5s linear'})
      $('.right').css({animation: 'RightSlide 1.5s linear'})
  },3900)

    // Remove Intro
  setTimeout(()=>{
      $('.intro').hide()
  },5400)

    },[])
  return (
    <div className="intro">
        <div className='left'></div>
        <div className='right'></div>
        <p className='intro-title'>George Iremadze</p>
    </div>
  )
}
