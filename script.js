// Define the API key for the openweathermap.org API
const apiKey = "a62e54a4e95c9f60334374a4596f68b8";

// Define the API URL for the openweathermap.org API
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

// Get the location input element
const locationInput = document.getElementById("locationInput");

// Get the search button element
const searchButton = document.getElementById("searchButton");

// Get the location element
const locationElement = document.getElementById("location");

// Get the temperature element
const temperatureElement = document.getElementById("temperature");

// Get the description element
const descriptionElement = document.getElementById("description");

// Add an event listener to the search button
searchButton.addEventListener("click", () => {
  // Get the location value from the location input element
  const location = locationInput.value;

  // Check if the location value is not empty
  if (location) {
    // Call the fetchWeather function with the location value as an argument
    fetchWeather(location);
  }
});

// Define the fetchWeather function
function fetchWeather(location) {
  // Define the URL for the API request
  const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

  // Fetch the data from the API
  fetch(url)
    // Convert the response to JSON
   .then((response) => response.json())
    // Extract the relevant data and update the HTML elements
   .then((data) => {
      locationElement.textContent = data.name;
      temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
      descriptionElement.textContent = data.weather[0].description;
    })
    // Log any errors to the console
   .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}