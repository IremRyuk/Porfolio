import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import SnackBar from "./SnackBar";

export default function Table() {
    const [open,setOpen] = useState<boolean>(false)
    const BoxStyleMui = {
        position:'absolute',
        bottom:{xs:'0%',lg:'5%',xl:'10%'},
        width:'100vw',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        padding:'20px 20px'
    }
    const StackStyleMui = {
        flexDirection:{xs:'column',sm:'row'},
        margin:'10px 0px',
        width:{xs:'100vw',sm:'80vw',md:'70vw',lg:"70vw"},
        boxShadow:'0px 0px 50px black',
        padding:{xs:'0px 5px',sm:'5px 10px',md:"10px,20px"},
        justifyContent:'space-between',
        alignItems:'center',
        textAlign:'center',
        color:'#00ffd0'
    }
    const Title1 = {
        width:{xs:'100%',sm:'25%'},
        fontSize:{xs:'20px',sm:'25px',md:'27px',lg:'30px'},
    }
    const Title2 = {
        width:{xs:'100%',sm:'75%'},
        fontSize:{xs:'20px',sm:'25px',md:'27px',lg:'30px'},
        cursor:'pointer',
        '&:hover':{
            textDecoration:'underline'
        }
    }
    const arrCon:{name:string,cont:string}[] = [
        {name:'Gmail',cont:'giorgiiremadze98@gmail.com'},
        {name:'GitHub',cont:'https://github.com/IremRyuk?tab=repositories'},
        {name:'Phone',cont:'+995591603603'},
        {name:'Linkedin',cont:'https://www.linkedin.com/in/giorgi-iremadze-a035a9229/'}
    ]
    const clipBoard = (text:string) => {
        navigator.clipboard.writeText(text)
        setOpen(e=>!e)
        setTimeout(()=>{
            setOpen(e=>!e)
        },1700)
    }
  return (
<Box sx={BoxStyleMui}>
{arrCon.map((res:{name:string,cont:string})=>(
    <Stack direction='row' sx={StackStyleMui}>
    <Typography sx={Title1}>{res.name}</Typography>
    {/* <div className="middleLine"></div> */}
    <Typography sx={Title2} onClick={() => clipBoard(res.cont)}>{res.cont}</Typography>
    <SnackBar isOpen={open}/>
</Stack> 
))}
</Box>
  )
}
