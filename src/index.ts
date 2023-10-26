import express from 'express';
import { faker } from '@faker-js/faker';
import {CentreonService} from "./service/centreonService";

const app = express();
const port = 3000; // PORTA DA API

const centreonService = new CentreonService();

// Endpoint para gerar uma string aleatória
app.get('/randomstring', (req, res) => {
  const randomString = faker.lorem.words(1);
  res.json({ string: randomString });
});

// Endpoint para gerar um número aleatório
app.get('/randomnumber', (req, res) => {
  const randomNumber = faker.number;
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

