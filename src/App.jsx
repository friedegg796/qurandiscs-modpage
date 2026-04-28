
import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom"
import Index from './pages/Index.jsx'
import MuslimcraftChanges from './pages/MuslimcraftChanges.jsx'
import MuslimcraftDownloads from './pages/MuslimcraftDownloads.jsx'
import Footer from './components/Footer.jsx'

function App() {


  return (
    <>
    <HashRouter>
       <Routes>

       {/* <Route element={e}>*/}
        <Route path="/" element={<Index/>}/>
        <Route path="/MuslimcraftDownloads" element={<MuslimcraftDownloads/>}/>
        <Route path="/MuslimcraftChanges" element={<MuslimcraftChanges/>}/>
    {/* </Route> */}
        </Routes>


    </HashRouter>
    <Footer />
    </>
  )
}

export default App
