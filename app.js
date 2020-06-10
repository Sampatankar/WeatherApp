//Initialise the storage object:
const storage = new Storage();

//Get the stored location data:
const weatherLocation = storage.getLocationData();

//Initialise the weather object:
const weather = new Weather(weatherLocation.city, weatherLocation.state);

//Initialise a UI object:
const ui = new UI();

//Get weather on DOM load:
document.addEventListener('DOMContentLoaded', getWeather);

//Change location event:
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').nodeValue;
  const state = document.getElementById('state').nodeValue;

  //Change location:
  weather.changeLocation(city, state);

  //Set the location in LS:
  storage.setLocationData(city, state);

  //Get and display the weather:
  getWeather();

  //Close the Modal:
  $('#locModal').modal('hide');
});


// //Quick change of location:
// weather.changeLocation('Miami', 'FL');

function getWeather() {
  weather.getWeather()
    .then(results => {
      console.log(results);
    })
    .catch(err => console.log(err));
}