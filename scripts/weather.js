
function getAPIdat2() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = document.getElementById("city").value;

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	// get current weather
	fetch(request)
	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) throw Error(response.statusText);
		return response.json();
	})
	
	// render weather per day
	.then(function(response) {
		// render weatherCondition
		onAPISucce2(response);	
	})
	
	// catch error
	.catch(function (error) {
		onAPIErro2(error);
	});
}


function onAPISucce2(response) {
	// get type of weather in string format
	var type = response.weather[0].description;

	// get temperature in Celcius
	var degC = Math.floor(response.main.temp - 273.15);

	// render weather in DOM
	var weatherBox = document.getElementById('weather');
	weatherBox.innerHTML = degC + "&#176;C <br>" + type;
}


function onAPIErro2(error) {
	console.error('Fetch request failed', error);
	var weatherBox = document.getElementById('weather');
	weatherBox.innerHTML = 'No weather data available <br /> Did you enter a valid city?'; 
}

// init data stream
document.getElementById("getWeather").onclick = function(){
	getAPIdat2();
};
