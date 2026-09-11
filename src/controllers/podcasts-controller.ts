import type { IncomingMessage, ServerResponse } from "node:http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { ContentType } from "../utils/content-type";
import type { PodcastTransferModel } from "../models/podcast-transfer-model";

// Define o tipo de conteúdo padrão para as respostas HTTP
const DEFAULT_CONTENT = { "Content-type": ContentType.JSON };

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content: PodcastTransferModel = await serviceListEpisodes();

  // Escreve os cabeçalhos da resposta HTTP
  res.writeHead(content.statusCode, DEFAULT_CONTENT);

  //Escreve no corpo da mensagem
  res.write(JSON.stringify(content.body));

  // Indica que não há mais nada para ser escrito
  res.end();
};

export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content: PodcastTransferModel = await serviceFilterEpisodes(req.url);

  // Escreve os cabeçalhos da resposta HTTP
  res.writeHead(content.statusCode, DEFAULT_CONTENT);

  //Escreve no corpo da mensagem
  res.write(JSON.stringify(content.body));

  // Indica que não há mais nada para ser escrito
  res.end();
};
