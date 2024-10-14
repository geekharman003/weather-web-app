const key = "e2194979a1a64438be472839241010";
let json;
let day;
let date;
let time;
let dateTimeDay;

let input = document.querySelector(".search__input");
let heading = document.querySelector("h1");
let dateTime = document.querySelector(".date__time");
let wrapperContainer = document.querySelector(".wrapper-container");
let weather__type = document.querySelector(".weather__type");
let weather__logo = document.querySelector(".weather__logo");
let weather__temperature = document.querySelector(".weather__temperature");
let min__temp = document.querySelector(".min__temp");
let max__temp = document.querySelector(".max__temp");
let real__feel__temperature = document.querySelector(
  ".real__feel__temperature"
);
let humidity__percentage = document.querySelector(".humidity__percentage");
let wind__speed = document.querySelector(".wind__speed");
let pressure__percentage = document.querySelector(".pressure__percentage");
let noResults = document.querySelector(".no-results");
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

async function getjsonponse(location) {
  const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}&aqi=no`;
  const response = await fetch(url);
  if (response.ok) {
    json = await response.json();
    json &&
      json.location &&
      json.current &&
      ((date = new Date(json.location.localtime).toDateString()),
      (time = new Date(json.location.localtime).toLocaleTimeString()),
      (dateTimeDay = date + ", at " + time),
      (noResults.textContent = ""),
      (wrapperContainer.style.display = "flex"),
      (heading.textContent = location),
      (dateTime.textContent = dateTimeDay),
      (weather__type.textContent = json.current.condition.text),
      (weather__logo.src = json.current.condition.icon),
      (weather__temperature.textContent = json.current.temp_c + "°C"),
      (min__temp.textContent = json.current.dewpoint_c + "°C"),
      (max__temp.textContent = json.current.heatindex_c + "°C"),
      (real__feel__temperature.textContent = json.current.feelslike_c + "°C"),
      (humidity__percentage.textContent = json.current.humidity + "%"),
      (wind__speed.textContent = json.current.wind_kph + "km/h"),
      (pressure__percentage.textContent = json.current.pressure_mb + "hPa"));
  } else {
    noResults.textContent = "No Results 😓";

    wrapperContainer.style.display = "none";

    dateTime.textContent = "---";
    heading.textContent = "-----";
    weather__type.textContent = "--";
    weather__logo.src = "";
    weather__temperature.textContent = "--";
  }
}

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    getjsonponse(input.value);
  }
});
