
$(document).ready(function() {
  // Open Weather MAP API Key: bb422d54a8d3ab6f85b816dfb90f58b6
  // https://api.openweathermap.org/data/2.5/weather?q=Sunnyside,NY,USA&units=imperial&appid=bb422d54a8d3ab6f85b816dfb90f58b6
  function getWeather() {
    var key = "bb422d54a8d3ab6f85b816dfb90f58b6";
    var location = "Sunnyside, NY, USA";
    var url = 
    "https://api.openweathermap.org/data/2.5/weather?q=" + 
    location + "&units=imperial&appid=" + 
    key;

    $.getJSON(url, function(json){
    console.log(json.main.feels_like);
    console.log(json.weather[0].main);

    $('body').append(
      "<h3>" + 
        location + 
        "</h3><p>Feels Like Temp: " + 
        json.main.feels_like + 
        "</p><p>Description: " + 
        json.weather[0].main + 
        "</p>"
    );
    })
  }
  getWeather();
}
function getWeather() {'
}
  // Clock animation
function displayTime() {
  var currentTime = new Date();

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  // Available space inside the clock card
  var w = $('#hours').parent().width() - 100;
  w = Math.max(0, w);

  // Move each square based on time
  $('#hours').css('left', hours * (w / 23));
  $('#minutes').css('left', minutes * (w / 59));
  $('#seconds').css('left', seconds * (w / 59));

  console.log(hours + ":" + minutes + ":" + seconds);
}

displayTime();
setInterval(displayTime, 1000);

});
