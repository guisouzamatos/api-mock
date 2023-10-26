import express from 'express';
import faker from 'faker';

const app = express();
const port = 3000;

// Endpoint para gerar uma string aleatória
app.get('/randomstring', (req, res) => {
  const randomString = faker.lorem.words(1);
  res.json({ string: randomString });
});

// Endpoint para gerar um número aleatório
app.get('/randomnumber', (req, res) => {
  const randomNumber = faker.random.number();
  res.json({ number: randomNumber });
});

// Endpoint para gerar uma data aleatória
app.get('/randomdate', (req, res) => {
  const randomDate = faker.date.past();
  res.json({ date: randomDate });
});

app.listen(port, () => {
  console.log(`Servidor em execução na porta ${port}`);
});

