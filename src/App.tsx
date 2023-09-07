import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import './Styles/Defaults/App.css'
// import CostumCursor from './Components/CostumCursor'


function App() {
  return (
    <div className='App'>
      
      {/* Cursor */}
      {/* <CostumCursor /> */}

      {/* Pages */}
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    </div>
  )
}

export default App
