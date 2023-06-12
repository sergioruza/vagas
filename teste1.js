const data = require("./fakeData");
const fs = require('fs');

const getUser = (req, res) => {
    const { name } = req.query;
    const findByName = data.find((e) => e.name.toLowerCase() === name.toLowerCase());

    if (!findByName) {
        return res.status(404).json({ message: 'Sorry, the requested record was not found.' });
    }
    
    return res.status(200).json(findByName);
};

const getUsers = (_req, res) => {
    if (data.length === 0) {
        return res.status(404).json({ message: 'No records found in the database.' });
    }

    return res.status(200).json(data);
};

module.exports = {
    getUser,
    getUsers
};
