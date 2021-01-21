document.documentElement.className = document.documentElement.className.replace('no-js', 'js');
function cth(c) {document.documentElement.classList.add(c)}
'ontouchstart' in window?cth('touch'):cth('no-touch');
if(typeof InstallTrigger!=='undefined')cth('firefox');
if(/constructor/i.test(window.HTMLElement)||(function(p){return p.toString()==="[object SafariRemoteNotification]"})(!window['safari']||(typeof safari!=='undefined'&&safari.pushNotification)))cth('safari');
if(/*@cc_on!@*/false||!!document.documentMode)cth('ie');
if(!(/*@cc_on!@*/false||!!document.documentMode)&&!!window.StyleMedia)cth('edge');
if(!!window.chrome&&(!!window.chrome.webstore||!!window.chrome.runtime))cth('chrome');
if(~navigator.appVersion.indexOf("Win"))cth('windows');
if(~navigator.appVersion.indexOf("Mac"))cth('osx');
if(~navigator.appVersion.indexOf("Linux"))cth('linux');

// Если на проекте jQuery
// $( document ).ready(function() {
//   // code
// });

// Изоляция без jQuery
// (function(){
//   // code
// }());

// $(document).ready(function(){
//   if(window.matchMedia('(min-width: 1366px)').matches){
//   // do functionality on screens bigger than 1366px
//     $("#sticker").sticky({
//       topSpacing: 100
//     });
//   }
//   return false;
// });


// (function(){

//   window.addEventListener('scroll', stickyHandler);

//   var navbar = document.getElementById("page-header");
//   var sticky = navbar.offsetTop;
//   var offset = 75;

//   function stickyHandler() {
//     if (window.pageYOffset > (sticky + 0.1) ) {
//       navbar.classList.add("sticky");

//       if (window.pageYOffset >= (sticky + offset) ) {
//         navbar.classList.add("sticky--new-bg");
//       }
//     }
//     else {
//       navbar.classList.remove("sticky");
//       navbar.classList.remove("sticky--new-bg");
//     }
//   }
// }());

(function(){
  var bLazy = new Blazy({
    selector: '.b-lazy'
  });
}());

(function(){
  var phoneElems = document.getElementsByClassName('phone-mask');
  Array.prototype.forEach.call(phoneElems, function (item) {
    var phoneMask = IMask(
      item, {
        mask: '+{38\\0} (00) 000 00 00',
        lazy: false // make placeholder always visible
    });
  });
}());

(function () {
  const submitBtn = document.querySelector('.btn-submit');
  const agreementCheckbox = document.querySelector('#agreement');
  const agreementHandler = function (e) {
    if (!this.checked) {
      submitBtn.disabled = true;
    } else {
      submitBtn.disabled = false;
    }
  };
  if (agreementCheckbox) {
    agreementCheckbox.addEventListener('change', agreementHandler);
  }
})();
