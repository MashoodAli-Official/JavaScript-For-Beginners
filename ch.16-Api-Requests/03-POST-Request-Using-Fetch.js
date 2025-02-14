// Introduction to POST request using Fetch API
// POST request using Fetch API is use to Create/Update data on the server. 
// POST request is use to create new resource on the server.
// POST request is use to update existing resource on the server.

// Making a POST request to create a new user
fetch('https://reqres.in/api/users', {
    method: 'POST', // Specifying the HTTP method as POST
    headers:{
        'Content-Type': 'application/json' // Setting content type to JSON
    },
    body: JSON.stringify({ // Converting JavaScript object to JSON string
        name: 'Harry Potter',
        job: 'Wizard'
    })
})
// Converting response to JSON format
.then(response => response.json())
// Logging the response data to console
.then(data => console.log(data))
// Handling any errors that occur during the request
.catch(error => console.log('ERROR'))
