const apiKey='abc123xyz';
document.getElementById('search-btn').addEventListener('click', ()=>{
    const location = document.getElementById('location-input').value;
    getWeather(location);
});
function getWeather(location){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => alert('Location not found'));}
function displayWeather(data){
    const cityName = data.name;
    const temperature = data.main.temp;
    const conditions = data.weather[0].description;
    document.getElementById('city-name').textContent = cityName;
    document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
    document.getElementById('conditions').textContent = `Conditions: ${conditions}`;}
