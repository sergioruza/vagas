const data = require("./fakeData");

const getUser = ( req, res, next ) => {
    const name =  req.query.name;

    const findByName = data.find((e) => e.name === name)

    if (!findByName) {
        return res.status(404).json({ message: 'Sorry, the requested record was not found.' })
    }
    
    return res.status(200).json(findByName)
};

const getUsers = ( req, res, next ) => {
    
    res.send(data);
    
};

module.exports = {
    getUser,
    getUsers
};
