const checkNameQueryParam = (req, res, next) => {
  const { name } = req.query;
  if (!name) {
    return res.status(400).json({ message: 'O parâmetro "name" é obrigatório.' });
  }

  next();
};

const checkIdQueryParam = (req, res, next) => {
  const { id } = req.query;
  if (!id) {
    return res.status(400).json({ message: 'O parâmetro "name" é obrigatório.' });
  }

  next();
};

module.exports = {
  checkNameQueryParam,
  checkIdQueryParam,
};
