import '../../Styles/Projects/projects.css'
import Data from '../../Storage/data.json'
import ProjectImgs from './ProjectImgs'

export default function Projects() {
  return (
    <>
    <center><p className='proj-texts'>My Projects</p></center>
    <center><div className='projects'>
{Data.map((res:{id:number;names:string;image:string[]})=><ProjectImgs main={res} key={res.id}/>)}
    </div></center>
    </>
  )
}
