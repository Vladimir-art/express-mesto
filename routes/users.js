const users = require('express').Router(); // создаем роутер
const path = require('path');
const fs = require('fs');

const userJson = path.join(__dirname, '..', 'data', 'users.json');// импортируем данные для роутинга

users.get('/', (req, res) => { // при гет запросе передаем список подьзователей
  fs.readFile(userJson, (err, data) => {
    if (err) {
      return res.status(500).send({ Error: err.message });
    }
    return res.send(JSON.parse(data));
  });
});

users.get('/:id', (req, res) => { // при динамическом роут
  fs.readFile(userJson, (err, data) => {
    if (err) {
      return res.status(500).send({ Error: err.message });
    }
    const userId = JSON.parse(data).find((user) => user._id === req.params.id);
    if (userId) {
      return res.status(200).send(userId);
    }
    return res.status(404).send({ message: 'Нет пользователя с таким id' });
  });
});

module.exports = { users };
