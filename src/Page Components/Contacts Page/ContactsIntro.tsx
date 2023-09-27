import '../../Styles/PralaxPic/paralax.css'
import IremRyuk from '../../Images/IremRyuk.jpg'
import BG from '../../Images/bg1.jpg'
import {
    MouseParallaxChild,
    MouseParallaxContainer
  } from "react-parallax-mouse";
import CircleMenuContacts from '../../Components/CircleMenuContacts';
import Table from './Table';

export default function ContactsIntro() {
  return (
    <div className='paralaxmain' style={{overflow:'none',height:'100vh'}}>
      <MouseParallaxContainer
            className="parallax"
            globalFactorX={0.2}
            globalFactorY={0.2}
            resetOnLeave
          >
            <MouseParallaxChild
              factorX={0.6}
              factorY={0.1}
              style={{
                background:
                  `url(${BG})`,
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

<div className='main-boxs'>
  <div className='avataranddescr'>
            <MouseParallaxChild
              factorX={0.5}
              factorY={0.5}
              style={{
                filter: "invert(0)",
              }}
            >
              <img src={IremRyuk} alt='George Ireamdze' className='image'/>
            </MouseParallaxChild>
            </div>
            <MouseParallaxChild
              factorX={0.9}
              factorY={0.5}
              style={{
                filter: "invert(0)",
              }}
            >
<div className='rightTop'>
  <CircleMenuContacts />
</div>
</MouseParallaxChild>
</div>
</MouseParallaxContainer>


{/* Import Table Page */}
<Table />


    </div>
  )
}
