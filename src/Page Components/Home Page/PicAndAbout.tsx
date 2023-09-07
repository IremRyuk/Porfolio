// import { useEffect } from 'react'
import '../../Styles/Home/home.css'
// import $ from 'jquery'
import IremRyuk from '../../Images/IremRyuk.jpg'


export default function PicAndAbout() {
  return (
    <div className="firstload">
      {/* About */}
      <div className='leftTop'>
      <img src={IremRyuk} alt='George Ireamdze' className='image'/>
<main className="container">
  <p className='text'>Hello There I'm </p>
  <section className="animation">
    <div className="third"><div>Web Designer</div></div>
    <div className="first"><div>George Iremadze</div></div>
    <div className="second"><div>Web Developer</div></div>
  </section>
</main>
</div>
    </div>
  )
}
