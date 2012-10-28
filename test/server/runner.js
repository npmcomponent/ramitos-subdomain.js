var urls = require('../urls.js'),
    parse = require('url').parse,
    colors = require('colors'),
    assert = require('assert'),
    subdomain = require('../../')
    
console.log('parsed'.bold)

urls.forEach(function (url, i) {
  var expected = url.subdomain
  var result = subdomain(parse(url.url))
  assert(result === expected)
  console.log('%s %s', '✓'.green.bold, url.url)
})

console.log('unparsed'.bold)

urls.forEach(function (url, i) {
  var expected = url.subdomain
  var result = subdomain(url.url)
  assert(result === expected)
  console.log('%s %s', '✓'.green.bold, url.url)
})