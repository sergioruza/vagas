const data = require("./fakeData");

module.exports =  function(req, res) {
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

    return res.status(200).json(modifiedUser);
};
