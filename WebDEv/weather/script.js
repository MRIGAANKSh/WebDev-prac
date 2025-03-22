document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('search-btn');
    const cityInput = document.getElementById('city-input');
    const weatherContainer = document.getElementById('weather-container');
    const weatherIcon = document.getElementById('weather-icon');
    const cityName = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const errorMessage = document.getElementById('error-message');


    const API_KEY="deac38a3e8ab362b69bacc1731497904"

    searchBtn.addEventListener('click', async () => {
        const city=cityInput.value.trim()
        if(!city) return;

        try{
           const weatherData = await fetchWeather(city)
           displayWeather(weatherData)
        }
        catch(error){
            showerror()
        }
        async function fetchWeather(city){
            //weather data
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
            const response=await fetch(url)
            console.log(typeof response)
            console.log(response)

            if(!response.ok){
                throw new Error('City not found')
            }
            const data=await response.json()
            return data
        }
        function displayWeather(data){
            console.log(data)
            if(data.status===404){
                showerror()
            }
            const {name,main,weather}=data
            cityName.textContent=name
            
            temperature.textContent=`${main.temp}°C`
            description.textContent=weather[0].description
            weatherIcon.innerHTML=`<img src="https://openweathermap.org/img/wn/${weather[0].icon}.png" alt="Weather Icon">`
            errorMessage.textContent=' '
        }
        function showerror(){
            errorMessage.textContent='City not found'
            cityName.textContent=" "
            
            temperature.textContent=` `
            description.textContent=" "
            weatherIcon.innerHTML=`<img src="https://openweathermap.org/img/wn/${weather[0].icon}.png" alt="Weather Icon">`
            
            console.log("city do not found")
        }
    })
})