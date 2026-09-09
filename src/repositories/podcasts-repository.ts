import fs from "fs"; // Pacote do Node.js para manipulação de arquivos de sistema
import path from "path"; // Pacote do Node.js para manipulação de caminhos de arquivos
import type { Podcast } from "../models/podcast-model";



const pathData = path.join(__dirname, "../repositories/podcasts.json"); // dirname é uma variável global do Node.js que representa o diretório atual do arquivo em execução

export const repositoryPodcast = async (): Promise<Podcast[]> => {
  const rawData = fs.readFileSync(pathData, "utf-8");
  const jsonFile = JSON.parse(rawData);
  return jsonFile;
}