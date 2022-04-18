fetch(
    "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json"
)
    .then(response => response.text()) // Access and return response's text content; or do response.json
    .then(text => {

        //console.log(text) // Display file content in the console 
        //console.log(typeof text) // Find datatype

        // text is a json/string, need to convert to array
        let paintings = JSON.parse(text)
        //console.log(paintings) // Test print
        //console.log(typeof paintings) // Confirmed array of objects

        // Get the table element (tr)
        const trPaintings = document.getElementById("paintings");

        // Loop through array and create td for each painting; Add to tr


        paintings.forEach(painting => {
            //console.log(painting)

            // Create new row
            let row = document.createElement('tr');
            // create row element 1
            let row_data_1 = document.createElement('td');
            row_data_1.innerHTML = painting.name;
            // create row element 2
            let row_data_2 = document.createElement('td');
            row_data_2.innerHTML = painting.year;
            // create row element 3
            let row_data_3 = document.createElement('td');
            row_data_3.innerHTML = painting.artist;

            // append each row element to row
            row.appendChild(row_data_1)
            row.appendChild(row_data_2)
            row.appendChild(row_data_3)

            // append row to table
            trPaintings.append(row)


        })


    })
    .catch(err => {
        console.error("Error message is: ", err.message);
    })