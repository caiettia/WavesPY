document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello, world!');
});

document.querySelector('button').addEventListener('click', () => {
    alert('Button clicked!');
});

// Initialize the map and set its view to a chosen geographical coordinates and zoom level
var map = L.map('map').setView([32.8328, -117.2713], 12);

// Add a tile layer to the map (OpenStreetMap in this case)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker to the map
L.marker([32.8328, -117.2713]).addTo(map)
    .bindPopup('Homebase.<br> We can go from here!')
    .openPopup();