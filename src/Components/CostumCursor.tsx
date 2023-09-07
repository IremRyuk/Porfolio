import {useEffect} from 'react'
import $ from 'jquery'
import '../Styles/Defaults/App.css'

export default function CostumCursor() {
    useEffect(()=>{
        window.addEventListener('mousemove',(e)=>{
          const x = e.clientX * 100 / window.innerWidth + '%'
          const y = e.clientY * 100 / window.innerHeight + '%'
          $('.line').css({left:x})
          $('.line').css({top:y})
        })
          })
  return (
    <div className='line'></div>
  )
}
