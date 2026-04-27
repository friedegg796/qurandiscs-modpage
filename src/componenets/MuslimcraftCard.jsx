import './components.css'
import { Link } from 'react-router-dom'
function MuslimcraftCard(){

   return(
  <div className="card">
    <Link to="/MuslimcraftDownloads">
        <img></img>
        <h2> Muslimcraft (Resourcepack) </h2>
        <p> The Muslimcraft resourcepack makes Minecraft more clearly halal, changing things that might be seen as problematic into clearly halal things (Such as replacing pork with truffles) </p>
    </Link>
   </div>
)

}
export default MuslimcraftCard
