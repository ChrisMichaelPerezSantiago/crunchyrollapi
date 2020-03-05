const {parseString} = require('xml2js');

const parseXml = (data, opts = {}) =>
  new Promise((resolve, reject) => parseString(data, opts, (err, res) => err ? reject(err) : resolve(res)));

module.exports = {parseXml}