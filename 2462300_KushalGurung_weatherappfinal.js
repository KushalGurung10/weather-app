async function getWeather1() {
    const search = "thurrock"; 
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    try {
        const apiKey = "16667dbc8b4195c2ff867a767bfa47af";
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${search}&units=metric`);
        if (!response.ok) throw new Error("City not found.");
        const data = await response.json();
        const { name, main, weather, wind, clouds,} = data;
        const rain= data.rain? (data.rain['1h'] || 0) : 0;
        const iconCode = weather[0].icon;
        const today= new Date();
        const month= today.toLocaleString('en-US',{month:'short'}) ;
        const day= today.getDate();
        const year= today.getFullYear();
        
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

        resultDiv.innerHTML = `
            <h2>Location: ${name}</h2>
            <p>Temperature: ${main.temp}°C</p>
            <p>Humidity: ${main.humidity}%</p>
            <p>Pressure: ${main.pressure} hPa</p>
            <p>Rain: ${rain}mm</p>
            <p>Wind: ${wind.speed}m/s  Degree:${wind.deg}° </p>
            <p>Clouds: ${clouds.all}%</p>
            <img src="${iconUrl}" alt="Weather Icon" />
            <p>condition: ${weather[0].description}</p>
            <p>${month} ${day}, ${year}</p>
        `;
    } catch (error) {
        resultDiv.innerHTML = "Error: City not found. Please try again.";
    }
}


async function getWeather() {
    const search = document.getElementById("city").value ;
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    try {
        const apiKey = "98f9f9417bcfbcdc5638c4a7f490651c";
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${search}&units=metric`);
        if (!response.ok) throw new Error("City not found.");
        const data = await response.json();
        const { name, main, weather, wind, clouds,  } = data;
        const rain= data.rain? (data.rain['1h'] || 0) : 0;
        const iconCode = weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
        const today= new Date();
        const month= today.toLocaleString('en-US',{month:'short'}) ;
        const day= today.getDate();
        const year= today.getFullYear();

        resultDiv.innerHTML = `
            <h2>Location: ${name}</h2>
            <p>Temperature: ${main.temp}°C</p>
            <p>Humidity: ${main.humidity}%</p>
            <p>Pressure: ${main.pressure} hPa</p>
            <p>Rain: ${rain}mm</p>
            <p>Wind: ${wind.speed}m/s Degree:${wind.deg}°</p>
            <p>Clouds: ${clouds.all}%</p>
            <img src="${iconUrl}" alt="Weather Icon" />
            <p>condition: ${weather[0].description}</p>
            <p>${month} ${day}, ${year}</p>
        `;
    } catch (error) {
        resultDiv.innerHTML = "Error: City not found. Please try again.";
    }
}

window.onload = getWeather1();

