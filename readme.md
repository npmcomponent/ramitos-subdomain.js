# subdomain.js

get the subdomain from an url

## installation

for [component](https://github.com/component/component):

    $ component install ramitos/subdomain.js

for [node.js](http://nodejs.org/):

    $ npm install subdomain.js

## usage

with string url:

```js
var subdomain = require('subdomain.js')

subdomain('http://www.example.co.uk') //=> www
```

with parsed url:

```js
var subdomain = require('subdomain.js'),
    url = require('url')

subdomain(url.parse('http://www.example.co.uk')) //=> www
```

## test [![Build Status](https://secure.travis-ci.org/ramitos/subdomain.js.png)](http://travis-ci.org/ramitos/subdomain.js)

    $ npm test

## credits

 * inspired by [URI.js](https://github.com/medialize/URI.js)

## license

MIT