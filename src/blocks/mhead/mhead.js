document.addEventListener(
  "DOMContentLoaded", () => {

    window.addEventListener("resize", resizeThrottler, false);
    var resizeTimeout;
    var pinHeight = 80;

    const getPageRoute = function () {
      let pageIdx = document.getElementById('sticky-header').dataset.route;
      if (pageIdx === 'index') {
        return true;
      }
    };

    const getElemHeight = function () {
      let header = document.getElementById('sticky-header');
      let elemHeight = header.offsetHeight;
      return elemHeight;
    };

    const setPinHeight = function (e) {
      let windowHeight = document.documentElement.clientHeight;

      if ( getPageRoute() ) {
        pinHeight = windowHeight - getElemHeight();
        //console.log( windowHeight - getElemHeight() );
      } else {
          pinHeight = getElemHeight();
      }
      return pinHeight;
    };

    setPinHeight();

    const scrollHandler = function (e) {
      let header = document.getElementById('sticky-header');
      let pageOffset = window.pageYOffset;
      //console.log( pageOffset );
      if ( pageOffset < setPinHeight() ) {
        header.classList.remove('page-header--has-background');
      } else if ( pageOffset > setPinHeight() ) {
          header.classList.add('page-header--has-background');
      }
    };

    window.addEventListener('scroll', scrollHandler);

    new Mhead( "#sticky-header", {
        //hide: 200,
        unpin: pinHeight // кол-во пкс до скрытия хидера
    });


/*    function checkWidth() {
      if (window.matchMedia('(min-width: 768px)').matches){
      // do functionality on screens bigger than 768px
        //window.addEventListener('scroll', scrollHandler);
        //window.removeEventListener('scroll', scrollHandler);
        // $("#sticker").sticky({
        //   topSpacing: 100
        // });
        console.log(getElemHeight());
        console.log(getPageRoute());
      } else {
        //$("#sticker").unstick();
        //window.addEventListener('scroll', scrollHandler);
        console.log(getElemHeight());
        console.log(getPageRoute());
      }
    }*/

    function resizeThrottler() {
      // ignore resize events as long as an actualResizeHandler execution is in the queue
      if ( !resizeTimeout ) {
        resizeTimeout = setTimeout(function() {
          resizeTimeout = null;
          setPinHeight();
          //checkWidth();
         // The actualResizeHandler will execute at a rate of 15fps
         }, 100);
      }
    }
  }
);
