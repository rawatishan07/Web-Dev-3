// Express Application Server demonstrating Tour and User CRUD APIs under MVC

const express = require('express');
const app = express();

const tourRouter = require('./route/tourRouter');
const userRouter = require('./route/userRouter');

app.use(express.json());

// Routes
app.use('/tours', tourRouter);
app.use('/users', userRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
