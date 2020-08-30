const User = require('../models/user');

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((u) => res.status(200).send(u))
    .catch((err) => {
      const ERROR_CODE = 400;
      if (err.name === 'ErrorName') res.status(ERROR_CODE).send({ message: `Произошла ошибка ${err}` });
    });
};

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((u) => res.status(200).send(u))
    .catch((err) => res.status(500).send({ message: `Произошла ошибка ${err}` }));
};

module.exports.getUserId = (req, res) => {
  User.findById(req.params.id)
    .then((u) => res.status(200).send(u))
    .catch((err) => res.status(500).send({ message: `Произошла ошибка ${err}` }));
};

module.exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(req.user._id,
    {
      name: req.body.name,
      about: req.body.about,
    })
    .then((u) => res.status(200).send(u))
    .catch((err) => {
      const ERROR_CODE = 400;
      if (err.name === 'ErrorName') res.status(ERROR_CODE).send({ message: `Произошла ошибка ${err}` });
    });
};

module.exports.updateAvatar = (req, res) => {
  User.findByIdAndUpdate(req.user._id,
    {
      avatar: req.body.avatar,
    })
    .then((u) => res.status(200).send(u))
    .catch((err) => {
      const ERROR_CODE = 400;
      if (err.name === 'ErrorName') res.status(ERROR_CODE).send({ message: `Произошла ошибка ${err}` });
    });
};
