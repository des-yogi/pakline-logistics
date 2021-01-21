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
            "title": "<a href='tel:+0800303006'>0 (800) 303 006</a>"
          },
          "navbars": [
            {
              "position": "top"
              // "content": [
              //   "<span>QWERT</span>"
              // ]
            }
          ]
      }, {
          // configuration
          // offCanvas: {
          //   page: {
          //     selector: "#page"
          //   }
          // },
          classNames: {
            selected: "active"
          },
          language: "ru" // сделать возможность выбора ?!
        }
    );

    //Открытие или закрытие меню кастомной кнопкой
    const api = menu.API;
    const mobToggleBtn = document.querySelector( "#burger" );
    burger.addEventListener( "click", ( e ) => {
        e.preventDefault();
        api.open();
        api.close();
      }
    );
  }
);
