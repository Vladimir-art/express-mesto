const express = require('express');
const path = require('path'); // подключаем модуль

const { PORT = 3000 } = process.env; // настраиваем порт

const app = express(); // подключаем модуль express

const { users, user } = require('./routes/users'); // подключаем модули с инфой о пользователе(ях)
const { cards } = require('./routes/cards'); // подключаем модули с инфой с карточками

app.use(express.static(path.join(__dirname, 'public'))); // подключаем страницу, сделанную на реакте

app.use('/', users); // используем роуты со списком пользователей
app.use('/', user); // с одним пользователем
app.use('/', cards); // список карточек
app.get('/:err', (req, res) => { // если запросы не верны, выдаем ошибку
  if (req.params.err !== 'users' && req.params.err !== 'cards') {
    res.status(404).send({ message: 'Запрашиваемой страницы не существет' });
  }
});

app.listen(PORT, () => {
  console.log('Server has been started...');
});
