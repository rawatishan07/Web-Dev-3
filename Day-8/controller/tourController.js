// Controller layer for Tour CRUD business logic

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

const createTour = (req, res) => {
    const newTour = req.body;
    tourModel.save(newTour);
    res.status(201).json(newTour);
};

const updateTour = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const updatedData = req.body;
    tourModel.update(id, updatedData);
    res.status(200).json({ message: "Tour updated successfully" });
};

const deleteTourById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    tourModel.deleteTour(id);
    res.status(200).json({ message: "Tour deleted successfully" });
};

module.exports = {
    getAllTour,
    getTourById,
    createTour,
    updateTour,
    deleteTourById
};
