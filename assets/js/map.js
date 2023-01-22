// Mapa do Leaflet:
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();




//Consumo da API do Ipify
const apiKey = 'at_O4xKl2vqPE56d6701KT0i6ZA8LLdW';
const form = document.querySelector('form');  
form.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const input = document.querySelector('#ip-preenchido');
    const ip = input.value;

    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_O4xKl2vqPE56d6701KT0i6ZA8LLdW&ipAddress=${ip}`)
      .then(response => response.json())
      .then(data => {
        document.getElementById("ip-address").innerHTML = data.ip;
        document.getElementById("location").innerHTML = data.location.city + ", " + data.location.country;
        document.getElementById("timezone").innerHTML = data.location.timezone;
        document.getElementById("isp").innerHTML = data.isp;
      })
      .catch(error => console.error(error));
  });

/*
   fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_O4xKl2vqPE56d6701KT0i6ZA8LLdW&ipAddress=${ip}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
*/
  








