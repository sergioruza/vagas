const readFile = require('../utils/readFile');
const writeFile = require('../utils/writeFile');

const data = readFile('./fakeData.json');

const getUser = (req, res) => {
    const { name } = req.query;
    const findByName = data.find((e) => e.name.toLowerCase() === name.toLowerCase());
    
    if (!findByName) {
        return res.status(404).json({ message: 'Sorry, the requested record was not found.' });
    }

    const indexByName = data.findIndex((user) => user.name == name);
    if (!data[indexByName].counter) {
        data[indexByName].counter = 1;
    } else {
        data[indexByName].counter += 1;
    }
    
    writeFile('./fakeData.json', data);

    return res.status(200).json(findByName);
};

const getUsers = (_req, res) => {
    if (data.length === 0) {
        return res.status(404).json({ message: 'No records found in the database.' });
    }

    data.forEach((user) => {
        if (!user.counter) {
            user.counter = 1;
        } else {
            user.counter += 1;
        }
    });

    writeFile('./fakeData.json', data);

    return res.status(200).json(data);
};

module.exports = {
    getUser,
    getUsers
};
