// Model layer for reading tour dataset

const fs = require('fs');
const path = require('path');

const tourFilePath = path.join(__dirname, '../data/tour.json');

const getAll = () => {
    const data = fs.readFileSync(tourFilePath, 'utf-8');
    return JSON.parse(data);
};

const getById = (id) => {
    const data = fs.readFileSync(tourFilePath, 'utf-8');
    const tours = JSON.parse(data);
    return tours.find(t => t.id === id);
};

module.exports = {
    getAll,
    getById
};
