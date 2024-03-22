//Create a five day weather outlook for a city of your choice. The outlook should include the following:
//City name: data.location.name
//High Temp: data.timelines.daily[0].values.temperatureApparentMax
//Low Temp: data.timelines.daily[0].values.temperatureApparentMin
//Winds: data.timelines.daily[0].values.windSpeedAvg
//Rain Chance: data.timelines.daily[0].values.precipitationProbabilityAvg
//The day/date of the weather conditions: data.timelines.daily[0].time
//Image representing one of the following conditions: sunny, partly cloudy, mostly cloudy, rainy, windy
//Each day should be stored in its own container. (edited) 

// fetch("hthttp://api.weatherapi.com/v1/forecast.json?key=da7122f54717424287b151533241803&q=Atlanta&days=5&aqi=no&alerts=no")
// .then((response) => response.json())
// .then((data) => {
//     console.log(data);
//     for(i = 0; i < data.timelines.daily.length; i++){
        


//         //locating data in array
//         let cityName = data.location.name;
//         let weatherDate = data.timelines.daily[i].time;
//         let conditionImg = path;

//         let highTemp = data.timelines.daily[i].values.temperatureApparentMax;
//         let lowTemp = data.timelines.daily[i].values.temperatureApparentMin;
//         let winds = data.timelines.daily[i].values.windSpeedAvg;
//         let rainChance = ata.timelines.daily[i].values.precipitationProbabilityAvg;


//         //container
//         let weatherContainer = document.createElement("div");


//         // tags
//         let cityNameTag = document.createElement("p");
//         let weatherDateTag = document.createElement("p");
//         let conditionImgTag = document.createElement("p");
//         let highTempTag = document.createElement("p");
//         let lowTempTag = document.createElement("p");
//         let windsTag = document.createElement("p");
//         let rainChanceTag = document.createElement("p");


//         //Values(.innerText)
//         cityNameTag.innerText= city;
//         weatherDateTag.innerText = date;
//         conditionImgTag.innerText = image;
//         highTempTag.innerText = HighTemp;
//         lowTempTag.innerText = lowTemp;
//         windsTag.innerText = winds;
//         rainChanceTag = rainChance;
        

//         //appendChild
//         weatherContainer.appendChild(cityNameTag);
//         weatherContainer.appendChild(weatherDateTag);
//         weatherContainer.appendChild(conditionImgTag);
//         weatherContainer.appendChild(highTempTag);
//         weatherContainer.appendChild(lowTempTag);
//         weatherContainer.appendChild(windsTag);
//         weatherContainer.appendChild(rainChanceTag);


//     }

// }) 
  
fetch("http://api.weatherapi.com/v1/forecast.json?key=da7122f54717424287b151533241803&q=Atlanta&days=5&aqi=no&alerts=no")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const dailyForecast = data.timelines[0].intervals; // Assuming the daily data is stored in intervals array
        
        for(let i = 0; i < dailyForecast.length; i++) {
            const forecast = dailyForecast[i].values;
            const date = new Date(forecast.datetime);
            const day = date.toLocaleDateString("en-US", { weekday:'long', month: 'long', day: 'numeric' });

            const highTemp = forecast.temperatureMax;
            const lowTemp = forecast.temperatureMin;
            const winds = forecast.windSpeed;
            const rainChance = forecast.precipitationProbability * 100; // Converting to percentage
            
            console.log(`Day ${i+1} (${day}):`);
            console.log(`- High Temp: ${highTemp}°F`);
            console.log(`- Low Temp: ${lowTemp}°F`);
            console.log(`- Winds: ${winds} mph`);
            console.log(`- Rain Chance: ${rainChance}%\n`);
        }
    })
    .catch((error) => {
        console.log("Error fetching data:", error);
    });
