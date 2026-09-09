import { repositoryPodcast } from "../repositories/podcasts-repository";

export const serviceListEpisodes = async () => {
  const data = repositoryPodcast();

  return data;
};
