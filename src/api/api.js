const cloudscraper = require('cloudscraper')
const cheerio = require('cheerio')
const axios = require('axios');
const { M3U } = require("playlist-parser");
const Blob = require('node-blob');
const { oneLineTrim } = require('common-tags')
const { decode } = require('./subtitles/index.js');
const { parseXml } = require('./parseXml.js');
const { bytesToAss } = require('./subtitles/ass');
const { BASE_URL } = require('./url/index.js');


const getAnimeListBySeason = async(season , page) => {
  const res = await cloudscraper.get(`${BASE_URL}es/videos/anime/seasons/${season}/ajax_page?pg=${page}`);
  const body = await res;
  const $ = cheerio.load(body)
  
  const series = $('ul.portrait-grid li.hover-bubble').map((index, element) => new Promise(async(resolve) =>{
    const $element = $(element);
    const tempId = $element.find('a.portrait-element').attr('href');
    const id = tempId.replace(tempId[0] , '').trim();
    const title = $element.find('span.series-title').text().trim();
    const image = $element.find('img.portrait').attr('src');
    const total_eps = parseInt($element.find('span.series-data').text(), 10);
    const extra = await episodesListHanlder(id); 
    resolve({
      id: id || null,
      title: title || null,
      image: image || null,
      total_eps: total_eps || null,
      episodes: extra || null,
    })
  })).get();

  return Promise.all(series);
};

const getAnimeListByGenres = async(genre , page) => {
  const res = await cloudscraper.get(`${BASE_URL}es/videos/anime/genres/${genre}/ajax_page?pg=${page}`);
  const body = await res;
  const $ = cheerio.load(body)
  
  const series = $('ul.portrait-grid li.hover-bubble').map((index, element) => new Promise(async(resolve) =>{
    const $element = $(element);
    const tempId = $element.find('a.portrait-element').attr('href');
    const id = tempId.replace(tempId[0] , '').trim();
    const title = $element.find('span.series-title').text().trim();
    const image = $element.find('img.portrait').attr('src');
    const total_eps = parseInt($element.find('span.series-data').text(), 10);
    const extra = await episodesListHanlder(id); 
    resolve({
      id: id || null,
      title: title || null,
      image: image || null,
      total_eps: total_eps || null,
      episodes: extra || null,
    })
  })).get();

  return Promise.all(series);
};

const getAllLiveActionDrama = async() => {
  const res = await cloudscraper.get(`${BASE_URL}es/videos/drama`);
  const body = await res;
  const $ = cheerio.load(body);
  
  const series = $('ul.portrait-grid li.hover-bubble').map((index, element) => new Promise(async(resolve) =>{
    const $element = $(element);
    const tempId = $element.find('a.portrait-element').attr('href');
    const id = tempId.replace(tempId[0] , '').trim();
    const title = $element.find('span.series-title').text().trim();
    const image = $element.find('img.portrait').attr('src');
    const total_eps = parseInt($element.find('span.series-data').text(), 10);
    const extra = await episodesListHanlder(id); 
    resolve({
      id: id || null,
      title: title || null,
      image: image || null,
      total_eps: total_eps || null,
      episodes: extra || null,
    })
  })).get();

  return Promise.all(series);
};

const getAnimeListByAlphabet = async (letter) => {
  const alpha = letter.toLowerCase();
  const res = await cloudscraper(`${BASE_URL}es/videos/anime/alpha?group=${alpha}`);
  const body = await res;
  const $ = cheerio.load(body)

  const series = $('ul.landscape-grid li.group-item').map((index, element) => new Promise(async(resolve) =>{
    const $element = $(element);
    const tempId = $element.find('a.landscape-element').attr('href');
    const id = tempId.replace(tempId[0] , '').trim();
    const title = $element.find('span.series-title').text().trim();
    const image = $element.find('img.portrait').attr('src');
    const total_eps = parseInt($element.find('span.series-data').text(), 10);
    const extra = await episodesListHanlder(id); 
    resolve({
      id: id || null,
      title: title || null,
      image: image || null,
      total_eps: total_eps || null,
      episodes: extra || null,
    })
  })).get();

  return Promise.all(series);
};

const getAllAnimeSeriesUpdated = async (page) => {
  const res = await cloudscraper(`${BASE_URL}es/videos/anime/updated/ajax_page?pg=${page}`);
  const body = await res;
  const $ = cheerio.load(body)
  
  const series = $('li.group-item').map((index, element) => new Promise(async(resolve) =>{
    const $element = $(element);
    const tempId = $element.find('a.portrait-element').attr('href');
    const id = tempId.replace(tempId[0] , '').trim();
    const title = $element.find('span.series-title').text().trim();
    const image = $element.find('img.portrait').attr('src');
    const epsInfo = $element.find('span.series-data').text().trim();
    const episode = Number(epsInfo.split('–')[0].match(/\d+/)[0]);
    const extra = await episodesListHanlder(id); 
    resolve({
      id: id || null,
      title: title || null,
      image: image || null,
      episode: episode || null,
      episodes: extra[0]
    })
  })).get();

  return Promise.all(series);
};

const getAllSimulcasts = async (page) => {
  const { data } = await axios.get(`${BASE_URL}es/videos/anime/simulcasts/ajax_page?pg=${page}`);
  const $ = cheerio.load(data)

  const series = $('li.group-item').map((index, element) => new Promise(async(resolve) =>{
    const $element = $(element);
    const tempId = $element.find('a.portrait-element').attr('href');
    const id = tempId.replace(tempId[0] , '').trim();
    const title = $element.find('span.series-title').text().trim();
    const image = $element.find('img.portrait').attr('src');
    const total_eps = parseInt($element.find('span.series-data').text(), 10);
    const extra = await episodesListHanlder(id); 
    resolve({
      id: id || null,
      title: title || null,
      image: image || null,
      total_eps: total_eps || null,
      episodes: extra || null,
    })
  })).get();

  return Promise.all(series);
};

const getAllAnimeSeries = async (page) => {
  const res = await cloudscraper.get(`${BASE_URL}es/videos/anime/popular/ajax_page?pg=${page}`);
  const body = await res;
  const $ = cheerio.load(body)
  
  const series = $('li.group-item').map((index, element) => new Promise(async(resolve) =>{
    const $element = $(element);
    const tempId = $element.find('a.portrait-element').attr('href');
    const id = tempId.replace(tempId[0] , '').trim();
    const title = $element.find('span.series-title').text().trim();
    const image = $element.find('img.portrait').attr('src');
    const total_eps = parseInt($element.find('span.series-data').text(), 10);
    const extra = await episodesListHanlder(id); 
    resolve({
      id: id || null,
      title: title || null,
      image: image || null,
      total_eps: total_eps || null,
      episodes: extra || null,
    })
  })).get();

  return Promise.all(series);
};


const episodesListHanlder = async(id) => {
  const res = await cloudscraper.get(`${BASE_URL}${id}`);
  const body = await res;
  const $ = cheerio.load(body);
  const doc = [];

  $('ul.portrait-grid .group-item').each((index, element) => {
    const $element = $(element);
    const tempId = $element.find('a.episode').attr('href');
    let epsId = '';
    if(tempId !== undefined){
      epsId = tempId.replace(tempId[0], '').trim();
    }else{
      epsId = null;
    }
    const title = $element.find('.series-title').text().trim();
    let previewImage = $element.find('img').attr('src');
    const description = $element.find('p.short-desc').text().trim();
    if (previewImage === undefined) {
      previewImage = $element.find('img').attr('data-thumbnailurl')
    }

    doc.push({
      epsId: epsId || null,
      title: title || null,
      description: description || null,
      previewImage: previewImage || null,
    });
  });

  const episodes = doc.filter(doc => doc.epsId !== null);
  return Promise.all(episodes);
};

const getEpisodeVideoData = async (epsId , sub) => {
  const baseUrl = `${BASE_URL}${epsId}`
  const { data } = await axios.get(`${baseUrl}`)
  const $ = cheerio.load(data);
  const promises = [];

  const idRegex = /([0-9]+)$/g;
  const idMatches = idRegex.exec(baseUrl);
  const id = idMatches[0];
  const format = {
    id: id,
    video_format: 108,
    video_quality: 80
  }
  const xmlUrl = oneLineTrim `
      https://www.crunchyroll.com/xml/?req=RpcApiVideoPlayer_GetStandardConfig
        &media_id=${format.id}
        &video_format=${format.video_format}
        &video_quality=${format.video_quality}
      `

  const xmlData = await cloudscraper({
    url: xmlUrl,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    form: {
      current_page: baseUrl
    },
  });

  const xmlObj = await parseXml(xmlData);
  const preload = xmlObj['config:Config']['default:preload'][0];
  const subtitlesInfo = preload.subtitles[0].subtitle;
  const streamInfo = preload.stream_info[0];
  const streamFile = streamInfo.file[0];

  const streamFileData = await cloudscraper(streamFile);
  const playlist = M3U.parse(streamFileData);

  // [English , Español , Português , Italiano , Русский, Deutsch, Français]
  const subs = subtitlesInfo.map(doc => doc.$).filter(subs => subs.title.includes(sub))[0];
  const subData = await cloudscraper({
    url: subs.link
  });
  const subsObj = await parseXml(subData);
  const subsId = parseInt(subsObj.subtitle.$.id, 10);
  const subsIv = subsObj.subtitle.iv.pop();
  const subsData = subsObj.subtitle.data.pop();

  const subBytes = await decode(subsId, subsIv, subsData);
  const subtitlesText = await bytesToAss(subBytes);
  const subBlob = new Blob([subtitlesText], {
    type: 'application/octet-binary',
  });

  //const subtitles = URL.createObjectURL(subBlob);
  const url = playlist.pop().file;
  const type = 'application/x-mpegURL';

  promises.push({
    url: url || null,
    subtitle: subtitlesText || null,
    type: type || null
  });
  
  return Promise.all(promises);
};


module.exports = {
  getAllAnimeSeries,
  getAllSimulcasts,
  getAllAnimeSeriesUpdated,
  getAnimeListByAlphabet,
  getAllLiveActionDrama,
  getAnimeListByGenres,
  getAnimeListBySeason,
  getEpisodeVideoData,
};