document.querySelector('.btn').addEventListener('click', function(event){
event.preventDefault();

var letCity = document.querySelector('#searchCity').value.trim();
var apiKey = "4358dd17c9c64ba11a7facc81f57cec0";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${letCity}&appid=${apiKey}`).then(function(cityData) {
cityData.json().then(function(weatherTemp){
    console.log(weatherTemp)
});
});

})

 
