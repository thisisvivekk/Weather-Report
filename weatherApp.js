const axios = require('axios');
const readline = require('readline');

const API_URL = 'https://samples.openweathermap.org/data/2.5/forecast/hourly?q=London,us&appid=b6907d289e10d714a6e88b30761fae22';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getUserInput(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

function getWeatherData(date) {
  return axios.get(API_URL)
    .then(response => {
      const forecastData = response.data.list.find(item => item.dt_txt.includes(date));
      if (forecastData) {
        console.log(`Temperature on ${date}: ${forecastData.main.temp} °C`);
      } else {
        console.log(`No weather data available for the input date: ${date}`);
      }
    })
    .catch(error => {
      console.error('Error fetching weather data:', error.message);
    });
}

function getWindSpeed(date) {
  return axios.get(API_URL)
    .then(response => {
      const forecastData = response.data.list.find(item => item.dt_txt.includes(date));
      if (forecastData) {
        console.log(`Wind Speed on ${date}: ${forecastData.wind.speed} m/s`);
      } else {
        console.log(`No weather data available for the input date: ${date}`);
      }
    })
    .catch(error => {
      console.error('Error fetching weather data:', error.message);
    });
}

function getPressure(date) {
  return axios.get(API_URL)
    .then(response => {
      const forecastData = response.data.list.find(item => item.dt_txt.includes(date));
      if (forecastData) {
        console.log(`Pressure on ${date}: ${forecastData.main.pressure} hPa`);
      } else {
        console.log(`No weather data available for the input date: ${date}`);
      }
    })
    .catch(error => {
      console.error('Error fetching weather data:', error.message);
    });
}

function main() {
  console.log("1. Get weather");
  console.log("2. Get Wind Speed");
  console.log("3. Get Pressure");
  console.log("0. Exit");

  rl.question("Enter your choice: ", async (choice) => {
    switch (choice) {
      case '1':
        const date1 = await getUserInput("Enter the date (YYYY-MM-DD): ");
        getWeatherData(date1);
        break;
      case '2':
        const date2 = await getUserInput("Enter the date (YYYY-MM-DD): ");
        getWindSpeed(date2);
        break;
      case '3':
        const date3 = await getUserInput("Enter the date (YYYY-MM-DD): ");
        getPressure(date3);
        break;
      case '0':
        rl.close();
        return;
      default:
        console.log("Invalid choice. Please try again.");
    }

    main(); // Recursive call to keep the program running until user presses 0.
  });
}

main();
