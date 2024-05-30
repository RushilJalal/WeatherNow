export function showWeather(result) {
        
    const content = document.querySelector(".content");
    content.textContent = ""; // Clear previous content

    const location = document.createElement("div");
    const temp = document.createElement("div");
    const pic = document.createElement("img")
    const temp_pic = document.createElement("div")

    location.classList.add("location");

    temp.classList.add("temp");
    temp_pic.classList.add("temp-pic");

    pic.src = `https:${result.current.condition.icon}`;
    pic.alt = result.current.condition.text;
    pic.classList.add("weather-icon");

    temp_pic.appendChild(temp);
    temp_pic.appendChild(pic);

    content.appendChild(location);
    content.appendChild(temp_pic);

    location.textContent = `${result.location.name}, ${result.location.country}`;
    temp.textContent = `${result.current.temp_c}°C`;

    // display the forecast
    const forecast = document.createElement("div")
    forecast.classList.add("forecast")
    forecast.textContent = "Forecast:"
    content.appendChild(forecast)

    const forecastList = document.createElement("ul")
    forecastList.classList.add("forecast-list");
    forecast.appendChild(forecastList)

    for (let i = 0; i < result.forecast.forecastday.length; i++) {
        const forecastDay = document.createElement("ul")
        forecastDay.classList.add("forecast-day")
        forecastList.appendChild(forecastDay)

        const date = document.createElement("li")
        const condition = document.createElement("li")
        const temp = document.createElement("li")

        date.textContent = result.forecast.forecastday[i].date
        condition.textContent = result.forecast.forecastday[i].day.condition.text
        temp.textContent = `${result.forecast.forecastday[i].day.avgtemp_c}°C`

        forecastDay.appendChild(date)
        forecastDay.appendChild(condition)
        forecastDay.appendChild(temp)
    }

    content.style.display = "block";
}
