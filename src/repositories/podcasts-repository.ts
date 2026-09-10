import fs from "fs"; // Pacote do Node.js para manipulação de arquivos de sistema
import path from "path"; // Pacote do Node.js para manipulação de caminhos de arquivos
import type { PodcastModel } from "../models/podcast-model";

const pathData = path.join(__dirname, "../repositories/podcasts.json"); // dirname é uma variável global do Node.js que representa o diretório atual do arquivo em execução

export const repositoryPodcast = async (
  podcastName?: string
): Promise<PodcastModel[]> => {
  const language = "utf-8";

  const rawData = fs.readFileSync(pathData, language);
  let jsonFile = JSON.parse(rawData);

  if (podcastName) {
    // Filtra os episódios do podcast com base no nome do podcast fornecido
    jsonFile = jsonFile.filter(
      (podcast: PodcastModel) => podcast.podcastName === podcastName
    );
  }

  return jsonFile;
};
