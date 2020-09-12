// from data.js
var tableData = data;

// identify input and button
var dateInput = d3.select("#date-search")
var filterButton = d3.select("#filter-btn")
var table = d3.select("tbody")

// function to return date matches
function matchData(date) {   
    matches = [];
    tableData.forEach(function(sighting) {
        if (sighting.datetime == date) {
            matches.push(sighting);
        }
    });
    return matches;
}

// function for "filter table" button 
filterButton.on("click", function() {
    var searchDate = dateInput.property("value");
    
    matchedSightings = matchData(searchDate);
    table.html("");
    
    //loop through matches and add to table
    matchedSightings.forEach((match) => {
        var row = table.append("tr");
        Object.entries(match).forEach(function([key, value]) {
            row.append("td").text(value);
        })   
    })
});