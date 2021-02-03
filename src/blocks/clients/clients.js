document.addEventListener('DOMContentLoaded', function () {
  //console.log(isMobile.phone);
  const moreBtn = document.getElementById('more-clients');
  const clientsContainer = document.getElementById('clients-container');

  const hideBtn = function () {
    clientsContainer.classList.add('clients__list--show');
    $('.clients__btn-wrapper').hide();
  };

  const btnClickHandler = function (e) {
    // анимация высоты списка клиентов
    $('.clients__list').animate({
        height: $('.clients__list').get(0).scrollHeight
    }, 300, function () {
        $(this).height('auto');
    });
    moreBtn.removeEventListener('click', btnClickHandler);
    hideBtn();
  };

  if (moreBtn) {
    moreBtn.addEventListener('click', btnClickHandler);
  }
});

