// Define the value of the "username" input field
const usernameElement = document.getElementById("username");

//usernameElement.value = "brendaneich"; // Test value

// Get the form info
const formElement = document.querySelector("form");
formElement.addEventListener("submit", e => {
    const usernameElement = e.target.elements.username;
    //console.log(usernameElement.value)
    e.preventDefault(); // Cancel form data sending

    // API stuff
    fetch(`https://api.github.com/users/${usernameElement.value}`)
        .then(response => response.json()) //Converting the response to a JSON object
        .then(response => {
            //console.log(response) // Test print response

            // Get the div
            const divUser = document.getElementById("user");

            // Show the picture
            // Create img element
            let picture = document.createElement('img');

            
            // Set the url for image
            picture.src = response.avatar_url;
            


            // Create the table
            let MyTable = document.createElement('table');

            // Create first row
            let row1 = document.createElement('tr');
            // create row element 1
            let row1_data1 = document.createElement('td');
            row1_data1.textContent = "Name";
            // create row element 2
            let row1_data2 = document.createElement('td');
            row1_data2.textContent = response.name;

            // Create second row
            let row2 = document.createElement('tr');
            // create row element 1
            let row2_data1 = document.createElement('td');
            row2_data1.textContent = "Blog";
            // create row element 2
            let row2_data2 = document.createElement('td');
            row2_data2.textContent = response.blog;

            // Create third row
            let row3 = document.createElement('tr');
            // create row element 1
            let row3_data1 = document.createElement('td');
            row3_data1.textContent = "Created";
            // create row element 2
            let row3_data2 = document.createElement('td');
            row3_data2.textContent = response.created_at;

            // Append row elements to row
            row1.appendChild(row1_data1)
            row1.appendChild(row1_data2)
            row2.appendChild(row2_data1)
            row2.appendChild(row2_data2)
            row3.appendChild(row3_data1)
            row3.appendChild(row3_data2);

            // Append row to table
            MyTable.appendChild(row1)
            MyTable.appendChild(row2)
            MyTable.appendChild(row3)

           // Remove old picture and table
           divUser.innerHTML = "";

            // Append pictyure and table to div
            divUser.append(picture)
            divUser.append(MyTable)


        })
})
