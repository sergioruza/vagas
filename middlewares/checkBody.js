const checkBody = (req, res, next) => {
  const { name, job } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'O parâmetro "name" é obrigatório.' });
  }

  if (!job) {
    return res.status(400).json({ message: 'O parâmetro "job" é obrigatório.' });
  }

  next();
};

module.exports = checkBody;