var temp = document.querySelector(".temp");
var otherDetails = document.querySelector(".other-details");
var city = document.querySelector(".city");
var timeDisplay = document.querySelector(".time");
var searchInput = document.querySelector(".search-text");
var searchBtn = document.querySelector("i");
var tempBtn = document.querySelector(".temp-btn");
var handleErr = document.querySelector(".err");

 searchBtn.addEventListener("click", getWeather);
 tempBtn.addEventListener("click", changeTempDeg);

 var unit = "metric";
 
 
 async function defaultWeather(){ 
  try{
 var response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=${unit}&appid=f00637bbaac7b45c36f5232353f64243`,{
    mode:"cors"
});
 var data = await response.json();
  console.log(data)
 
  city.innerHTML = `${data.name}, ${data.sys.country}`;
  temp.innerHTML = `${data.main.temp}&#176C<i class="material-icons cloud">cloud</i>`;
  otherDetails.innerHTML = `Feels Like ${data.main.feels_like}&#176C | ${data.weather[0].description} | Humidity: ${data.main.humidity}% 
      | Pressure: ${data.main.pressure}mb | Max-Temperature: ${data.main.temp_max}&#176C | Min-Temperature: ${data.main.temp_min}&#176C`;
     
      setInterval(() => {
        var date = new Date();
        var time = date.toLocaleTimeString();
        timeDisplay.textContent = time;
      }, 1000)
 }
 catch(err){
   handleErr.textContent = "new Error: No Network Connection or city not found";
 }
}
// defaultWeather();


  async function getWeather(){ 
  try{
 var response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=${unit}&appid=f00637bbaac7b45c36f5232353f64243`,{
    mode:"cors"
});
 var data = await response.json();
  console.log(data)
 
  city.innerHTML = `${data.name}, ${data.sys.country}`;
  temp.innerHTML = `${data.main.temp}&#176C<i class="material-icons cloud">cloud</i>`;
  otherDetails.innerHTML = `Feels Like ${data.main.feels_like}&#176C | ${data.weather[0].description} | Humidity: ${data.main.humidity}% 
      | Pressure: ${data.main.pressure}mb | Max-Temperature: ${data.main.temp_max}&#176C | Min-Temperature: ${data.main.temp_min}&#176C`;
     
      setInterval(() => {
        var date = new Date();
        var time = date.toLocaleTimeString();
        timeDisplay.textContent = time;
      }, 1000);
    
 }
 catch(err){
  handleErr.textContent = "new Error: No Network Connection or city not found";
 }
 searchInput.value = "";
}

async function defaultWeatherFah(){ 
  try{
 var response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=${unit}&appid=f00637bbaac7b45c36f5232353f64243`,{
    mode:"cors"
});
 var data = await response.json();
  console.log(data)
 
  city.innerHTML = `${data.name}, ${data.sys.country}`;
  temp.innerHTML = `${data.main.temp}&#176F<i class="material-icons cloud">cloud</i>`;
  otherDetails.innerHTML = `Feels Like ${data.main.feels_like}&#176F | ${data.weather[0].description} | Humidity: ${data.main.humidity}% 
      | Pressure: ${data.main.pressure}mb | Max-Temperature: ${data.main.temp_max}&#176F | Min-Temperature: ${data.main.temp_min}&#176F`;
     
      setInterval(() => {
        var date = new Date();
        var time = date.toLocaleTimeString();
        timeDisplay.textContent = time;
      }, 1000)
 }
 catch(err){
  handleErr.textContent = "new Error: No Network Connection or city not found";
 }
}


async function changeTempDeg(){ 
  
  if(unit == "metric"){
    unit = "imperial";
    defaultWeatherFah();
  }
  else if(unit == "imperial"){
    unit = "metric";
    defaultWeather();
  }  
}


