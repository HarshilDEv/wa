const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c123038bcfmshbd5a68b5acb1ddbp16a559jsn6a8a2c5360a3',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city)=>{
    cityName.innerHTML = city
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        

        
        temp.innerHTML = response.temp
        temp1.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity1.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed1.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err)); 
    }

    
       
        
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=new york', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        temp3.innerHTML = response.temp
        humidity3.innerHTML = response.humidity
        wind_speed3.innerHTML = response.wind_speed
    })
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=California', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        temp4.innerHTML = response.temp
        humidity4.innerHTML = response.humidity
        wind_speed4.innerHTML = response.wind_speed
    })
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=taiwan', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        temp5.innerHTML = response.temp
        humidity5.innerHTML = response.humidity
        wind_speed5.innerHTML = response.wind_speed
    })
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Toronto', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        temp6.innerHTML = response.temp
        humidity6.innerHTML = response.humidity
        wind_speed6.innerHTML = response.wind_speed
    })
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=boston', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        temp7.innerHTML = response.temp
        humidity7.innerHTML = response.humidity
        wind_speed7.innerHTML = response.wind_speed
    })
        
    
    
    
    .catch(err => console.error(err)); 
        
    
    submit.addEventListener("click", (e)=>{
        e.preventDefault()
        getWeather(city.value)
    })

    getWeather("Delhi")