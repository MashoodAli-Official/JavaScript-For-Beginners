// POST request, Async and Await with Fetch API
async function postData(url = '', data = {}) {
  // Configuration object for the POST request
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  try {
    // Await the fetch call
    const response = await fetch(url, options)
    // Await and parse the JSON response
    const jsonData = await response.json()
    return jsonData
  } catch (error) {
    console.error('Error:', error)
  }
}

// Example usage:
const data = {
  username: 'Harry Potter',
  email: 'Harry@hogwartz.com'
}

// Call the async function
postData('https://api.restful-api.dev/objects', data)
  .then(response => console.log('Success:', response))