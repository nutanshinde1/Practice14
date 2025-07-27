document.getElementById('searchBtn').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    const apiKey = '2ae3a4c8e5d3de86598671c1bc89da18'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.cod === 200) {
          const temp = (data.main.temp - 273.15).toFixed(2);
          const weather = data.weather[0].description;
          const windSpeed = data.wind.speed;
          const humidity = data.main.humidity;
            
  
          document.getElementById('weatherInfo').innerHTML = `
            <p><strong>Temperature:</strong> ${temp}°C</p>
            <p><strong>Weather:</strong> ${weather}</p>
            <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
            <p><strong>Humidity:</strong> ${humidity}%</p>
          `;
        } else {
          document.getElementById('weatherInfo').innerHTML = `<p>City not found. Please try again.</p>`;
        }
      })
      .catch(error => {
        document.getElementById('weatherInfo').innerHTML = `<p>An error occurred. Please try again later.</p>`;
        console.error(error);
      });
  });
  
