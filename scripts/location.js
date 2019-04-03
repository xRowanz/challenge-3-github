function getAPIdat1() {

  // get current weather
  fetch('https://randomuser.me/api/')
  
  .then(function(response) {
    if(!response.ok) throw Error(response.statusText);
    return response.json();
  })
  
  .then(function(response) {
    onAPISucce1(response);  
  })
  
  // catch error
  .catch(function (error) {
    onAPIErro1(error);
  });
}


function onAPISucce1(response) {
  // get country
  var country = response.results[0].location.timezone.description;

  // get city
  var city = response.results[0].location.city;

  // get street
  var street = response.results[0].location.street;

  // get postcode
  var postcode = response.results[0].location.postcode;

  // render
  var location = document.getElementById('locatie');
  location.innerHTML = "Land: " + country + "<br>" + "Stad: " + city + "<br>" + "Straat: " + street + "<br>" +"Postcode: " + postcode;
}


function onAPIErro1(error) {
  console.error('Request failed', error);
  var identity = document.getElementById('locatie');
  identity.className = 'hidden'; 
}

// init data stream
getAPIdat1();