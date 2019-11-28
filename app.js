console.log("helloWorld");

var city = "New York";

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=9aa43f8529a545f9b4ecb4bd1eebb4ca", (data) => {
  console.log(data)

  var icon = "http://openweathermap.org/img/wn/"+ data.weather[0].icon + ".png";
  var temp = data.main.temp;
  var weather = data.weather[0].main;

  $('.city').append(city);
  $('.icon').attr('src', icon);
  $('.temp').append(Math.round(temp));
  $('.weather').append(weather);


});