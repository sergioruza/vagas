const readFile = require('../utils/readFile');
const data = readFile('./fakeData.json');

module.exports = function(req, res){
    const { name } = req.query;

    const userByName = data.find((user) => user.name === name);
    const access = !userByName.counter ? 0 : userByName.counter;

    return res.status(200).json({ message: `Usuário ${name} foi lido ${access} vezes.` });
};