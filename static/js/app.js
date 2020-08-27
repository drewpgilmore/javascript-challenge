// from data.js
var tableData = data;

//store date selected by 
//var date_selected = document.getElementById("datetime");
function search_data(date) {
    // empty list for matching sightings to be appended to table
    matches = [];
    // loop through data to search for matching dates
    tableData.forEach(function(sighting){
        if (sighting.datetime == date) {
            matches.push(sighting);
        }
    });
    return matches;
}




// function for "filter table" button 
function filterTable() {
    // insert table appending functionality here
    // placeholder alert
    var target_date = document.forms['date-search']['search-date'].value;
    matchedSightings = search_data(target_date);
    numMatches = matchedSightings.length;
    alert(numMatches);
}