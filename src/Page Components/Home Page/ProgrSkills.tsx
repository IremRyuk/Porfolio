import '../../Styles/Skills/skills.css'
import Figma from '../../Images/figmaSt.svg'
import Css from '../../Images/css.png'
import Html from '../../Images/htmlSt.png'
import Javascript from '../../Images/javascriptSt.png'
import Typescript from '../../Images/typescriptSt.png'
import Sass from '../../Images/sass.png'
import React from '../../Images/reactSt.png'
import Jquery from '../../Images/jquery.png'
import Nodejs from '../../Images/nodejsSt.png'
import Postman from '../../Images/postman.png'
import Git from '../../Images/git.png'
import Github from '../../Images/github.png'


export default function ProgrSkills() {
  // Tasks
  //    OnClick Icons Navigate on Projects Page
  return (
    <div className="skills">
      <div className='skillsList'>
          <img src={Figma} className='staticImg '/>
          <img src={Html} className='staticImg '/>
          <img src={Css} className='staticImg '/>
          <img src={Sass} className='staticImg '/>
          {/* Second Column */}
          <img src={Javascript} className='staticImg '/>
          <img src={Typescript} className='staticImg '/>
          <img src={React} className='staticImg '/>
          <img src={Jquery} className='staticImg '/>
          {/* Third Column */}
          <img src={Nodejs} className='staticImg '/>
          <img src={Postman} className='staticImg '/>
          <img src={Git} className='staticImg '/>
          <img src={Github} className='staticImg '/>
      </div>
    </div>
  )
}
