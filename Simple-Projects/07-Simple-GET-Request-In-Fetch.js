// In this simple project we will use the GET request in Fetch API.
const url = 'https://reqres.in/api/users';

// Fetch data from the API endpoint
fetch(url)
// Convert the response to JSON format
.then(response => {
    return response.json();
})
// Handle the JSON data received from the API
.then(data => {
    console.log(data);
})
// Handle any errors that occur during the fetch operation
.catch(error =>{
    console.log(error);
})
