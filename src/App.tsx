import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import './Styles/Defaults/App.css'
import ProjectDescr from './Pages/ProjectDescr'
import MoveTop from './Components/MoveTop'
// import CostumCursor from './Components/CostumCursor'


function App() {
  return (
    <div className='App'>
      
      {/* Cursor */}
      {/* <CostumCursor /> */}

      {/* Pages */}
      <MoveTop />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects/:Id' element={<ProjectDescr />} />
    </Routes>
    </div>
  )
}

export default App
