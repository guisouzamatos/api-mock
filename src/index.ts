import express from 'express';
import { faker } from '@faker-js/faker';
import {CentreonService} from "./service/centreonService";

const app = express();
const port = 2500; // PORTA DA API

const centreonService = new CentreonService();

// Endpoint para Buscar Historico Centreon Pelo ServicoId
app.get('', (req, res) => {
  if (req.query.object == 'centreon_realtime_services') {
    return centreonService.retornoServicoCentreon(req.query.search);
  }
  if (req.query.object == 'centreon_metric') {
    return centreonService.retornoHistoricoCentreon(req.query.ids);
  }
});

app.listen(port, () => {
  console.log(`Servidor em execução na porta ${port}`);
});

