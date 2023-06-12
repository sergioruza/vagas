const readFile = require('./utils/readFile');
const writeFile = require('./utils/writeFile');
const data = readFile('./fakeData.json');

updateUserById = (req, res) => {
    const { id } =  req.query;
    const { name, job } = req.body;
    const index = data.findIndex((user) => user.id == Number(id));

    if (index === -1) {
        return res.status(404).json({ message: 'Register not found.' });
    };

    const modifiedUser = {
        id,
        name,
        job,
    };

    data[index] = modifiedUser;
    writeFile('./fakeData.json', data);

    return res.status(200).json(modifiedUser);
};

module.exports = {
    updateUserById,
};