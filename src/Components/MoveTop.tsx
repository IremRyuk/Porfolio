import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import {Stack} from '@mui/material'
export default function MoveTop() {
  return (
    <Stack
    sx={{
        position:'fixed',
        right:'5%',
        bottom:'5%',
        width:'min-content',
        height:'min-content',
        zIndex:'100',
        cursor:'pointer',
        transition:'0.1s',
        '&:hover':{
          scale:'1.2'
        }
    }}
     onClick={()=>window.scrollTo(0,0)}>
    <KeyboardDoubleArrowUpIcon sx={{color:'#0fbca1',fontSize:{xs:"4rem",sm:"4.7rem"}}}/>
    </Stack>
  )
}
