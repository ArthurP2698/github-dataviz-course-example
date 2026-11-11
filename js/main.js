$(document).ready(function() {
  // Open Weather MAP API Key: bb422d54a8d3ab6f85b816dfb90f58b6
  // https://api.openweathermap.org/data/2.5/weather?q=Sunnyside,NY,USA&units=imperial&appid=bb422d54a8d3ab6f85b816dfb90f58b6
  
  
  // =========================================
  // SECTION 4: OPENWEATHER API
  // =========================================

  function getWeather() {

    var key = "bb422d54a8d3ab6f85b816dfb90f58b6";

    var $refresh = $('#weather-refresh');

    // Show loading message
    $('#weather-message').text('Updating weather...');

    $refresh.prop('disabled', true)
            .text('Refreshing...');


    // Connect to OpenWeather API
    $.getJSON(
      'https://api.openweathermap.org/data/2.5/weather',
      {
        zip: '11104,US',
        units: 'imperial',
        appid: key
      }
    )

    // =========================================
    // API SUCCESS
    // =========================================

    .done(function(json) {

      console.log('Weather API working!', json);

      var conditions = json.weather[0];


      // Current temperature
      $('#weather-temp').text(
        Math.round(json.main.temp) + '°F'
      );


      // Weather description
      $('#weather-description').text(
        conditions.description
      );


      // Feels-like temperature
      $('#weather-feels-like').text(
        Math.round(json.main.feels_like) + '°F'
      );


      // Humidity
      $('#weather-humidity').text(
        Math.round(json.main.humidity) + '%'
      );


      // Wind speed
      $('#weather-wind').text(
        Math.round(json.wind.speed) + ' mph'
      );


      // =========================================
      // WEATHER ICON
      // =========================================

      var iconCode = conditions.icon;

      var $icon = $('#weather-icon');

      if (/^[0-9]{2}[dn]$/.test(iconCode)) {

        $icon.off('load error')

        .on('load', function() {

          $(this).prop('hidden', false);

          $('#weather-icon-placeholder').hide();

        })

        .on('error', function() {

          $(this).prop('hidden', true);

          $('#weather-icon-placeholder').show();

        });


        // Load the OpenWeather icon
        $icon.prop('hidden', true).attr(
          'src',
          'https://openweathermap.org/img/wn/' +
          iconCode + '@2x.png'
        );

      }


      // =========================================
      // LAST UPDATED TIME
      // =========================================

      var updatedTime = new Date().toLocaleTimeString(
        [],
        {
          hour: 'numeric',
          minute: '2-digit'
        }
      );

      $('#weather-message').text(
        'Updated at ' + updatedTime
      );

    })


    // =========================================
    // API ERROR HANDLING
    // =========================================

    .fail(function(xhr) {

      console.error(
        'OpenWeather request failed:',
        xhr.status,
        xhr.responseText
      );

      var detail = xhr.status
        ? ' (error ' + xhr.status + ')'
        : '';

      $('#weather-message').text(
        'Could not update weather' +
        detail +
        '. Try again.'
      );

      $('#weather-description').text(
        'Weather is temporarily unavailable'
      );

    })


    // =========================================
    // RESET REFRESH BUTTON
    // =========================================

    .always(function() {

      $refresh.prop('disabled', false)
              .text('↻ Refresh');

    });

  }


  // Activate refresh button
  $('#weather-refresh').on('click', getWeather);


  // Load weather automatically
  getWeather();



  // =========================================
  // SECTION 3: INTERACTIVE CLOCK
  // =========================================

  function displayTime() {

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();


    // Available space inside clock card
    var w = $('#hours').parent().width() - 100;

    w = Math.max(0, w);


    // Move the clock squares
    $('#hours').css('left', hours * (w / 23));

    $('#minutes').css('left', minutes * (w / 59));

    $('#seconds').css('left', seconds * (w / 59));


    console.log(
      hours + ':' + minutes + ':' + seconds
    );

  }


  // Start clock
  displayTime();

  // Update clock every second
  setInterval(displayTime, 1000);

});

