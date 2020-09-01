// from data.js
var tableData = data;

// identify input and button
var userInput = d3.select(".form-control")
var filterButton = d3.select("#filter-btn")
var table = d3.select("tbody")

// function to return date matches
function matchDates(date) {
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
    var targetDate = userInput.property("value");
    matchedSightings = matchDates(targetDate);
    console.log(matchedSightings);
    
    //loop through matches and add to table
    matchedSightings.forEach((match) => {
        var row = table.append("tr");
        Object.entries(match).forEach(function([key, value]) {
            row.append("td").text(value);
        })   
    })
})