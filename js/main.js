
$(document).ready(function() {
  // Open Weather MAP API Key: bb422d54a8d3ab6f85b816dfb90f58b6
  // https://api.openweathermap.org/data/2.5/weather?q=Sunnyside,NY,USA&units=imperial&appid=bb422d54a8d3ab6f85b816dfb90f58b6
  
function getWeather() {
  var key = "bb422d54a8d3ab6f85b816dfb90f58b6";

  // Show a message while weather loads
  $('#weather').text("Loading weather...");

  $.getJSON(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      zip: "11104,US",
      units: "imperial",
      appid: key
    }
  )
  .done(function(json) {
    console.log("Weather working!", json);

    $('#weather').html(
      "<h3>Sunnyside, NY</h3>" +
      "<p>Feels Like: " +
      json.main.feels_like + "°F</p>" +
      "<p>Description: " +
      json.weather[0].description + "</p>"
    );
  })
  .fail(function(xhr) {
    console.error("Weather API Error:", xhr.status);
    console.error(xhr.responseText);

    $('#weather').text(
      "Weather unavailable. Error: " + xhr.status
    );
  });
}

  getWeather();

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
