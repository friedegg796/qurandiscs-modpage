import './reusablecomponents.css'
import { Link } from 'react-router-dom'

function Navbar() {

    return(
        <>
        <nav>
            <Link to="/">
            <div class="title"> Muslimdiscs </div>
            </Link>
            <ul>
               {/* <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li> */}
            </ul>
        </nav>


        </>


        )

        }

export default Navbar
