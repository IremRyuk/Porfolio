import {AppBar,Toolbar,Stack} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import '../Styles/Nav/nav.css'
import { useEffect } from 'react'
import $ from 'jquery'
import Flag from './Flag'
import { useSelector } from 'react-redux'

export default function Nav() {
    const navigate = useNavigate()
    const AppBarMui = {
        position:'fixed',
        zIndex:'45',
        top:'0%',
        left:'0%',
        width:'100vw',
        height:'fit-content',
        background:'rgb(6 4 4 / 7%)',
        padding:'0px 5px',
        boxShadow:'none'
    }
    const BoxMuiTexts = {
        width:'100%',
        justifyContent:{xs:"space-between",sm:"space-around"},
        alignItems:'center'
    }
    const changeBg = () => {
        window.scrollY >=500?$('.css-1ak2z8z-MuiPaper-root-MuiAppBar-root').css({background:'rgb(31 31 31 / 35%)'}):$('.css-1ak2z8z-MuiPaper-root-MuiAppBar-root').css({background:'rgb(6 4 4 / 7%)'})
    }
useEffect(()=>{
    console.log(window.scrollY)
})
useEffect(()=>{
    window.addEventListener('scroll',changeBg)
})
    // Flag
        const flag = useSelector((res:any)=>res.flag)
  return (
    <AppBar sx={AppBarMui}>
      <Toolbar>
<Stack direction='row' sx={BoxMuiTexts}>
    {/* Profile */}
    <button className='con-btn' onClick={()=>navigate('/')}>
        {flag==='pl'
        ?
        'PROFIL'
        :
        'PROFILE'
        }
</button>
{/* Contcts */} 
    <button className='con-btn' onClick={()=>navigate('/contacts')}>
        {flag==='pl'
        ?
        'KONTAKT'
        :
        'CONTACT'
        }
</button>
<Flag />
</Stack>
      </Toolbar>
    </AppBar>
  )
}
