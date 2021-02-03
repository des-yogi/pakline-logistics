// https://learn.javascript.ru/modifying-document
document.addEventListener('DOMContentLoaded', function () {
  const tabElems = document.querySelectorAll('.tab-pane');
  const mapContainer = document.getElementById('map-container');
  // Array.prototype.forEach.call(tabElems, function (item) {
  //   console.log(item);
  // });
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (event) {
    //event.target // newly activated tab
    //event.relatedTarget // previous active tab
    // Array.prototype.forEach.call(tabElems, function (item) {
    //   if (item.classList.contains('active')) {
    //     item.style.color = 'red';
    //     console.log(item);
    //   }
    // });
    //let newTitle = document.createElement('h3');
    //newTitle.innerText = 'Это новый заголовок!';
    //mapContainer.prepend(newTitle);
  });
});

