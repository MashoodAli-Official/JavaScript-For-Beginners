// GET request using Fetch API
// Make a GET request to the JSONPlaceholder API to fetch a todo item
// The endpoint URL is for todo with ID 1
fetch('https://reqres.in/api/users')
  // Convert the response to JSON format
  .then(response => response.json())
  // Log the parsed JSON data to the console
  .then(data => console.log(data))
  // Handle any errors that occur during the request
  .catch(error => console.error('Error:', error));