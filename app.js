const express = require('express');
const path = require('path'); // подключаем модуль

const { PORT = 3000 } = process.env; // настраиваем порт

const app = express(); // подключаем модуль express

const { users } = require('./routes/users'); // подключаем модули с инфой о пользователе(ях)
const { cards } = require('./routes/cards'); // подключаем модули с инфой с карточками

app.use(express.static(path.join(__dirname, 'public'))); // подключаем страницу, сделанную на реакте

app.use('/users', users); // используем роуты со списком пользователей
app.use('/cards', cards); // список карточек
app.use('/', (req, res) => { // если запросы не верны, выдаем ошибку
  res.status(404).send({ message: 'Запрашиваемой страницы не существет' });
});

app.listen(PORT, () => {
  console.log(`Server has been started on the ${PORT} port...`);
});
