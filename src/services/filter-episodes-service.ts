import type { FilterPodcastModel } from "../models/filter-podcast-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (
  podcastName: string | undefined
): Promise<FilterPodcastModel> => {
  // Define a interface de retorno
  const responseFormat: FilterPodcastModel = {
    statusCode: 0,
    body: [],
  };

  // Busca os dados
  const queryString = podcastName?.split("?p=")[1] ?? "";
  const data = await repositoryPodcast(queryString);

  // Verifica se tem conteúdo
  responseFormat.statusCode =
    data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;

  responseFormat.body = data;

  return responseFormat;
};
