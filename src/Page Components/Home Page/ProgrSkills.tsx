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


export default function ProgrSkills() {
  // Tasks
  //    OnClick Icons Navigate on Projects Page
  return (
    <>
    <center><p style={{fontFamily:`'Dancing Script', cursive`}} className='textSkills'>My Skills</p></center>
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
        alignItems:'center',
        justifyContent:'center'
    }}
    >
    <img src={Figma} alt='George Ireamdze' className='imageParalax'/>
    </MouseParallaxChild>
    <MouseParallaxChild
    factorX={0.9}
    factorY={0.4}
    style={{
        filter: "invert(0)",
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }}
    >
    <img src={Html} alt='George Ireamdze' className='imageParalax'/>
    </MouseParallaxChild>
    <MouseParallaxChild
    factorX={0.3}
    factorY={0.6}
    style={{
        filter: "invert(0)",
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }}
    >
    <img src={Css} alt='George Ireamdze' className='imageParalax'/>
    </MouseParallaxChild>
    <MouseParallaxChild
    factorX={0.5}
    factorY={0.8}
    style={{
        filter: "invert(0)",
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }}
    >
    <img src={Javascript} alt='George Ireamdze' className='imageParalax'/>
    </MouseParallaxChild>
    <MouseParallaxChild
    factorX={0.7}
    factorY={0.3}
    style={{
        filter: "invert(0)",
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }}
    >
    <img src={Gc} alt='George Ireamdze' className='imageParalax'/>
    </MouseParallaxChild>
    <MouseParallaxChild
    factorX={0.2}
    factorY={0.7}
    style={{
        filter: "invert(0)",
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }}
    >
    <img src={Ahref} alt='George Ireamdze' className='imageParalax'/>
    </MouseParallaxChild>
    <MouseParallaxChild
    factorX={0.8}
    factorY={0.2}
    style={{
        filter: "invert(0)",
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }}
    >
    <img src={Ga} alt='George Ireamdze' className='imageParalax'/>
    </MouseParallaxChild>
    <MouseParallaxChild
    factorX={0.4}
    factorY={-0.5}
    style={{
        filter: "invert(0)",
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }}
    >
    <img src={React} alt='George Ireamdze' className='imageParalax'/>
    </MouseParallaxChild>
    <MouseParallaxChild
    factorX={0.2}
    factorY={0.5}
    style={{
        filter: "invert(0)",
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }}
    >
    <img src={Instagram} alt='George Ireamdze' className='imageParalax'/>
    </MouseParallaxChild>
    <MouseParallaxChild
    factorX={0.8}
    factorY={0.3}
    style={{
        filter: "invert(0)",
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }}
    >
    <img src={Tiktok} alt='George Ireamdze' className='imageParalax'/>
    </MouseParallaxChild>
    <MouseParallaxChild
    factorX={0.9}
    factorY={0.4}
    style={{
        filter: "invert(0)",
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }}
    >
    <img src={Cc} alt='George Ireamdze' className='imageParalax'/>
    </MouseParallaxChild>
    <MouseParallaxChild
    factorX={0.1}
    factorY={0.7}
    style={{
        filter: "invert(0)",
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }}
    >
    <img src={Canva} alt='George Ireamdze' className='imageParalax'/>
    </MouseParallaxChild>
    </div>
          </MouseParallaxContainer>
      </div>
    </div>
    </>
  )
}
