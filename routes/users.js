const users = require('express').Router(); // создаем роутер
const path = require('path');
const fs = require('fs');

const userJson = path.join(__dirname, '..', 'data', 'users.json');// импортируем данные для роутинга

users.get('/', (req, res) => { // при гет запросе передаем список подьзователей
  fs.readFile(userJson, (err, data) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    try {
      const json = JSON.parse(data);
      res.status(200).send(json);
    } catch (e) {
      res.status(500).send({ message: `${e.name}: ${e.message}` }); // воспроизвел ошибку при парсинге
    }
  });
});

users.get('/:id', (req, res) => { // при динамическом роут
  fs.readFile(userJson, (err, data) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    try {
      const json = JSON.parse(data);
      const userId = json.find((user) => user._id === req.params.id);
      if (userId) {
        return res.status(200).send(userId);
      }
      return res.status(404).send({ message: 'Нет пользователя с таким id' });
    } catch (e) {
      res.status(500).send({ message: `${e.name}: ${e.message}` });
    }
  });
});

module.exports = { users };
