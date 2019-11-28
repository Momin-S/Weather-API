console.log("helloWorld");

var city = "Houston";
var unit = "imperial";

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=" + unit + "&appid=9aa43f8529a545f9b4ecb4bd1eebb4ca", (data) => {
  console.log(data)

  var icon = "http://openweathermap.org/img/wn/"+ data.weather[0].icon + ".png";
  var temp = data.main.temp;
  var weather = data.weather[0].main;

  $('.city').append(city);
  $('.icon').attr('src', icon);
  $('.temp').append(Math.round(temp));
  $('.weather').append(weather);
});

function changeUnits() {
  console.log("Change units");

  if (unit == 'imperial') {
    unit = 'metric';
    document.getElementsByClassName("temp_unit")[0].innerHTML = "° C";
  } else {
    unit = 'imperial';
    document.getElementsByClassName("temp_unit")[0].innerHTML = "° F";
  }

  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=" + unit + "&appid=9aa43f8529a545f9b4ecb4bd1eebb4ca", (data) => {

  var temp = data.main.temp;

  document.getElementsByClassName("temp")[0].innerHTML = Math.round(temp);

});
}


