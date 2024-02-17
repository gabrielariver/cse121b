const apiKey = '3b956ab28530a36652e3894640d7c549';

function resetSearch() {
    document.getElementById('weather-result').innerHTML = '';
    document.getElementById('forecast-container').innerHTML = '';
    document.getElementById('search-input').value = '';
    document.getElementById('search-input').focus();
}

document.getElementById('search-button').addEventListener('click', performSearch);
document.getElementById('search-input').addEventListener('click', resetSearch);
document.getElementById('search-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
    const cityName = document.getElementById('search-input').value;
    if (cityName.trim() !== '') {
        resetSearch();
        fetchWeather(cityName);
        fetchForecast(cityName);
    } else {
        alert('Please enter a valid city name.');
    }
}

function fetchWeather(cityName) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=${apiKey}&units=metric&lang=en`;

    fetch(url)
    .then(response => {
        if (!response.ok) {
            if(response.status === 401) {
                throw new Error('Unauthorized access. Check your API key.');
            }
            throw new Error('Failed to fetch data from the API.');
        }
        return response.json();
    })
    .then(data => {
        if(data.cod === "404") {
            throw new Error('City not found.');
        }
        displayWeatherData(data);
    })
    .catch(error => {
        console.error(error);
        document.getElementById('weather-result').innerHTML = `<p>${error.message}</p>`;
    });
}

function displayWeatherData(data) {
    const { name, main, weather } = data;
    document.getElementById('weather-result').innerHTML = `
        <h2>Weather in ${name}</h2>
        <p>Temperature: ${main.temp}°C</p>
        <p>Humidity: ${main.humidity}%</p>
        <p>Conditions: ${weather[0].description}</p>
        <img src="http://openweathermap.org/img/wn/${weather[0].icon}.png" alt="Weather Icon">
    `;
}

function fetchForecast(cityName) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(cityName)}&appid=${apiKey}&units=metric&lang=en`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data && data.list) {
            displayForecast(data.list);
        } else {
            throw new Error('Failed to load forecast data.');
        }
    })
    .catch(error => {
        console.error(error);
        document.getElementById('forecast-container').innerHTML = `<p>${error.message}</p>`;
    });
}

function displayForecast(forecastData) {
    const forecastHTML = forecastData.map(forecast => {
        return `
            <div class="forecast-block">
                <h3>${new Date(forecast.dt_txt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h3>
                <p>Temperature: ${forecast.main.temp}°C</p>
                <p>Description: ${forecast.weather[0].description}</p>
            </div>
        `;
    }).join('');
    document.getElementById('forecast-container').innerHTML = forecastHTML;
}
