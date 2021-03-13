// from data.js
var tableData = data;

// YOUR CODE HERE!

// Select the tbody to populate with data later
var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Select the "ul" by choosing the 
var filters = d3.select("#filters")

// Create event handlers 
button.on("click", firstEnter);
form.on("submit", firstEnter);

// Complete the event handler function for the form
function firstEnter() {

    // Clear all data from previous searches
    tbody.html("");

    // Prevent the page from refreshing
    d3.event.preventDefault();


    if (userValue) {
        secondEnter();
    } else {
        // Select the input element and get the raw HTML node
        var userInput = d3.select("#datetime");

        // Get the value property of the input element
        var userValue = userInput.property("value");

        console.log(userValue);
        console.log(tableData);

        // Filter data to user inputted value and store as variable
        var filteredDate = tableData.filter(date => date.datetime === userValue);

        console.log(filteredDate);

        // var filteredCountry = filteredDate.filter(country => country.cities === userCity);

        var item1 = filters.append("li")
            .attr("class", "filter list-group-item");
        var select1 = item1.append("select")
            .attr("class", "form-control");
        var option1 = select1.append("option")
            .text("Select country");


        filteredDate.forEach((ufoSighting) => {
            var countriesList = Object.entries(ufoSighting);

            countriesList.forEach(([key, value]) => {
                if (key === "country") {
                    if (!value) {
                        select1.append("option").text(value);
                    }
                }

            });

        });


        // filteredData.forEach((ufoSighting) => {
        //     // Use d3 to append one table row `tr` for each UFO sighting object

        //     // Use `Object.entries` to console.log each UFO sighting value
        //     var keyValuePairs = Object.entries(ufoSighting.country)

        //     keyValuePairs.forEach(([key, value]) => {
        //         console.log(`${key} -> ${value}`);

        //         // Use d3 to append 1 cell per UFO sighting value 
        //         // (Date, City, State, Country, Shape, Duration, Comments)
        //         var cell = row.append("td")
        //         cell.text(value);
        //     });
        // });
    }
};


// function secondEnter() {

// };

// // Complete the event handler function for the form
// function finalEnter() {

//     // Clear all data from previous searches
//     tbody.html("");

//     // Prevent the page from refreshing
//     d3.event.preventDefault();

//     // Select the input element and get the raw HTML node
//     var userInput = d3.select("#datetime");

//     // Get the value property of the input element
//     var userValue = userInput.property("value");

//     console.log(userValue);
//     console.log(tableData);

//     // Filter data to user inputted value and store as variable
//     var filteredData = tableData.filter(date => date.datetime === userValue);

//     console.log(filteredData);

//     filteredData.forEach((ufoSighting) => {
//         // Use d3 to append one table row `tr` for each UFO sighting object
//         var row = tbody.append("tr");

//         // Use `Object.entries` to console.log each UFO sighting alue
//         var keyValuePairs = Object.entries(ufoSighting)

//         keyValuePairs.forEach(([key, value]) => {
//             console.log(`${key} -> ${value}`);

//             // Use d3 to append 1 cell per UFO sighting value 
//             // (Date, City, State, Country, Shape, Duration, Comments)
//             var cell = row.append("td")
//             cell.text(value);
//         });
//     });
// };



// Code snippet for getting dropdown menu buttons
// var button1 = div1.append("button")
//     .attr("class", "btn btn-default dropdown-toggle")
//     .attr("type", "button")
//     .attr("id", "dropdownMenu1")
//     .attr("data-toggle", "dropdown")
//     .attr("aria-haspopup", "true")
//     .attr("aria-expanded", "false");

// button1.text("Select a country");

// var span1 = button1.append("span")
//     .attr("class", "caret");

// var list1 = div1.append("ul")
//     .attr("class", "dropdown-menu")
//     .attr("aria-labelledby", "dropdownMenu1");