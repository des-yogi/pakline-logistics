Mmenu.configs.offCanvas.page.selector = "#page";

document.addEventListener(
  "DOMContentLoaded", () => {
    const menu = new Mmenu( "#mm-menu", {
          // options
          "extensions": [
            "theme-dark",
            "popup",
            "multiline",
            "border-full" //"border-none" || "border-full"
          ],
          "navbar": {
            "title": '<a href="tel:+0800303006">0 (800) 303 006</a>'
          },
          "navbars": [
            {
              "position": "top",
               "content": [
                 '<div class="mm-close"><img src="img/pakline-logistics-mm.svg" alt="Pakline Logistics" width="114" height="41"><span class="mm-close__btn" role="button" aria-label="Close"></span></div>'
               ]
            }
          ]
      }, {
          // configuration
          offCanvas: {
            page: {
              selector: "#page"
            },
            menu: {
              insertMethod: "append"
            }
          },
          classNames: {
            selected: "active"
          },
          language: "ru" // сделать возможность выбора ?!
        }
    );

    //Открытие или закрытие меню кастомной кнопкой
    const api = menu.API;
    const closeMenuBtn = document.querySelector( ".mm-close__btn" );
    const openMenuBtn = document.querySelector( "#burger" );

    closeMenuBtn.addEventListener( "click", ( e ) => {
        e.preventDefault();
        api.close();
      }
    );

    window.addEventListener("resize", resizeThrottler, false);
    var resizeTimeout;

    const burgerHandler = function (e) {
      e.preventDefault();
      api.open();
    };

    function checkWidth() {
      if (window.matchMedia('(min-width: 768px)').matches){
        // do functionality on screens bigger than 768px
        openMenuBtn.removeEventListener( "click", burgerHandler );
      } else {
          openMenuBtn.addEventListener( "click", burgerHandler );
      }
    }

    checkWidth();

    function resizeThrottler() {
      // ignore resize events as long as an actualResizeHandler execution is in the queue
      if ( !resizeTimeout ) {
        resizeTimeout = setTimeout(function() {
          resizeTimeout = null;
          checkWidth();
         // The actualResizeHandler will execute at a rate of 15fps
         }, 100);
      }
    }//
  }
);
