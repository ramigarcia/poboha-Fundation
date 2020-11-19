let navUbiPrincipal = window.pageYOffset;

window.onscroll = function(){
  let despActual = window.pageYOffset;
  if(navUbiPrincipal >= despActual){
    document.getElementById('navBar').style.top = '0';
  }else{
    document.getElementById('navBar').style.top = '-100px';
    document.getElementById('navBar').style.transition = 'all .4s ease-in-out';
  }
  navUbiPrincipal = despActual;
}