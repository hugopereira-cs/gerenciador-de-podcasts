import type { PodcastModel } from "./podcast-model";

// Aplicando DTO (Data Transfer Object) para definir a interface de retorno da API
export interface PodcastTransferModel {
  statusCode: number;
  body: PodcastModel[];
}
