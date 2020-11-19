const body = document.querySelector('body');
const hamburger = document.getElementById('hamb');
const X = document.getElementById('X');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlayBody');

hamburger.addEventListener('click', menuShow);

X.addEventListener('click', ()=>{
  body.classList.remove("no-scroll");
  menu.classList.remove("show-mobile__Mobile");
  X.classList.add('x');
  hamburger.classList.remove('overlay');
  overlay.classList.remove("activeOverlay");
});

function menuShow(){
  body.classList.add("no-scroll");
  menu.classList.add("show-mobile__Mobile");
  hamburger.classList.add("overlay");
  X.classList.remove("x");
  overlay.classList.add("activeOverlay");
}

window.addEventListener('click', e=>{
  if(menu.classList.contains("show-mobile__Mobile")
      && e.target != menu && e.target != hamburger  ){
        menu.classList.remove("show-mobile__Mobile");
        body.classList.remove("no-scroll");
        menu.classList.remove("show-mobile__Mobile");
        hamburger.classList.remove("overlay");
        X.classList.toggle("x");
        overlay.classList.remove("activeOverlay");
  }
})