const checkNameQueryParam = (req, res, next) => {
  const { name } = req.query;
  if (!name) {
    return res.status(400).json({ message: 'The "name" parameter is mandatory.' });
  }

  next();
};

const checkIdQueryParam = (req, res, next) => {
  const { id } = req.query;
  if (!id) {
    return res.status(400).json({ message: 'The "id" parameter is mandatory.' });
  }

  next();
};

module.exports = {
  checkNameQueryParam,
  checkIdQueryParam,
};
