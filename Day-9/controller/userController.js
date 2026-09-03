// Controller layer for User CRUD operations

const userModel = require('../model/userModel');

const getAllUser = (req, res) => {
    const users = userModel.getAll();
    res.json(users);
};

const getUserById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const user = userModel.getById(id);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

const createUser = (req, res) => {
    const newUser = req.body;
    userModel.save(newUser);
    res.status(201).json(newUser);
};

const updateUser = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const updatedData = req.body;
    userModel.update(id, updatedData);
    res.status(200).json({ message: "User updated successfully" });
};

const deleteUserById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    userModel.deleteUser(id);
    res.status(200).json({ message: "User deleted successfully" });
};

module.exports = {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUserById
};
