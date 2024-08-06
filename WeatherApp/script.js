const inputVal = document.querySelector(".inp");
const btn = document.getElementById("btn");
const weatherIcon = document.querySelector(".weather-icon");

const apiKey = "edc6d08952e09d677d076497a0dd1731";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=`;

async function getData(city) {
  console.log(apiUrl + city + `&appid=${apiKey}`);
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();
  console.log(data);

  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " kmph";

  const arr = ["Clouds", "Rain", "Snow", "Mist", "Drizzle"];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === data.weather[0].main) {
      weatherIcon.src = "images/" + arr[i] + ".png";
    }
  }
}
getData();
btn.addEventListener("click", () => {
  getData(inputVal.value);
});
