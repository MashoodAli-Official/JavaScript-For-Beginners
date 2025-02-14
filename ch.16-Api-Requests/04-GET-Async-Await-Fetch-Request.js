// GET request, Async and Await with Fetch API
// Async declares an asynchronous function that returns a Promise. Await pauses execution until a Promise is resolved or rejected.

// This async function fetches data from a REST API
async function fetchData(){
    try{
        // Make GET request to the API endpoint
        const response = await fetch('https://api.restful-api.dev/objects');
        // Parse the JSON response data
        const data = await response.json();
        // Log the parsed data to the console
        console.log(data);
    }catch(error){
        // Log any errors that occur during the fetch operation
        console.log(error);
    }
}
// Execute the fetchData function
fetchData(); 