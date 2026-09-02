// Controller layer for handling business logic

const tourModel = require('../model/tourModel');

const getAllTour = (req, res) => {
    const tours = tourModel.getAll();
    res.json(tours);
};

const getTourById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const tour = tourModel.getById(id);
    if (tour) {
        res.status(200).json(tour);
    } else {
        res.status(404).json({ message: 'Tour not found' });
    }
};

module.exports = {
    getAllTour,
    getTourById
};
