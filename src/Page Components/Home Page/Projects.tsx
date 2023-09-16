import '../../Styles/Projects/projects.css'
import JobsList from '../../Images/Page Images/jobs1.webp'
import Pizza from '../../Images/Page Images/pizza1.webp'
import CarsRent from '../../Images/Page Images/momondo1.png'
import Art from '../../Images/Page Images/art1.png'
export default function Projects() {
  return (
    <>
    <center><p className='proj-texts'>My Projects</p></center>
    <center><div className='projects'>
      <div className='image-box'>
        <img src={JobsList} alt='Projects Image' className='proj-image' />
        <p className='box-text'>Jobs List</p>
      </div>
      <div className='image-box'>
        <img src={Pizza} alt='Projects Image' className='proj-image' />
        <p className='box-text'>Pizza Land</p>
      </div>
      <div className='image-box'>
        <img src={CarsRent} alt='Projects Image' className='proj-image' />
        <p className='box-text'>Momondo</p>
      </div>
      <div className='image-box'>
        <img src={Art} alt='Projects Image' className='proj-image' />
        <p className='box-text'>Artfinder</p>
      </div>
    </div></center>
    </>
  )
}
