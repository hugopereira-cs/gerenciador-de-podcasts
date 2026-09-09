import { IncomingMessage, ServerResponse } from 'http';
import { serviceListEpisodes } from '../services/list-episodes-service';

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content = await serviceListEpisodes();
  
  res.writeHead(200, { 'Content-type': 'application/json' }); // Escreve os cabeçalhos da resposta HTTP antes de enviar o corpo da resposta "res.end()"
  res.end(
    JSON.stringify(content)
  );
};
