import './App.css'
import MuslimcraftCard from '/workspaces/214691060/muslimdiscs-modpage/src/componenets/MuslimcraftCard.jsx'
import { Link } from 'react-router-dom'

function Index(){

    return( //html-ish text goes here

        <>
          <div>
            <header>
          <h1>Muslimdiscs</h1>
          <p> Who said we couldn't use Minecraft for good deeds?</p>
          <hr/>
          </header>

                <h2> About this website </h2>
          <p>
            This is the offical website for the Muslimcraft, Muslimdiscs, and all of my other minecraft creations. It's just not done yet...

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
               {/* Other resource packs go here! */}


          </li>
          </ul>

        </div>
        <h2> who made this </h2>
        <p> Hasnain Alahi (AWanderingMuslim)</p>


        </>
    )
}


export default Index
