API
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
    console.log(weather)
}

searchBar.addEventListener('keypress',setQuery)