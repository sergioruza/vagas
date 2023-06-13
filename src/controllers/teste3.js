const readFile = require('../utils/readFile');
const writeFile = require('../utils/writeFile');

const data = readFile('./fakeData.json');
const deleteUser = (req, res) => {
    const { name } = req.query;
    const updatedUsers = data.filter((user) => user.name !== name);
  
    if (updatedUsers.length === data.length) {
      return res.status(500).json({ message: 'An error occurred while deleting the user.' });
    }
  
    writeFile('./fakeData.json', updatedUsers);
  
    return res.status(200).json({ message: 'Successfully deleted user' });
  };

module.exports = {
    deleteUser,
};