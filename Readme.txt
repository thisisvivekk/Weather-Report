Project Description:
-------------------

The project is a command-line weather forecast application that interacts with the OpenWeatherMap API to provide hourly weather information for the city of London. It is implemented using JavaScript and the 'axios' library for making HTTP requests. The application presents the user with a menu displaying three options:

1.Get weather
2.Get Wind Speed
3.Get Pressure
When the user selects an option, they are prompted to input a date in the format "YYYY-MM-DD". Depending on the chosen option, the program fetches the corresponding weather data from the API and displays it to the user. The weather data includes temperature, wind speed, and pressure for the specified date.

The application is designed to be modular, with separate functions for each menu option. It uses a recursive approach to ensure the program keeps running until the user chooses to exit by pressing 0. The user can explore different dates and view the associated weather details throughout the session.

Overall, this command-line weather forecast application offers a user-friendly interface for accessing and visualizing the hourly weather forecast for London, enhancing the user's experience with modular code and a straightforward interaction process.


* The given API is the REST GET API , which gives you the response in JSON format and hourly weather forecast of London Location.
"https://samples.openweathermap.org/data/2.5/forecast/hourly?q=London,us&appid=b6907d289e10d714a6e88b30761fae22"

Task performing in this project:
--------------------------------
If the user press 1, Prompt the user for the date then print the temp of the input date.
If the user press 2, Prompt the user for the date then print the wind.speed of the input date.
If the user press 3, Prompt the user for the date then print the pressure of the input date.
If the user press 0, Terminate the program.

The program should not terminate until the user press 0.
