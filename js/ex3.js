// Create JSON object
const travelHistory = {
    "name": "Sam",
    "countries":[
        {
            "name":"Spain",
            "year": 2001,
        },
        {
            "name":"Mexico",
            "year": 2009,
        }
    ]
}


// Send this array as JSON data to the server
fetch("https://thejsway-server.herokuapp.com/api/countries", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(travelHistory)
})
  .then(response => response.text())
  .then(result => {
      console.log(result)
  })
  .catch(err => {
    console.error("Error message is: ", err.message);
})
