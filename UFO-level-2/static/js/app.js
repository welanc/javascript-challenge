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
var selectCity = d3.select("#select-city");
var selectState = d3.select("#select-state");
var selectCountry = d3.select("#select-country");
var selectShape = d3.select("#select-shape");

// Get the dates from the data
var dateMapped = tableData.map(sightings => sightings.datetime);

// Get only unique dates from data
var uniqueDates = [...new Set(dateMapped)];

var datePlaceHolder = selectDate.append("option").text("Select Date");

uniqueDates.forEach((date) => {
    selectDate.append("option").text(date);
});



// Filtered map based on previous search criteria
function mapCriteria(criteria, inputKey, userValue) {
    // Get the dates from the data
    var criteriaMapped = tableData.filter(sightings => sightings[inputKey] === userValue);
    var crtieriaFiltered = criteriaMapped.map(sightings => sightings[criteria]);
    // Get only unique dates from data
    var uniqueCriteria = [...new Set(crtieriaFiltered)];
    return uniqueCriteria;
};

// Create event handlers 
selectDate.on("change", firstEnter);

// Complete the event handler function for the form
function firstEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Clear list if it is not empty
    selectCity.html("");
    var getDate = d3.select("#select-date").property("value");
    var uniqueCities = mapCriteria("city", "datetime", getDate);

    console.log(uniqueCities);

    var cityPlaceHolder = selectCity.append("option").text("Select City");
    uniqueCities.forEach((city) => {
        selectCity.append("option").text(city);
    });
};

// Create event handlers 
selectCity.on("change", secondEnter);


// Complete the event handler function for the form
function secondEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Clear list if it is not empty
    selectState.html("");

    var getCity = d3.select("#select-city").property("value");
    var uniqueStates = mapCriteria("state", "city", getCity);

    console.log(uniqueStates);

    var statePlaceHolder = selectState.append("option").text("Select State");
    uniqueStates.forEach((state) => {
        selectState.append("option").text(state);
    });
};

// Create event handlers 
selectState.on("change", thirdEnter);


// Complete the event handler function for the form
function thirdEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Clear list if it is not empty
    selectCountry.html("");
    var getState = d3.select("#select-state").property("value");
    var uniqueCountries = mapCriteria("country", "state", getState);

    console.log(uniqueCountries);

    var countryPlaceHolder = selectCountry.append("option").text("Select Country");
    uniqueCountries.forEach((country) => {
        selectCountry.append("option").text(country);
    });
};

// Create event handlers 
selectCountry.on("change", fourthEnter);

// Complete the event handler function for the form
function fourthEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Clear list if it is not empty
    selectShape.html("");
    var getCity = d3.select("#select-city").property("value");
    var uniqueShapes = mapCriteria("shape", "city", getCity);

    console.log(uniqueShapes);

    var shapePlaceHolder = selectShape.append("option").text("Select Shape");
    uniqueShapes.forEach((shape) => {
        selectShape.append("option").text(shape);
    });
};



selectShape.on("change", finalEnter);
button.on("click", finalEnter);


function finalEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Clear all data from previous searches
    tbody.html("");

    // Get all current search criteria
    dateValue = selectDate.property("value");
    cityValue = selectCity.property("value");
    stateValue = selectState.property("value");
    countryValue = selectCountry.property("value");
    shapeValue = selectShape.property("value");

    // Filter based on all criteria
    var filteredData = tableData.filter(sighting =>
        (sighting.datetime === dateValue) &&
        (sighting.city === cityValue) &&
        (sighting.state === stateValue) &&
        (sighting.country === countryValue) &&
        (sighting.shape === shapeValue)
    );

    filteredData.forEach((ufoSighting) => {
        // Use d3 to append one table row `tr` for each UFO sighting object
        var row = tbody.append("tr");

        // Use `Object.entries` to console.log each UFO sighting value
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

// // Function to create new list to hold select dropdown
// function newDropDowns(idName) {
//     var newSelect = filters.append("li")
//         .attr("class", "filter list-group-item")
//         .append("select")
//         .attr("class", "form-control")
//         .attr("id", idName);
//     return newSelect;
// };



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