// from data.js
var tableData = data;

// YOUR CODE HERE!

// Select the tbody to populate with data later
var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Clear all data from previous searches
    tbody.html("");

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var userInput = d3.select("#datetime");

    // Get the value property of the input element
    var userValue = userInput.property("value");

    console.log(userValue);
    console.log(tableData);

    // Filter data to user inputted value and store as variable
    var filteredData = tableData.filter(date => date.datetime === userValue);

    console.log(filteredData);

    filteredData.forEach((ufoSighting) => {
        // Use d3 to append one table row `tr` for each UFO sighting object
        var row = tbody.append("tr");

        // Use `Object.entries` to console.log each UFO sighting alue
        var keyValuePairs = Object.entries(ufoSighting)

        keyValuePairs.forEach(([key, value]) => {
            console.log(`${key} -> ${value}`);

            // Use d3 to append 1 cell per UFO sighting value 
            // (Date, City, State, Country, Shape, Duration, Comments)
            var cell = row.append("td")
            cell.text(value);
        });
    });
};
