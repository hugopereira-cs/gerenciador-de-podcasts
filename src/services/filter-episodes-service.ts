import { IncomingMessage } from 'http';
import { repositoryPodcast } from '../repositories/podcasts-repository';

export const serviceFilterEpisodes = async (podcastName: string | undefined) => {
  // Separa a url onde há a sequência de "?p=", e armazena o segundo elemento na variável, se não existir req.url, armazena uma string vazia
  const queryString = podcastName?.split("?p=")[1] ?? "";

  const data = await repositoryPodcast(queryString);

  return data;
};
