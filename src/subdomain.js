var domain = require('domain.js'),
    parse = require('url').parse;

module.exports = function (url, protocol) {
  if(typeof url === 'string' && protocol) url = parse(protocol + url);
  if(typeof url === 'string' && !protocol) url = parse(url);
  if(!url.hostname) return '';
  var subdomain = url.hostname.match(new RegExp('(.*?).' + domain(url) + '$'));
  if(subdomain) return subdomain[1];
  else return '';
};