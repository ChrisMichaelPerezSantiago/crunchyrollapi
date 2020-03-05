import { Injectable } from '@nestjs/common';
import PluginManager from '../src/api/index';

@Injectable()
export class AppService {
  header(){
    return{
      message: "Crunchyroll API - 👋🌎🌍🌏",
      author: "Chris Michael",
      entries:{
       'EpisodeVideoData': '/v1/EpisodeVideoData/:epsId/:subs',
       'AllAnimeSeries': '/v1/AllAnimeSeries/:page',
       'AllSimulcasts': '/v1/AllSimulcasts/:page',
       'AnimeSeriesUpdated': '/v1/AnimeSeriesUpdated/:page',
       'AnimeListByAlphabet': '/v1/AnimeListByAlphabet/:letter',
       'Drama': '/v1/Drama/',
       'Genres': '/v1/Genres/:genre/:page',
       'AnimeListBySeasons': '/v1/AnimeListBySeasons/:season/:page'
      }
    }
  };

  async getEpisodeVideoData(epsId , sub){
    const res = await PluginManager.getEpisodeVideoData(epsId , sub)
    return res;
  };

  async getAllAnimeSeries(page){
    const res = await PluginManager.getAllAnimeSeries(page)
    return res;
  };

  async getAllSimulcasts(page){
    const res = await PluginManager.getAllSimulcasts(page)
    return res;
  }; 

  async getAllAnimeSeriesUpdated(page){
    const res = await PluginManager.getAllAnimeSeriesUpdated(page)
    return res;
  }; 

  async getAnimeListByAlphabet(letter){
    const res = await PluginManager.getAnimeListByAlphabet(letter);
    return res;
  };

  async getAllLiveActionDrama(){
    const res = await PluginManager.getAllLiveActionDrama();
    return res;
  };

  async getAnimeListByGenres(genre , page){
    const res = await PluginManager.getAnimeListByGenres(genre , page);
    return res;
  };

  async getAnimeListBySeason(season , page){
    const res = await PluginManager.getAnimeListBySeason(season , page);
    return res;
  };

  async searchAnime(search){
    const res = await PluginManager.searchAnime(search);
    return res;
  }
}
