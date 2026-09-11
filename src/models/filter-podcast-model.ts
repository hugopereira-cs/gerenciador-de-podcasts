import type { PodcastModel } from "./podcast-model";

export interface FilterPodcastModel {
  statusCode: number,
  body: PodcastModel[]
}
