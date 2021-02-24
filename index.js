let inp = document.querySelector('input');
let loc = document.querySelector('h2');

let image = document.querySelector('.image-block img');
let weatherType = document.querySelector('.image-block p');
let deg = document.querySelector('h6');
let locationTime = document.querySelector('.time');
let locationDetails = document.querySelector('.details');

function displayUI(data) {
  locationDetails.innerHTML = '';
  locationTime.innerHTML = '';
  loc.innerText = data.request.query;
  image.src = data.current.weather_icons;
  weatherType.innerText = data.current.weather_descriptions;
  deg.innerHTML = ` <h6>${data.current.temperature} &deg;</h6>`;
  locationTime.innerHTML = `   <li>local time: <span>${data.location.localtime}</span></li>
<li>country: <span>${data.location.country}</span></li>`;

  locationDetails.innerHTML = `   <li>Wind: <span>${data.current.wind_speed} km/hr</span></li>
<li>Humidity: <span>${data.current.humidity} </span></li>
<li>Pressure: <span>${data.current.pressure} mb</span></li>`;
}

function handleEvent(event) {
  if (event.keyCode == 13) {
    console.log(event.target.value);

    let userData = fetch(
      `http://api.weatherstack.com/current?access_key=ab13b74a3a511edd1a73d0e2a52d6cea&query=${event.target.value}`
    ).then((resp) => resp.json());

    let userArr = userData.then((value) => {
      displayUI(value);
      console.log(value);
    });
    event.target.value = '';
  }
}

inp.addEventListener('keyup', handleEvent);

//http://api.weatherstack.com/current?access_key=ab13b74a3a511edd1a73d0e2a52d6cea&query=${event.target.value}
