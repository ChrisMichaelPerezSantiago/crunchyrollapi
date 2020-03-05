const PluginManager = require('./src/api/index');

(async() =>{
  const series = await PluginManager.getAllAnimeSeries(0);
  const simulcasts = await PluginManager.getAllSimulcasts(0);
  const animeByAlphabet = await PluginManager.getAnimeListByAlphabet('numeric');
  const episodeVideoData = await PluginManager.getEpisodeVideoData('es/demon-slayer-kimetsu-no-yaiba/episode-1-cruelty-782932', 'Español');
  const drama = await PluginManager.getAllLiveActionDrama();
  const genres = await PluginManager.getAnimeListByGenres('action', 0);
  const seasons = await PluginManager.getAnimeListBySeason('winter-2020' , 0);
  //console.log(seasons);
})();
