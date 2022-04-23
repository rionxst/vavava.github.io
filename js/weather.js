const API_KEY = "df2c287eb55bba0fcf2cd701e605a69e";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weatherContainer = document.querySelector("#weather span:first-child");
        weather.innerText = `Nation : ${data.name} / Weather : ${data.weather[0].main} / temperture : ${data.main.temp} 도`;
    });
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);