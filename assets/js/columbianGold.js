//open and close social menu

var john = document.getElementById("john");
var menu = document.getElementById("socialMenu");

function openMenu() {
    menu.classList.add("open");	
    john.classList.add("iconKeyed");
}

function closeMenu() {
    menu.classList.remove("open");
    john.classList.remove("iconKeyed");
}

function toggleMenu(event) {
    menu.classList.toggle("open"); 
    john.classList.toggle("iconKeyed");
}

document.getElementById("back").innerHTML = `<a class="backToAllPosts" href="../blog.html">< Back to all posts</a>`;

document.getElementById("innerNav").innerHTML = `
<div class="innerNav" role="navigation">
  <ul class="navigationMenu" aria-label="main navigation">
    <li><a href="../index.html">back home</a></li>
    <li>&nbsp;</li>
    <li>&nbsp;</li>
    <li><button class="js-theme-btn theme-button" onclick="setTheme()" tabindex="4"> <span class="moon"> <img src="../assets/images/moon.svg" width="35" alt="Moon icon for dark mode"> </span> <span class="sun"> <img src="../assets/images/sun.svg" width="35" alt="Sun icon for light mode"> </span> </button></li>
  </ul>
  <div class="john" id="john" role="button" tabindex="5" aria-pressed="false" aria-label="press to open social media" onfocus="openMenu()" onblur="closeMenu()" onclick="openMenu()" tabindex="5"> <img src="../assets/images/globe.svg" alt="Icon of globe with magnifying glass" width="50"></div>
  <ul class="socialMenu" id="socialMenu" aria-label="social media navigation">
    <li> <a target="_blank" href="https://www.linkedin.com/in/johnkyrondurso/" title="Visit John Durso's LinkedIn profile" onfocus="openMenu()" onblur="closeMenu()" tabindex="6"> <img src="../assets/images/linkedin.svg" alt="LinkedIn logo" title="Visit John Durso's LinkedIn!" width="40"> <span>LinkedIn</span> </a></li>
    <li> <a target="_blank" href="https://github.com/johndurso" title="Visit John Durso's GitHub profile" onfocus="openMenu()" onblur="closeMenu()" tabindex="7"> <img src="../assets/images/github.svg" alt="GitHub logo" title="Visit John Durso's GitHub!" width="40"> <span>GitHub</span> </a></li>
    <li> <a target="_blank" href="https://codepen.io/johndursodev" title="Visit John Durso's CodePen profile" onfocus="openMenu()" onblur="closeMenu()" tabindex="8"> <img src="../assets/images/codepen.svg" alt="CodePen logo" title="Visit John Dursos' CodePen!" width="40"> <span>CodePen</span> </a></li>
  </ul>
</div>
`;


//smooth scroll
const links = document.querySelectorAll("nav ul.navigationMenu li a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
};