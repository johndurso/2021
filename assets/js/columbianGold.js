document.getElementById("back").innerHTML = `<a class="backToAllPosts" href="../blog.html">< Back to all posts</a>`;

var navMenu = document.getElementById("navigation");

navMenu.innerHTML = `
<ul class="navigationMenu" aria-label="main navigation">
    <li class="primary"><a href="#blog"><span tabindex="1">blog</span></a></li>
    <li class="primary"><a href="#services"><span tabindex="2">services</span></a></li>
    <li class="primary"><a href="#contact"><span tabindex="3">contact</span></a></li>
    <li class="secondary"><a href="index.html"><span tabindex="0">back home</span></a></li>
    <li class="tertiary"><a href="../index.html"><span tabindex="0">back home</span></a></li>
    <li>
        <button class="js-theme-btn theme-button" onclick="setTheme()" onkeyup="setTheme()" tabindex="4">
            <span class="moon">
                <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 247.2 377.6"><defs><style>.cls-1{fill:#ffd517;opacity:0.4;}.cls-2{fill:#e5e5e5;}.cls-3{fill:#210b20;}</style></defs><path class="cls-1" d="M317.11,314.4c-22.4,22.4-19.6,67.6-19.6,67.6H183.91s2.4-45.2-19.6-67.6c-24.4-21.6-40-52.8-40-87.6a116,116,0,0,1,232,0,117.55,117.55,0,0,1-39.2,87.6Z" transform="translate(-116.71 -103.2)"/><path class="cls-2" d="M300.71,417.6a10.76,10.76,0,0,1-10.8,10.8h-98.8a10.76,10.76,0,0,1-10.8-10.8h0a10.76,10.76,0,0,1,10.8-10.8h98.4a11.1,11.1,0,0,1,11.2,10.8Z" transform="translate(-116.71 -103.2)"/><path class="cls-2" d="M285.91,462.4a10.76,10.76,0,0,1-10.8,10.8h-69.2a10.76,10.76,0,0,1-10.8-10.8h0a10.76,10.76,0,0,1,10.8-10.8h69.2a10.76,10.76,0,0,1,10.8,10.8Z" transform="translate(-116.71 -103.2)"/><path class="cls-3" d="M323.11,318.4a123.71,123.71,0,0,0,40.8-91.6c0-68-55.6-123.6-123.6-123.6s-123.6,55.6-123.6,123.6a124.06,124.06,0,0,0,42,92.8c19.6,19.6,17.6,61.2,17.6,61.6a9.56,9.56,0,0,0,2,5.6,7.9,7.9,0,0,0,5.6,2.4h113.2a7.9,7.9,0,0,0,5.6-2.4,7.49,7.49,0,0,0,2-5.6c0-.4-2-42,17.6-61.6C322.71,319.2,323.11,318.8,323.11,318.4Zm-11.2-10a4,4,0,0,0-1.6,2c-17.6,18.8-20.4,49.6-20.8,64h-98c-.4-14.8-3.6-46.8-22.4-65.6a108.36,108.36,0,1,1,179.6-81.6A107.56,107.56,0,0,1,311.91,308.4Z" transform="translate(-116.71 -103.2)"/><path class="cls-3" d="M240.31,135.2a7.6,7.6,0,1,0,0,15.2,81.26,81.26,0,0,1,81.2,81.2,7.6,7.6,0,1,0,15.2,0A96.45,96.45,0,0,0,240.31,135.2Z" transform="translate(-116.71 -103.2)"/><path class="cls-3" d="M308.31,417.6a18.35,18.35,0,0,0-18.4-18.4h-98.8a18.4,18.4,0,0,0,0,36.8h98.4A18.44,18.44,0,0,0,308.31,417.6Zm-18.8,3.2h-98.4a3.2,3.2,0,0,1,0-6.4h98.4a3.15,3.15,0,0,1,3.2,3.2C293.11,419.6,291.51,420.8,289.51,420.8Z" transform="translate(-116.71 -103.2)"/><path class="cls-3" d="M275.11,444h-69.2a18.4,18.4,0,0,0,0,36.8h69.2a18.35,18.35,0,0,0,18.4-18.4A18.61,18.61,0,0,0,275.11,444Zm0,21.6h-69.2a3.2,3.2,0,1,1,0-6.4h69.2a3.15,3.15,0,0,1,3.2,3.2A2.94,2.94,0,0,1,275.11,465.6Z" transform="translate(-116.71 -103.2)"/></svg>
            </span>
            <span class="sun">
                <svg width="35" alt="Light mode icon" id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400.77 480.8"><defs><style>.cls-1{fill:#ffd517;}.cls-2{fill:#e5e5e5;}.cls-3{fill:#210b20;}</style></defs><path class="cls-1" d="M317.11,314.4c-22.4,22.4-19.6,67.6-19.6,67.6H183.91s2.4-45.2-19.6-67.6c-24.4-21.6-40-52.8-40-87.6a116,116,0,0,1,232,0,117.55,117.55,0,0,1-39.2,87.6Z" transform="translate(-40.02)"/><path class="cls-2" d="M300.71,417.6a10.76,10.76,0,0,1-10.8,10.8h-98.8a10.76,10.76,0,0,1-10.8-10.8h0a10.76,10.76,0,0,1,10.8-10.8h98.4a11.1,11.1,0,0,1,11.2,10.8Z" transform="translate(-40.02)"/><path class="cls-2" d="M285.91,462.4a10.76,10.76,0,0,1-10.8,10.8h-69.2a10.76,10.76,0,0,1-10.8-10.8h0a10.76,10.76,0,0,1,10.8-10.8h69.2a10.76,10.76,0,0,1,10.8,10.8Z" transform="translate(-40.02)"/><path class="cls-3" d="M323.11,318.4a123.71,123.71,0,0,0,40.8-91.6c0-68-55.6-123.6-123.6-123.6s-123.6,55.6-123.6,123.6a124.06,124.06,0,0,0,42,92.8c19.6,19.6,17.6,61.2,17.6,61.6a9.56,9.56,0,0,0,2,5.6,7.9,7.9,0,0,0,5.6,2.4h113.2a7.9,7.9,0,0,0,5.6-2.4,7.49,7.49,0,0,0,2-5.6c0-.4-2-42,17.6-61.6C322.71,319.2,323.11,318.8,323.11,318.4Zm-11.2-10a4,4,0,0,0-1.6,2c-17.6,18.8-20.4,49.6-20.8,64h-98c-.4-14.8-3.6-46.8-22.4-65.6a108.36,108.36,0,1,1,179.6-81.6A107.56,107.56,0,0,1,311.91,308.4Z" transform="translate(-40.02)"/><path class="cls-3" d="M240.31,135.2a7.6,7.6,0,1,0,0,15.2,81.26,81.26,0,0,1,81.2,81.2,7.6,7.6,0,1,0,15.2,0A96.45,96.45,0,0,0,240.31,135.2Z" transform="translate(-40.02)"/><path class="cls-3" d="M308.31,417.6a18.35,18.35,0,0,0-18.4-18.4h-98.8a18.4,18.4,0,0,0,0,36.8h98.4A18.44,18.44,0,0,0,308.31,417.6Zm-18.8,3.2h-98.4a3.2,3.2,0,0,1,0-6.4h98.4a3.15,3.15,0,0,1,3.2,3.2C293.11,419.6,291.51,420.8,289.51,420.8Z" transform="translate(-40.02)"/><path class="cls-3" d="M275.11,444h-69.2a18.4,18.4,0,0,0,0,36.8h69.2a18.35,18.35,0,0,0,18.4-18.4A18.61,18.61,0,0,0,275.11,444Zm0,21.6h-69.2a3.2,3.2,0,1,1,0-6.4h69.2a3.15,3.15,0,0,1,3.2,3.2A2.94,2.94,0,0,1,275.11,465.6Z" transform="translate(-40.02)"/><path class="cls-3" d="M247.91,58.8V7.6a7.6,7.6,0,0,0-15.2,0V59.2a7.59,7.59,0,0,0,7.6,7.6A7.94,7.94,0,0,0,247.91,58.8Z" transform="translate(-40.02)"/><path class="cls-3" d="M366.31,38a7.6,7.6,0,0,0-10.4,2l-28.4,42.8a7.6,7.6,0,0,0,2,10.4,7.72,7.72,0,0,0,4,1.2,8.35,8.35,0,0,0,6.4-3.2l28.4-42.8C370.71,45.2,369.51,40.4,366.31,38Z" transform="translate(-40.02)"/><path class="cls-3" d="M149.91,92.8a7.63,7.63,0,0,0,6.4-11.6L128.71,38a7.55,7.55,0,1,0-12.8,8l27.6,43.2A7.69,7.69,0,0,0,149.91,92.8Z" transform="translate(-40.02)"/><path class="cls-3" d="M43.91,128.8l45.2,24.4a5.94,5.94,0,0,0,3.6.8,8.25,8.25,0,0,0,6.8-4,7.52,7.52,0,0,0-3.2-10.4l-45.2-24.4a7.52,7.52,0,0,0-10.4,3.2C39.11,122.4,40.31,126.8,43.91,128.8Z" transform="translate(-40.02)"/><path class="cls-3" d="M387.91,154.4a11.68,11.68,0,0,0,3.6-.8l45.2-24.4a7.69,7.69,0,1,0-7.2-13.6L384.31,140a7.63,7.63,0,0,0,3.6,14.4Z" transform="translate(-40.02)"/></svg>
            </span>
        </button>
    </li>
</ul>
<div class="john" id="john" role="button" aria-pressed="false" aria-label="press to open social media" onfocus="openMenu()" onclick="toggleMenu()" tabindex="5">
    <svg width="50" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.9 56.68"><defs><style>.cls-1{fill:#ffb76f;}.cls-1,.cls-2,.cls-3,.cls-4{stroke:#000;stroke-miterlimit:10;}.cls-1,.cls-2,.cls-3{stroke-width:2px;}.cls-2,.cls-4{fill:none;}.cls-3{fill:#9465c2;}</style></defs><g id="Layer_1-2" data-name="Layer 1"><circle class="cls-1" cx="27.45" cy="27.45" r="26.45"/></g><g id="Layer_2" data-name="Layer 2"><line class="cls-2" x1="27.45" y1="0.99" x2="27.45" y2="53.9"/><path class="cls-2" d="M27.68,1.36A30.93,30.93,0,0,0,12.5,29.05c.65,16.27,14.19,24.64,15.18,25.22" transform="translate(-0.23 -0.37)"/><path class="cls-2" d="M27.68,1.36A30.93,30.93,0,0,1,42.86,29.05c-.65,16.27-14.19,24.64-15.18,25.22" transform="translate(-0.23 -0.37)"/></g><g id="Layer_3" data-name="Layer 3"><line class="cls-2" x1="1" y1="27.45" x2="53.91" y2="27.45"/><line class="cls-2" x1="4.95" y1="13.54" x2="49.96" y2="13.54"/><line class="cls-2" x1="4.95" y1="40.59" x2="49.96" y2="40.59"/></g><g id="Layer_4" data-name="Layer 4"><path class="cls-3" d="M50.05,53.57l-1.95,2a1.82,1.82,0,0,1-2.57,0L34.79,44.79a1.82,1.82,0,0,1,0-2.57l2-1.95a1.82,1.82,0,0,1,2.57,0L50.05,51A1.8,1.8,0,0,1,50.05,53.57Z" transform="translate(-0.23 -0.37)"/><circle class="cls-3" cx="32.92" cy="37.27" r="12.53"/><circle class="cls-1" cx="32.92" cy="37.27" r="6.63"/></g><g id="Layer_5" data-name="Layer 5"><circle cx="35.05" cy="36.04" r="0.96"/><circle cx="30.78" cy="36.04" r="0.96"/><path class="cls-4" d="M31,38.58a2.15,2.15,0,0,0,4.28,0" transform="translate(-0.23 -0.37)"/></g></svg>
</div>
<ul class="socialMenu" id="socialMenu" aria-label="social media navigation">
    <li>
        <a target="_blank" href="https://www.linkedin.com/in/johnkyrondurso/" title="Visit John Durso's LinkedIn profile">
            <span tabindex="5">
                <svg id="Bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M511.87,512v0H512V324.2c0-91.86-19.78-162.62-127.17-162.62-51.62,0-86.27,28.33-100.41,55.19h-1.5V170.15H181.1V512h106V342.72c0-44.57,8.44-87.66,63.63-87.66,54.38,0,55.19,50.86,55.19,90.52V512Z"/><path d="M8.45,170.18H114.6V512H8.45Z"/><path d="M61.48,0A61.5,61.5,0,0,0,0,61.48c0,33.94,27.54,62.06,61.48,62.06S123,95.42,123,61.48A61.54,61.54,0,0,0,61.48,0Z"/></svg>
                LinkedIn
            </span>
        </a>
    </li>
    <li>
        <a target="_blank" href="https://github.com/johndurso" title="Visit John Durso's GitHub profile">
            <span tabindex="6">
                <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 382.72 478.61"><path d="M427.5,200.7a272.09,272.09,0,0,0,3.16-37.38c-.1-59.25-28.46-80.21-33.92-90,8-44.89-1.33-65.31-5.69-72.3C375-4.72,335.14,15.7,313.37,30.08c-35.49-10.39-110.49-9.37-138.62,2.69C122.86-4.39,95.41,1.28,95.41,1.28S77.66,33.1,90.72,79.65c-17.08,21.76-29.81,37.14-29.81,77.95a241,241,0,0,0,1.64,27.89c14.71,77.32,76,110.67,136.15,116.43-9,6.88-19.93,19.9-21.43,35-11.38,7.36-34.27,9.79-52.07,4.19-24.94-7.88-34.48-57.26-71.83-50.22-8.08,1.51-6.48,6.84.52,11.39,11.38,7.38,22.1,16.55,30.36,36.18,6.34,15.07,19.68,42,61.87,42a189.12,189.12,0,0,0,28.48-2s.32,38.41.32,53.39c0,17.24-23.27,22.08-23.27,30.35,0,3.29,7.7,3.6,13.89,3.6,12.23,0,37.67-10.19,37.67-28.11,0-14.23.23-62.08.23-70.45,0-18.31,9.81-24.14,9.81-24.14s1.2,97.73-2.36,110.83c-4.18,15.41-11.74,13.22-11.74,20.07,0,10.24,30.59,2.51,40.73-19.89,7.85-17.5,4.34-113.33,4.34-113.33l8.18-.18s.09,43.89-.19,63.94c-.29,20.77-2.44,47,9.9,59.42,8.1,8.15,32.9,22.45,32.9,9.38,0-7.57-17.37-13.83-17.37-34.35V344.45c10.55,0,12.73,31.07,12.73,31.07l3.81,57.73s-2.53,21.06,22.75,29.85c8.93,3.13,28,4,28.92-1.27s-23-13-23.22-29.34c-.12-9.93.44-15.74.44-58.93s-5.79-59.14-26-71.87C355.67,295.68,416.54,269.51,427.5,200.7Z" transform="translate(-47.95 0)"/></svg>
                GitHub
            </span>
        </a>
    </li>
    <li>
        <a target="_blank" href="https://codepen.io/johndursodev" title="Visit John Durso's CodePen profile">
            <span tabindex="7">
                <svg id="regular" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.72 512"><path d="M512,162.09c-.94-5.63-1.71-10-7.68-13.67C260.07,3.54,263.53-7.25,247.68,2.33,62.57,117.4,11.05,143.06,3.65,152-3.07,158.91,0,169.47,0,329.05-.45,347.2,165.18,445.57,245.74,508.33c7.1,5.06,16,4.25,21.4-.62C506.58,338,512.41,344.81,512,329.05c0,0-.26-169.11,0-167ZM480,300.57l-82.69-50.33L480,192.7ZM367.42,232,272,174V44.48L466.69,163ZM256,309.55,173.31,252,256,201.69,338.69,252ZM240,44.46V174c-37.1,23-68.46,42.24-94.95,58.32L45.31,163Zm-124.95,206c-40,24-66.09,39.31-83,49.49V192.7Zm28.37,19.71L240,337.39v128L45.31,329.92ZM272,465.39v-128l96.58-67.18,98.11,59.71Z" transform="translate(0.7 0.24)"/></svg>
                CodePen
            </span>
        </a>
    </li>
</ul>
`;

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

if (window.location.pathname.includes("/index.html")) {
  console.log('home page');
} else if (window.location.pathname.includes('/blog.html')) {
  console.log('blog page');
} else {
  console.log('blog post page');
}