import '../../Styles/PralaxPic/paralax.css'
import IremRyuk from '../../Images/IremRyuk.jpg'
import {
    MouseParallaxChild,
    MouseParallaxContainer
  } from "react-parallax-mouse";

export default function PralaxPicAbout() {
  return (
    <div className='paralaxmain'>
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
                background:
                  "url(https://cdnp1.stackassets.com/120ffd8c9b28dc256cb16fb78c9957758b77b45f/store/c62147ac21dd5ade032638f4613fc3475e0b3967ae3c174dad3273334b0e/sale_32415_article_image.jpg",
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
            
            <MouseParallaxChild
              factorX={0.7}
              factorY={0.5}
              style={{
                filter: "invert(0)",
              }}
            >
<main className="container">
  <p className='text'>Hello There I'm </p>
  <section className="animation">
    <div className="third"><div>Web Designer</div></div>
    <div className="second"><div>Web Developer</div></div>
    <div className="first"><div>George Iremadze</div></div>
  </section>
</main>
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
  <button className='proejcts type1'></button>
  <button className='contacts'>
    <span className='cont-sp'>
        Contact Me
    </span>
</button>
</div>
</MouseParallaxChild>
</div>
          </MouseParallaxContainer>
    </div>
  )
}
