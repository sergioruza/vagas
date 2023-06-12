const readFile = require('../utils/readFile');
const writeFile = require('../utils/writeFile');

const data = readFile('./fakeData.json');

const createUser = (req, res) => {
    const {name, job} =  req.body;
    const newUser = {
        id: data[data.length - 1].id + 1,
        name,
        job,
    }

    data.push(newUser);
    writeFile('./fakeData.json', data);

    return res.status(201).json(data);
};

module.exports = {
    createUser
};