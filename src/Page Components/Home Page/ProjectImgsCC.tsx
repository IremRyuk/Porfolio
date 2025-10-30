import { useNavigate } from "react-router-dom"

type Res = {
    main:{
      id:number,
      names:string,
      image:string[]
    }
  }
export default function ProjectImgsCC({main}:Res) {
    const navigate = useNavigate()
  return (
    <div className='image-box' key={main.id} onClick={()=>navigate(`/projectscc/${main.id}`)}>
    <img src={main.image[0]} alt='Projects Image' className='proj-image' />
    <p className='box-text'>{main.names}</p>
  </div>
  )
}
