function getAPIdata() {

  fetch('https://randomuser.me/api/')
  
  // parse to JSON format
  .then(function(response) {
    if(!response.ok) throw Error(response.statusText);
    return response.json();
  })
  

  .then(function(response) {

    onAPISucces(response);  
  })
  
  // catch error
  .catch(function (error) {
    onAPIError(error);
  });
}


function onAPISucces(response) {
  // get firtsname
  var first = response.results[0].name.first;

  // get last name
  var last = response.results[0].name.last;

  // get gender
  var gender = response.results[0].gender;

  // get age
  var age = response.results[0].dob.age;

  // render identity in DOM
  var identity = document.getElementById('identiteit');
  identity.innerHTML = "Voornaam: " + first + "<br>" + "Achternaam: " + last + "<br>" + "Geslacht: " + gender + "<br>" +"Leeftijd: " + age;
}


function onAPIError(error) {
  console.error('Request failed', error);
  var identity = document.getElementById('identiteit');
  identity.className = 'hidden'; 
}

// init data stream
getAPIdata();
