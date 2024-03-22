function getWeather() {
    const apiKey = "9f1124b6e9d6f8065f70eb0bac013aa6"; // Replace "YOUR_API_KEY" with your actual API key
    const city = document.getElementById('cityInput').value.trim(); // Get the city input value and trim any leading/trailing spaces
    if (!city) {
        alert("Please enter a city");
        return;
    }

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(currentWeatherUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayCurrentWeather(data);
        })
        .catch(error => {
            console.error("Error fetching current weather data:", error);
            alert("Error fetching current weather data. Please try again.");
        });

}
function displayCurrentWeather(data) {
    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    const weatherDataElement = document.getElementById('weatherData');
    weatherDataElement.innerHTML = `
        <h2>${cityName}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description}</p>
    `;
}
