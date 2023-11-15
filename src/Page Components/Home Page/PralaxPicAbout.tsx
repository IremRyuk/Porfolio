import '../../Styles/PralaxPic/paralax.css'
import IremRyuk from '../../Images/IremRyuk.jpg'
import BG from '../../Images/bg1.jpg'
import {
    MouseParallaxChild,
    MouseParallaxContainer
  } from "react-parallax-mouse";
import CircleMenuContacts from '../../Components/CircleMenuContacts';
import { useNavigate } from 'react-router-dom';

export default function PralaxPicAbout() {
  const navigate = useNavigate()
  return (
    <div className='paralaxmain' style={{overflow:'none'}}>
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
              <img src={IremRyuk} alt='George Ireamdze' className='image' onClick={()=>navigate('/')}/>
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
<div className='titleMain'>
<main className="container">
  <p className='text' style={{fontFamily: `'Libre Baskerville', serif`}}>Hello There I'm </p>
  <section className="animation">
    <div className="third"><div>Web Designer</div></div>
    <div className="second"><div>Web Developer</div></div>
    <div className="first"><div>George Iremadze</div></div>
  </section>
</main>
<p className='myTitle'>Hello there I am full-stack web developer, from 2021 - 2022: I worked on small projects as a freelancer, from 2022-2023 as a Junior Front End Developer in Poland remotely and from 2023 - until now I am working as a web developer in the USA remotely in my friend's company.
</p>
</div>
    </div>
  )
}
