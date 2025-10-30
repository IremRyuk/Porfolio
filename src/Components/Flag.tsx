import { useDispatch, useSelector } from 'react-redux'
import '../Styles/Flag/flag.css'
import { FlagAct } from '../Redux/Action/Flag'
import Pl from '../Images/Page Images/pl.svg'
import Usa from '../Images/Page Images/usa.webp'

export default function Flag() {
    const flag = useSelector((res:any)=>res.flag)
    const dispatch = useDispatch()
    const ChangeFlag = () => {
        if(flag==='pl'){
            dispatch(FlagAct('en'))
        }else{
            dispatch(FlagAct('pl'))
        }
    }
  return (
    <div className='flag' onClick={()=>ChangeFlag()}>
        {flag === 'pl'?
        <img src={Pl} alt='George Iremadze' className='flags' />
        :
        <img src={Usa} alt='George Iremadze' className='flags' />
        }
    </div>
  )
}
