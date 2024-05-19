document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello, world!');
});

document.querySelector('button').addEventListener('click', () => {alert('Button clicked!');});


// MAP //
// Initialize the map and set its view to a chosen geographical coordinates and zoom level
var map = L.map('map').setView([32.8328, -117.2713], 12);


// Add a tile layer to the map (OpenStreetMap in this case)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

var markersGroup = L.featureGroup().addTo(map);

// Function to load and parse the CSV file
function loadCSV() {
    Papa.parse('current_buoy_data.csv', {
        download: true,
        header: true,
        complete: function(results) {
            console.log(results)
            plotData(results.data);
        }
    });
}

// Function to plot data on the map
function plotData(data) {
    data.forEach(function(row) {
        if (row.latitude && row.longitude) {
            var popupContent = `
                <strong>Name:</strong> ${row.NAME}<br>
                <strong>Latitude:</strong> ${row.latitude}<br>
                <strong>Longitude:</strong> ${row.longitude}<br>
                <strong>Swell Direction:</strong> ${row.SwD}
            `;
            var marker = L.marker([row.latitude, row.longitude]).bindPopup(popupContent);
            markersGroup.addLayer(marker);

        }
    });
}

loadCSV();
