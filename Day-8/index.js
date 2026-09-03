// Main Express Server entry point for Tour REST API (MVC Architecture)

const express = require('express');
const app = express();

const tourRouter = require('./route/tourRouter');

app.use(express.json());
app.use('/tours', tourRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
