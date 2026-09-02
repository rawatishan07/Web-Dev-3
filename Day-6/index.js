// Express App handling req.query and req.params routes

const express = require('express');
const app = express();

const packages = require('./data/tour');

// Home route
app.get('/', (req, res) => {
    res.send("Welcome to Tour Packages API!");
});

// Query params route: GET /packages?des=goa
app.get("/packages", (req, res) => {
    const des = req.query.des;
    if (!des) {
        return res.json(packages);
    }
    const result = packages.filter(
        (item) => item.destination.toLowerCase() === des.toLowerCase()
    );
    res.json(result);
});

// Route params route: GET /packages/:id
app.get("/packages/:id", (req, res) => {
    const id = Number(req.params.id);
    const onePack = packages.find(item => item.id === id);
    if (!onePack) {
        return res.status(404).json({ error: "Package not found" });
    }
    res.json(onePack);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
