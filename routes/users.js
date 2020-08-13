const users = require('express').Router(); // создаем роутер
const user = require('express').Router();

const userJson = require('../data/users.json'); // импортируем данные для роутинга

users.get('/users', (req, res) => { // при гет запросе передаем список подьзователей
  res.send(userJson);
});

user.get('/users/:id', (req, res) => { // при динамическом роут
  let flag = false;
  userJson.some((item) => { // если есть совпадение то отправляем пльзователю ответ с автором
    if (item._id === req.params.id) {
      flag = true;
      return res.send(item);
    }
    return flag;
  });
  if (!flag) {
    res.status(404).send({ message: 'Нет пользователя с таким id' });
  }
});

module.exports = { users, user };
