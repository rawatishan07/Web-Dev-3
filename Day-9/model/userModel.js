// Model layer for User operations

const fs = require("fs");
const path = require("path");

const userFilePath = path.join(__dirname, '../data/user.json');

const getAll = () => {
    const data = fs.readFileSync(userFilePath, 'utf-8');
    return JSON.parse(data);
};

const getById = (id) => {
    const data = fs.readFileSync(userFilePath, 'utf-8');
    const users = JSON.parse(data);
    return users.find(u => u.id === id);
};

const save = (user) => {
    const data = fs.readFileSync(userFilePath, 'utf-8');
    const users = JSON.parse(data);
    users.push(user);
    fs.writeFileSync(userFilePath, JSON.stringify(users, null, 2), 'utf-8');
};

const update = (id, updatedUser) => {
    const data = fs.readFileSync(userFilePath, 'utf-8');
    const users = JSON.parse(data);
    const index = users.findIndex(u => u.id === id);
    if (index !== -1) {
        users[index] = { ...users[index], ...updatedUser };
        fs.writeFileSync(userFilePath, JSON.stringify(users, null, 2), 'utf-8');
    }
};

const deleteUser = (id) => {
    const data = fs.readFileSync(userFilePath, 'utf-8');
    const users = JSON.parse(data);
    const updatedUsers = users.filter(u => u.id !== id);
    fs.writeFileSync(userFilePath, JSON.stringify(updatedUsers, null, 2), 'utf-8');
};

module.exports = {
    getAll,
    getById,
    save,
    update,
    deleteUser
};
