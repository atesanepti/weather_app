let img = document.querySelector("#weatherImg");
let btn = document.querySelector("#btn");
let input = document.querySelector("#search");
let temp = document.querySelector(".weather");
let cityName = document.querySelector(".cityName");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
const apiKey = "7dcaa284a9ff05fedcaf2ad0c1e26107";
async function dymanicData(value) {
  let city = value == "" ? "dhaka" : value;
  console.log(city);
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );
  const objData = await data.json();
  temp.innerText = `${Math.round(objData.main.temp)}`;
  cityName.innerText = `${objData.name}`;
  humidity.innerText = `${objData.main.humidity}%`;
  wind.innerText = `${objData.wind.speed}`;

  if (objData.weather[0].main == "Clouds") {
    img.src = `img/clouds.png`;
  } else if (objData.weather[0].main == "Clear") {
    img.src = `img/clear.png`;
  } else if (objData.weather[0].main == "Drizzle") {
    img.src = `img/drizzle.png`;
  } else if (objData.weather[0].main == "Mist") {
    img.src = `img/mist.png`;
  } else if (objData.weather[0].main == "Rain") {
    img.src = `img/rain.png`;
  } else if (objData.weather[0].main == "Snow") {
    img.src = `img/snow.png`;
  }
}


dymanicData(input.value);
btn.addEventListener("click", () => {
  dymanicData(input.value);
});
