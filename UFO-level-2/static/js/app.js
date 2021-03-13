// from data.js
var tableData = data;

// YOUR CODE HERE!

// Select the tbody to populate with data later
var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Select the unordered list with the id "filters"
var filters = d3.select("#filters");

// Select the "ul" by choosing the 
var selectDate = d3.select("#select-date")
var selectCountry = d3.select("#select-country");
var selectState = d3.select("#select-state");

// Get the dates from the data
var dateMapped = tableData.map(sightings => sightings.datetime);

// Get only unique dates from data
var uniqueDates = [...new Set(dateMapped)];

var datePlaceHolder = selectDate.append("option").text("Select Date");

uniqueDates.forEach((date) => {
    selectDate.append("option").text(date);
});


// Filtered map based on previous search criteria
function mapCriteria(inputKey, userValue, criteria) {
    // Get the dates from the data
    var criteriaMapped = tableData.filter(sightings => sightings[inputKey] === userValue);
    var crtieriaFiltered = criteriaMapped.map(sightings => sightings[criteria]);
    // Get only unique dates from data
    var uniqueCriteria = [...new Set(crtieriaFiltered)];
    return uniqueCriteria;
};

// // Function to create new list to hold select dropdown
// function newDropDowns(idName) {
//     var newSelect = filters.append("li")
//         .attr("class", "filter list-group-item")
//         .append("select")
//         .attr("class", "form-control")
//         .attr("id", idName);
//     return newSelect;
// };

// Create event handlers 
selectDate.on("change", firstEnter);

// Complete the event handler function for the form
function firstEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Clear list if it is not empty
    selectCountry.html("");

    var getDate = d3.select("#select-date").property("value");
    var uniqueCountries = mapCriteria("datetime", getDate, "country");

    console.log(uniqueCountries);

    var countryPlaceHolder = selectCountry.append("option").text("Select Country");
    uniqueCountries.forEach((country) => {
        selectCountry.append("option").text(country);
    });
};

// Create event handlers 
selectCountry.on("change", secondEnter);


// Complete the event handler function for the form
function secondEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Clear list if it is not empty
    selectState.html("");

    var getCountry = d3.select("#select-country").property("value");
    var uniqueStates = mapCriteria("country", getCountry, "state");

    console.log(uniqueStates);

    var countryPlaceHolder = selectState.append("option").text("Select Country");
    uniqueStates.forEach((state) => {
        selectState.append("option").text(state);
    });
};

// // Select the input element and get the raw HTML node
// var userInput = d3.select("#datetime");

// // Get the value property of the input element
// var userValue = userInput.property("value");

// console.log(userValue);
// console.log(tableData);

// // Filter data to user inputted value and store as variable
// var filteredDate = tableData.filter(date => date.datetime === userValue);

// console.log(filteredDate);

// // var filteredCountry = filteredDate.filter(country => country.cities === userCity);

// var item1 = filters.append("li")
//     .attr("class", "filter list-group-item");
// var select1 = item1.append("select")
//     .attr("class", "form-control");
// var option1 = select1.append("option")
//     .text("Select country");


// filteredDate.forEach((ufoSighting) => {
//     var countriesList = Object.entries(ufoSighting);

//     countriesList.forEach(([key, value]) => {
//         if (key === "country") {

//             select1.append("option").text(value);

//         }

//     });

// });


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