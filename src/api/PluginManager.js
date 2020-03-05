class PluginManager{  
    constructor(plugins){
      this.plugins = plugins;
    };
  
    async getAllAnimeSeries(page){
      const res = await Promise.all(this.plugins.map(plugin => plugin.getAllAnimeSeries(page)));
      return res.reduce((prev, curr) => prev.concat(curr), []);
    };
    
    async getAllSimulcasts(page){
      const res = await Promise.all(this.plugins.map(plugin => plugin.getAllSimulcasts(page)));
      return res.reduce((prev , curr) => prev.concat(curr), []);
    };

    async getAllAnimeSeriesUpdated(page){
      const res = await Promise.all(this.plugins.map(plugin => plugin.getAllAnimeSeriesUpdated(page)));
      return res.reduce((prev , curr) => prev.concat(curr), []);
    };

    async getAnimeListByAlphabet(letter){
      const res = await Promise.all(this.plugins.map(plugin => plugin.getAnimeListByAlphabet(letter)));
      return res.reduce((prev , curr) => prev.concat(curr), []);
    };

    async getAllLiveActionDrama(){
      const res = await Promise.all(this.plugins.map(plugin => plugin.getAllLiveActionDrama()));
      return res.reduce((prev , curr) => prev.concat(curr), []);
    };

    async getAnimeListByGenres(genre , page){
      const res = await Promise.all(this.plugins.map(plugin => plugin.getAnimeListByGenres(genre , page)));
      return res.reduce((prev , curr) => prev.concat(curr), []);
    }

    async getEpisodeVideoData(epsId , sub){
      const res = await Promise.all(this.plugins.map(plugin => plugin.getEpisodeVideoData(epsId, sub)));
      return res;
    }

    async getAnimeListBySeason(season , page){
      const res = await Promise.all(this.plugins.map(plugin => plugin.getAnimeListBySeason(season, page)));
      return res;
    }

    async searchAnime(query){
      const res = await Promise.all(this.plugins.map(plugin => plugin.searchAnime(query)));
      return res;
    };
  };
  
module.exports = PluginManager;