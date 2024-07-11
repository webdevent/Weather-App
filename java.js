const weaDisplay = document.querySelector('.main-img');
const search = document.querySelector('#myInput');
const searchBtn = document.querySelector('.search-btn');
const apiKey = '91c7f3413f4a542d17a8b390c9b2108e'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    } else {
        const data = await response.json();
    console.log(data);
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.temp').innerHTML = Math.floor(data.main.temp) + '°c';
    document.querySelector('.city').innerHTML = data.name;

    if(data.weather[0].main == 'Clouds') {
        weaDisplay.src = './pictures/cloudy.png'
    } else if(data.weather[0].main == 'Rain') {
        weaDisplay.src = './pictures/rain.png'
    } else if(data.weather[0].main == 'Clear') {
        weaDisplay.src = './pictures/sunny.png'
    } else if(data.weather[0].main == 'Snow') {
        weaDisplay.src = './pictures/snow.png'
    } else if(data.weather[0].main == 'Thunderstorm') {
        weaDisplay.src = './pictures/storm.png'
    } else if(data.weather[0].main == 'Night') {
        weaDisplay.src = './pictures/night.png'
    }

    document.querySelector('.weather').style.display = 'block';
    document.querySelector('.error').style.display = 'none';
    }
}
searchBtn.addEventListener('click', () => {
    checkWeather(search.value);
    });