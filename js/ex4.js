// Grab form information
const formElement = document.querySelector("form");

// Shows all user input and cancels form data sending
formElement.addEventListener("submit", e => {

    // Create a FormData object, passing the form as a parameter
    const formData = new FormData(e.target);


    // // Test - print out each value
    // const name = e.target.elements.name.value;
    // const email = e.target.elements.emailAddress.value;
    // const payment = e.target.elements.payment.value;
    // const x = e.target.elements.confirmation.checked;
    // const location = e.target.elements.location.value;
    // if (x === true) {
    //     promotion = "on"
    // } else {
    //     promotion = "off"
    // }

    // console.log(`Username: ${name}, email: ${email}, payment: ${payment}, confirmation: ${promotion}}, location: ${location}`);


    // Get the div
    const myDiv = document.getElementById("myDiv");
    // Clear the div
    myDiv.innerHTML = "";

    // Create table element
    let MyTable = document.createElement('table');

    // Create first row
    let row1 = document.createElement('thead');
    // create row element 1
    let row1_data1 = document.createElement('td');
    row1_data1.textContent = "Key";
    // create row element 2
    let row1_data2 = document.createElement('td');
    row1_data2.textContent = "Value";

    // Append row1 elements to row
    row1.appendChild(row1_data1)
    row1.appendChild(row1_data2)

    // Append row to table
    MyTable.appendChild(row1)

    //loop through key value pairs
    for ([key, val] of formData) {
        console.log(`Key: ${key}, Value: ${val}`);

        // Create new row
        let row = document.createElement('tr');
        // create row element 1
        let row_data1 = document.createElement('td');
        row_data1.textContent = key;
        // create row element 2
        let row_data2 = document.createElement('td');
        row_data2.textContent = val;

        // Append row elements to row
        row.appendChild(row_data1)
        row.appendChild(row_data2)
        MyTable.appendChild(row)
    };



    myDiv.append(MyTable)

    e.preventDefault(); // Cancel form data sending


});

