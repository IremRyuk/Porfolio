import '../../Styles/Skills/skills.css'
import Figma from '../../Images/figmaSt.svg'
import Css from '../../Images/css.png'
import Html from '../../Images/htmlSt.png'
import Javascript from '../../Images/javascriptSt.png'
import Ahref from '../../Images/ahref.png'
import Gc from '../../Images/gc.svg'
import React from '../../Images/reactSt.png'
import Ga from '../../Images/ga.png'
import Instagram from '../../Images/instagram.webp'
import Tiktok from '../../Images/tiktok.svg'
import Cc from '../../Images/cc.webp'
import Canva from '../../Images/canva.svg'
import {
  MouseParallaxChild,
  MouseParallaxContainer
} from "react-parallax-mouse";
import { useSelector } from 'react-redux'


export default function ProgrSkills() {
  // Tasks
  //    OnClick Icons Navigate on Projects Page
// Flag
const flag = useSelector((res:any)=>res.flag)
  return (
    <>
    <center><p style={{fontFamily:`'Dancing Script', cursive`}} className='textSkills'>
            {flag==='pl'
    ?
    `Moje umiejętności`
    :
    `My Skills`
    }</p></center>
    <div className="skills">

      <div className='skillsList'>
      <MouseParallaxContainer
            className="parallax"
            globalFactorX={0.3}
            globalFactorY={0.3}
            resetOnLeave
          >
          <MouseParallaxChild
              factorX={0.6}
              factorY={0.1}
              style={{
                backgroundPositionY: "50%",
                transform: "scale(1.2)",
                position: "absolute",
                filter: "blur(3px) brightness(50%)",
                backgroundSize: "auto",
                backgroundRepeat: "repeat",
                width: "100%",
                height: "100%",
              }}
            />
            <div className='imageGrid'>
    <MouseParallaxChild
    factorX={0.7}
    factorY={0.5}
    style={{
        filter: "invert(0)",
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    }}
    >
    <img src={Figma} alt='George Iremadze' className='imageParalax'/>
    <p className='skillstype'>Figma</p>
    </MouseParallaxChild>
    <MouseParallaxChild
    factorX={0.9}
    factorY={0.4}
    style={{
        filter: "invert(0)",
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    }}
    >
    <img src={Html} alt='George Iremadze' className='imageParalax'/>
    <p className='skillstype'>HTML</p>
    </MouseParallaxChild>
    <MouseParallaxChild
    factorX={0.3}
    factorY={0.6}
    style={{
        filter: "invert(0)",
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    }}
    >
    <img src={Css} alt='George Iremadze' className='imageParalax'/>
    <p className='skillstype'>CSS</p>
    </MouseParallaxChild>
    <MouseParallaxChild
    factorX={0.5}
    factorY={0.8}
    style={{
        filter: "invert(0)",
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    }}
    >
    <img src={Javascript} alt='George Iremadze' className='imageParalax'/>
    <p className='skillstype'>Javascript</p>
    </MouseParallaxChild>
    <MouseParallaxChild
    factorX={0.7}
    factorY={0.3}
    style={{
        filter: "invert(0)",
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    }}
    >
    <img src={Gc} alt='George Iremadze' className='imageParalax'/>
    <p className='skillstype'>Search Console</p>
    </MouseParallaxChild>
    <MouseParallaxChild
    factorX={0.2}
    factorY={0.7}
    style={{
        filter: "invert(0)",
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    }}
    >
    <img src={Ahref} alt='George Iremadze' className='imageParalax'/>
    <p className='skillstype'>Ahref</p>
    </MouseParallaxChild>
    <MouseParallaxChild
    factorX={0.8}
    factorY={0.2}
    style={{
        filter: "invert(0)",
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    }}
    >
    <img src={Ga} alt='George Iremadze' className='imageParalax'/>
    <p className='skillstype'>Google Analytics</p>
    </MouseParallaxChild>
    <MouseParallaxChild
    factorX={0.4}
    factorY={-0.5}
    style={{
        filter: "invert(0)",
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    }}
    >
    <img src={React} alt='George Iremadze' className='imageParalax'/>
    <p className='skillstype'>React</p>
    </MouseParallaxChild>
    <MouseParallaxChild
    factorX={0.2}
    factorY={0.5}
    style={{
        filter: "invert(0)",
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    }}
    >
    <img src={Instagram} alt='George Iremadze' className='imageParalax'/>
    <p className='skillstype'>Instagram</p>
    </MouseParallaxChild>
    <MouseParallaxChild
    factorX={0.8}
    factorY={0.3}
    style={{
        filter: "invert(0)",
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    }}
    >
    <img src={Tiktok} alt='George Iremadze' className='imageParalax'/>
    <p className='skillstype'>Tiktok</p>
    </MouseParallaxChild>
    <MouseParallaxChild
    factorX={0.9}
    factorY={0.4}
    style={{
        filter: "invert(0)",
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    }}
    >
    <img src={Cc} alt='George Iremadze' className='imageParalax'/>
    <p className='skillstype'>Social Media</p>
    </MouseParallaxChild>
    <MouseParallaxChild
    factorX={0.1}
    factorY={0.7}
    style={{
        filter: "invert(0)",
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    }}
    >
    <img src={Canva} alt='George Iremadze' className='imageParalax'/>
    <p className='skillstype'>Canva</p>
    </MouseParallaxChild>
    </div>
          </MouseParallaxContainer>
      </div>
    </div>
    </>
  )
}
