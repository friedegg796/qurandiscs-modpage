
import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom"
import Index from './pages/Index.jsx'
import Muslimcraftchanges from './pages/MuslimcraftChanges.jsx'

function App() {


  return (
    <>
    <HashRouter>
       <Routes>

       {/* <Route element={e}>*/}
        <Route path="/" element={<Index/>}/>
        <Route path="/MuslimcraftChanges" element={<Muslimcraftchanges/>}/>
    {/* </Route> */}
        </Routes>


    </HashRouter>
    </>
  )
}

export default App
