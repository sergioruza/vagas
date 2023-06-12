const data = require("./fakeData");

const getUser = (req, res) => {
    const name = req.query.name;

    const findByName = data.find((e) => e.name === name);

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
