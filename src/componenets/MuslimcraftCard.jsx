import './components.css'
import { Link } from 'react-router-dom'
function MuslimcraftCard(){

   return(
  <div className="card">
    <Link to="/MuslimcraftDownloads">
        <img src="" alt="Muslimcraft Resourcepack img"></img>
        <h2> Muslimcraft (Resourcepack) </h2>
        <p> Change your Minecraft experience to be more clearly halal! </p>
    </Link>
   </div>
)

}
export default MuslimcraftCard
