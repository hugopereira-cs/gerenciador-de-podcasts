import type { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { StatusCode } from "../utils/status-code";
import { ContentType } from "../utils/content-type";
import type { FilterPodcastModel } from "../models/filter-podcast-model";

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content = await serviceListEpisodes();

  res.writeHead(StatusCode.OK, { "Content-type": ContentType.JSON }); // Escreve os cabeçalhos da resposta HTTP antes de enviar o corpo da resposta "res.end()"
  res.end(JSON.stringify(content));
};

export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content: FilterPodcastModel = await serviceFilterEpisodes(req.url);

  res.writeHead(content.statusCode, { "Content-type": ContentType.JSON });
  res.end(JSON.stringify(content.body));
};
