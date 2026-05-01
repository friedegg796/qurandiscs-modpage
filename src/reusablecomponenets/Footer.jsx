import './components.css'

function Footer() {

    return(
        <>
        <footer>
             <hr/>
        <a class="icon" href="https://www.linkedin.com/in/hasnain-a-6481a0342/">
            <img class="icon" src="/./AMuslimsnotes/develop/images/linkedin.png" alt="Hasnain Alahi, LinkedIn"/>
        </a>


        <a class="icon" href="./../../AMuslimsnotes/MISC/bio.html">
            <img class="icon" src="/./AMuslimsnotes/develop/images/gmail.png" alt="awanderingmuslim2billion"/>
        </a>



            <img class="icon" src="/./AMuslimsnotes/develop/images/gmail.png" alt="hasnainalahiwork@gmail.com"/>



        <a class="icon" href="https://mahfil.net/channel/hasnain-alahi">
            <img class="icon" src="/./AMuslimsnotes/develop/images/gmail.png" alt="AwanderingMuslim"/>
        </a>
        <a class="icon" href="https://github.com/friedegg796">
            <img class="icon" src="/./AMuslimsnotes/develop/images/github.png" alt=""/>
        </a>
        <a class="icon" href="">
            <img class="icon" src="/./AMuslimsnotes/develop/images/youtube.png" alt="friedegg796"/>
        </a>


                  <h2>Get in touch</h2>
          <p>Keep it halal</p>
          <ul>
            <li>
              <a href="https://github.com/friedegg796" target="_blank">
                <img
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                  alt="friedegg796"
                >
                </img>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a class="icon" href="mailto:hasnainalahiwork@gmail.com">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Gmail
              </a>
            </li>
          </ul>
        </footer>

    </>
    )
}

export default Footer
