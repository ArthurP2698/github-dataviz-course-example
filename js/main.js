
$(document).ready(function() {

  // Purple box animation
  $('#box').hide().css({
    'background-color': 'purple',
    'width': '300px'
  }).delay(500).fadeIn(1500);

  // Click to move the box
  $('#box').on('click', function() {
    $(this).animate({
      'opacity': 0.5,
      'margin-left': '+=100'
    });
  });

  // Clock animation
  function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var w = window.innerWidth - 100;

    console.log(hours + ":" + minutes + ":" + seconds);

    $('#hours').css('left', hours * (w / 23));
    $('#minutes').css('left', minutes * (w / 60));
    $('#seconds').css('left', seconds * (w / 60));
  }

  displayTime();
  setInterval(displayTime, 1000);

});
