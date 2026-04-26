import './App.css'
import MuslimcraftCard from './components/MuslimcraftCard.jsx'
import { Link } from 'react-router-dom'

function Index(){

    return( //html-ish text goes here~!!

        <>
          <div>
            <header>
          <h1>Qurandiscs</h1>
          <p> Who said we couldn't use Minecraft for good deeds?</p>
          <hr/>
          </header>

                <h2> About this website </h2>
          <p>
            This is the offical website for the Muslimcraft, Qurandiscs, and all of my other resourcepacks/mods/minecraft things. It's just not done yet...

          </p>
          <h2> Mods and Datapacks</h2>
          <ul>
          <li>
              <h3> WIP </h3>


          </li>
          </ul>
          <h2> Resourcepacks </h2>
          <ul>
          <li>
              <MuslimcraftCard />


          </li>
          </ul>

          <h2> Skins </h2>
          <p>
            there's supposed to be a link to <Link to="/MuslimcraftChanges"> the changes. </Link>
          </p>
        </div>
        <h2> who made this </h2>
        <p> Hasnain Alahi (AWanderingMuslim)</p>


        </>
    )
}


export default Index
