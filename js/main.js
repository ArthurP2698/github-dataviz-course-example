$('document').ready(function() { 
  $('#box').hide().delay(500).fadeIn(1500);
  $('box').css({
    'background-color':'purple',
    'width': '300px'
    });
  $('#box').on('click', function() {
    $(this).animate({
    'opacity':'0.5',
    'margin-left': '+=100'
    })
  });
  function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var w = window.innerWidth - 100;
    console.log(hours + ":" + minutes + ":" + seconds);
    $('#hours').css('left', hours * (w/23));
    $('#minutes').css('left', minutes * (w/60));
    $('#seconds').css('left', seconds * (w/60));
  }

  displayTime();
  setInterval(displayTime, 1000);
});