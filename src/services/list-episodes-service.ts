export const serviceListEpisodes = async () => {
  const data = [
    {
      podcastName: 'flow',
      episode: 'CBUM - Flow #319',
      videoId: 'pQSuQmUfS30',
      categories: ['saúde', 'esporte', 'bodybuilder'],
    },
    {
      podcastName: 'flow',
      episode: 'RUBENS BARRICHELLO - Flow #339',
      videoId: '4KDGTdiOV4I',
      cover: 'https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg',
      link: 'https://www.youtube.com/watch?v=4KDGTdiOV4I',
      categories: ['esporte', 'corrida'],
    },
  ];

  return data;
};
