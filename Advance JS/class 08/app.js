const API_KEY = `c0ef75261a97cb8945e927fb43a01d09`;
const inputdata = document.getElementById("inputField");
const showWeather = document.getElementById("showWeather");

const searchData = async () => {
  showWeather.innerHTML = `<div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span></div>`;

  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputdata.value}&appid=${API_KEY}&units=metric`;

  const fetchData = await fetch(API_URL);
  const response = await fetchData.json();   
  
  console.log(response);

  return showData(response);
};  

const showData = (data) => {
  if (data.cod == "404") {
    showWeather.innerHTML = `<h1>${data.message}</h1>`;
    return;
  } else {
    showWeather.innerHTML = `
      <img width="80" src=${`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="">
      <h1>${data.main.temp} C</h1>
      <h3>${data.weather[0].main}</h3>
      `;
  }
};
