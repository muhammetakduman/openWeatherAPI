//API
const url ='https://api.openweathermap.org/data/2.5/'
const key = '4e1ebea6dc3620a0e36c87fc3df35ad8'

const searchBar = document.getElementById('searchBar')
const setQuery = (e) => {
    if(e.keyCode =='13')
        getResult(searchBar.value)
}
const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResults)
}
const displayResults = (weather) => {
    let city = document.querySelector('.city')
    city.innerText = `${weather.name}, ${weather.sys.country}`
    
    let temp = document.querySelector('.temp')
    temp.innerText = `${Math.round(weather.main.temp)}°C`

    let description = document.querySelector('.description')
    description.innerText = weather.weather[0].description

    let minmax = document.querySelector('.minmax')
    minmax.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`

    let humidity = document.querySelector('.humidity')
    humidity.innerText = `Nem : ${weather.main.humidity}%`
    
}

searchBar.addEventListener('keypress',setQuery)