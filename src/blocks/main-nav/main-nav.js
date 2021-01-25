document.addEventListener("DOMContentLoaded", () => {
  // Добавление/удаление модификаторов при клике на переключение видимости
  let toggler = document.getElementById('burger');
  let mainMenu = document.getElementById('main-nav');
  let body = document.querySelector('body');
  //var blocker = document.getElementsByClassName('mm-wrapper__blocker');

  window.addEventListener("resize", resizeThrottler, false);
  var resizeTimeout;

  if (!toggler) {
    return;
    //toggler.addEventListener('click', desktopMenuToggle);
  }

  checkWidth();

  function desktopMenuToggle(e) {
    e.preventDefault();
    toggler.classList.toggle('burger--close');
    mainMenu.classList.toggle('main-nav--show');
    body.classList.toggle('fixed');
     // модификатор иконки (должен быть .burger)
  }

  function checkWidth() {
    if (window.matchMedia('(min-width: 768px)').matches){
    // do functionality on screens bigger than 768px
      toggler.addEventListener('click', desktopMenuToggle);
    } else {
        toggler.removeEventListener('click', desktopMenuToggle);
    }
  }

  function resizeThrottler() {
    // ignore resize events as long as an actualResizeHandler execution is in the queue
    if ( !resizeTimeout ) {
      resizeTimeout = setTimeout(function() {
        resizeTimeout = null;
        checkWidth();
       // The actualResizeHandler will execute at a rate of 15fps
       }, 100);
    }
  }

});




