import * as http from 'http';
import {
  getFilterEpisodes,
  getListEpisodes,
} from './controllers/podcasts-controller';

// Criando um servidor HTTP
const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {

    // QueryString
    const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""];

    // Listar podcasts
    if (req.method === 'GET' && baseUrl === '/api/list') {
      await getListEpisodes(req, res);
    }

    // Filtrar por nome
    if (req.method === 'GET' && baseUrl === '/api/episode') {
      await getFilterEpisodes(req, res);
    }
  }
);

const port = process.env.PORT;

// Iniciando o servidor na porta 3333
server.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}.`);
});
