import {AppBar,Toolbar,Stack} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import '../Styles/Nav/nav.css'
import { useEffect, useState } from 'react'

export default function Nav() {
    const [bg,setBg] = useState<boolean>(true)
    const navigate = useNavigate()
    const AppBarMui1 = {
        position:'fixed',
        zInedx:'200',
        top:'0%',
        left:'0%',
        width:'100vw',
        height:'fit-content',
        background:'transparent',
        backdropFilter:'blur(15px)',
        padding:'0px 5px',
        boxShadow:'none'
    }
    const AppBarMui2 = {
        position:'fixed',
        zInedx:'200',
        top:'0%',
        left:'0%',
        width:'100vw',
        height:'fit-content',
        background:'#2b2b2bcf',
        padding:'0px 5px',
        boxShadow:'none'
    }
    const BoxMuiTexts = {
        width:'100%',
        justifyContent:{xs:"space-between",sm:"space-around"},
        alignItems:'center'
    }
    const changeBg = () => {
        window.scrollY >=100?setBg(true):setBg(false)
    }
useEffect(()=>{
    window.addEventListener('scroll',changeBg)
})
    
  return (
    <AppBar sx={bg?AppBarMui2:AppBarMui1}>
      <Toolbar>
<Stack direction='row' sx={BoxMuiTexts}>
    {/* Profile */}
<button className="profile-btn" onClick={()=>navigate('/')}>
    Profile
</button>
{/* Contcts */}
    <button className='con-btn' onClick={()=>navigate('/contacts')}>
    CONTACT ME
    <div id="clip">
        <div id="leftTop" className="corner"></div>
        <div id="rightBottom" className="corner"></div>
        <div id="rightTop" className="corner"></div>
        <div id="leftBottom" className="corner"></div>
    </div>
    <span id="rightArrow" className="arrow"></span>
    <span id="leftArrow" className="arrow"></span>
</button>
</Stack>
      </Toolbar>
    </AppBar>
  )
}
