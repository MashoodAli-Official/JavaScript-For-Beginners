// simple POST request in Fetch API
// POST method use to create/update the data on the server.

// API endpoint for objects
const api = 'https://api.restful-api.dev/objects';
// Make POST request to create new wand object
fetch (api,{
    // Specify POST method
    method : 'POST',
    // Set content type header to JSON
    headers:{
        'Content-Type':'application/json'
    },
    // Convert request body to JSON string
    body:JSON.stringify({
        name: 'New Wand', // Name of the wand
        data:{
            wandCore: 'Phoenix Feather', // Type of magical core
            wood: 'Holly', // Type of wood used
            length: 11.5 // Length in inches
        }
    })
})
// Parse JSON response
.then(resonse => resonse.json())
// Log the parsed response data
.then(data => console.log(data))
// Handle any errors that occur
.catch(error => console.log('ERROR', error));