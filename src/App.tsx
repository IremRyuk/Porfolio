import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import './Styles/Defaults/App.css'
import ProjectDescr from './Pages/ProjectDescr'
import MoveTop from './Components/MoveTop'
import Nav from './Components/Nav'
import Contacts from './Pages/Contacts'
// import CostumCursor from './Components/CostumCursor'


function App() {
  return (
    <div className='App'>
      
      {/* Cursor */}
      {/* <CostumCursor /> */}
<Nav />
      {/* Pages */}
      <MoveTop />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects/:Id' element={<ProjectDescr />} />
      <Route path='/contacts' element={<Contacts />} />
    </Routes>
    </div>
  )
}

export default App
