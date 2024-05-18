const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a route for the home page
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Define a route to get buoy data (for example purposes)
app.get('/api/buoys', (req, res) => {
    const buoyData = [
        { id: 1, name: 'Buoy 1', location: 'Location 1' },
        { id: 2, name: 'Buoy 2', location: 'Location 2' }
    ];
    res.json(buoyData);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});