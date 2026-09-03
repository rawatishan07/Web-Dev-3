// Model layer for Tour operations

const fs = require("fs");
const path = require("path");

const packageFilePath = path.join(__dirname, '../data/tour.json');

const getAll = () => {
    const data = fs.readFileSync(packageFilePath, 'utf-8');
    return JSON.parse(data);
};

const getById = (id) => {
    const data = fs.readFileSync(packageFilePath, 'utf-8');
    const packages = JSON.parse(data);
    return packages.find(pkg => pkg.id === id);
};

const save = (tour) => {
    const data = fs.readFileSync(packageFilePath, 'utf-8');
    const packages = JSON.parse(data);
    packages.push(tour);
    fs.writeFileSync(packageFilePath, JSON.stringify(packages, null, 2), 'utf-8');
};

const update = (id, updatedTour) => {
    const data = fs.readFileSync(packageFilePath, 'utf-8');
    const packages = JSON.parse(data);
    const index = packages.findIndex(pkg => pkg.id === id);
    if (index !== -1) {
        packages[index] = { ...packages[index], ...updatedTour };
        fs.writeFileSync(packageFilePath, JSON.stringify(packages, null, 2), 'utf-8');
    }
};

const deleteTour = (id) => {
    const data = fs.readFileSync(packageFilePath, 'utf-8');
    const packages = JSON.parse(data);
    const updatedPackages = packages.filter(pkg => pkg.id !== id);
    fs.writeFileSync(packageFilePath, JSON.stringify(updatedPackages, null, 2), 'utf-8');
};

module.exports = {
    getAll,
    getById,
    save,
    update,
    deleteTour
};
