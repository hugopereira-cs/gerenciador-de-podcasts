import type { IncomingMessage, ServerResponse } from 'http';
import { serviceListEpisodes } from '../services/list-episodes-service';
import { serviceFilterEpisodes } from '../services/filter-episodes-service';

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content = await serviceListEpisodes();

  res.writeHead(200, { 'Content-type': 'application/json' }); // Escreve os cabeçalhos da resposta HTTP antes de enviar o corpo da resposta "res.end()"
  res.end(JSON.stringify(content));
};

export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  // Separa a url onde há a sequência de "?p=", e armazena o segundo elemento na variável, se não existir req.url, armazena uma string vazia
  const queryString = req.url?.split("?p=")[1] ?? "";

  const content = await serviceFilterEpisodes(queryString);

  res.writeHead(200, { 'Content-type': 'application/json' });
  res.end(JSON.stringify(content));
  }
