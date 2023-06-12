let data =  require("./fakeData");

const deleteUser = (req, res) => {
    const { name } =  req.query;
    const updatedUsers = data.filter((user) => user.name !== name);
    
    if (updatedUsers.length === data.length) {
        return res.status(500).json({ message: 'An error occurred while deleting the user.' });
    }

    data = updatedUsers;

    return res.status(200).json({message: updatedUsers});
};

module.exports = {
    deleteUser,
};