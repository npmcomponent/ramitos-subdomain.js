*This repository is a mirror of the [component](http://component.io) module [ramitos/subdomain.js](http://github.com/ramitos/subdomain.js). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/ramitos-subdomain.js`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
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