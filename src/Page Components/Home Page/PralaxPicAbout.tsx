import '../../Styles/PralaxPic/paralax.css'
import IremRyuk from '../../Images/IremRyuk.jpg'
import BG from '../../Images/bg1.jpg'
import {
    MouseParallaxChild,
    MouseParallaxContainer
  } from "react-parallax-mouse";
import CircleMenuContacts from '../../Components/CircleMenuContacts';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PralaxPicAbout() {
  const navigate = useNavigate()
  // Flag
  const flag = useSelector((res:any)=>res.flag)
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
  <p className='text' style={{fontFamily: `'Libre Baskerville', serif`}}>
    {flag==='pl'
    ?
    `Cześć, jestem`
    :
    `Hello There I'm`
    }
     </p>
  <section className="animation">
    <div className="third"><div>Web Developer</div></div>
    <div className="second"><div>Content Creator</div></div>
    <div className="first"><div>
    {flag==='pl'
    ?
    `Specjalista SEO`
    :
    `SEO Specialist`
    }
    </div></div>
  </section>
</main>
<p className='myTitle'>
      {flag==='pl'
    ?
    `Cześć, jestem pełnym stosem programistą stron internetowych. W latach 2018-2023 zajmowałem się tworzeniem stron internetowych i SEO, od 2023 do 2024 r. - rozwojem projektów i SEO, a od 2025 r. do chwili obecnej pracuję w zakresie SEO, tworzenia stron internetowych i projektowania.`
    :
    `Hello there I am full-stack web developer, from 2018 - 2023: I worked in Web Development and SEO, from 2023 to 2024 - Project development and SEO and from 2025 - till now I am working in SEO, Web Development and Design.`
    }
</p>
</div>
    </div>
  )
}
