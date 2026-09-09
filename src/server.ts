import * as http from 'http';
import { getListEpisodes } from './controllers/podcasts-controller';

// Criando um servidor HTTP
const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.method === 'GET') {
      await getListEpisodes(req, res);
    }
  }
);

const port = process.env.PORT;

// Iniciando o servidor na porta 3333
server.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}.`);
});
