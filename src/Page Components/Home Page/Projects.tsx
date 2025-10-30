import '../../Styles/Projects/projects.css'
import Data from '../../Storage/data.json'
import Seo from '../../Storage/seo.json'
import Cc from '../../Storage/cc.json'
import ProjectImgs from './ProjectImgs'
import ProjectImgsSEO from './ProjectImgsSEO'
import ProjectImgsCC from './ProjectImgsCC'
import { useSelector } from 'react-redux'

export default function Projects() {
  const flag = useSelector((res:any)=>res.flag)
  return (
    <>
    <center><p className='proj-texts'>
        {flag==='pl'
        ?
        'Moje projekty'
        :
        'My Projects'
        }
      </p></center>
    {/* SEO */}
    <center><p className='proj-web'>SEO</p></center>
    <center><div className='projects'>
{Seo.map((res:{id:number;names:string;image:string[]})=><ProjectImgsSEO main={res} key={res.id}/>)}
    </div></center>
    {/* Content Creator */}
    <center><p className='proj-web'>Content Creator</p></center>
    <center><div className='projects'>
{Cc.map((res:{id:number;names:string;image:string[]})=><ProjectImgsCC main={res} key={res.id}/>)}
    </div></center>
    {/* Web Development */}
    <center><p className='proj-web'>Web Development</p></center>
    <center><div className='projects'>
{Data.map((res:{id:number;names:string;image:string[]})=><ProjectImgs main={res} key={res.id}/>)}
    </div></center>
    </>
  )
}
