const Crunchyroll = require('./api');
const PluginManager = require('./PluginManager');

module.exports = new PluginManager([Crunchyroll]);
