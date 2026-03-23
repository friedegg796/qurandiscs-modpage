function insertNavigation() {
    return `
   <div class="navbar">
   <div class="dropdown">
       <a href="index.html" class="logo"> Qurandiscs </a>
        <div class="logocontent">
       <a href="https://friedegg796.github.io/AMuslimsnotes/">A Muslim's Notes</a>
      <a href="#">Friedegg796 (WIP)</a>
      <a href="#">A Muslim's Blog (WIP)</a>
      </div>
     </div>


      <a class="topbtn" href="./../../qurandiscs-modpage/index.html"> Home </a>

      <a class="topbtn" href="./../../qurandiscs-modpage/downloads.html"> Downloads </a>

      <a class="topbtn" href="./../../qurandiscs-modpage/faq.html"> FAQ </a>

      <a class="topbtn" href="#"> Contact </a>

      <a class="topbtn" href="#"> Discord Server </a>


      </div>
  `;

} // Remember, we use backticks--` `-- to allow for the usage of quotes.

// Wait for the HTML to be loaded so it doesn't go boom
document.addEventListener("DOMContentLoaded", function() {
    var navElement = document.getElementById("nav");

    // Only run if the 'nav' ID exists on this specific page
    if (navElement) {
        navElement.innerHTML = insertNavigation();
    }
    // If you wanna use it, make a nav element with the id="nav"
});
