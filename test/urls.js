var urls =  [
  {
    "name": "scheme and domain",
    "url": "http://www.example.org",
    "subdomain": "www",
    "domain": "example.org",
    "tld": "org"
  },
  {
    "name": "second level domain",
    "url": "http://www.example.co.uk",
    "subdomain": "www",
    "domain": "example.co.uk",
    "tld": "co.uk"
  },
  {
    "name": "qualified HTTP",
    "url": "http://www.example.org/some/directory/file.html?query=string#fragment",
    "subdomain": "www",
    "domain": "example.org",
    "tld": "org"
  },
  {
    "name": "funky suffix",
    "url": "http://www.example.org/some/directory/file.html-is-awesome?query=string#fragment",
    "subdomain": "www",
    "domain": "example.org",
    "tld": "org"
  },
  {
    "name": "complete URL",
    "url": "scheme://user:pass@www.example.org:123/some/directory/file.html?query=string#fragment",
    "subdomain": "www",
    "domain": "example.org",
    "tld": "org"
  },
  {
    "name": "host-relative: URL",
    "url": "/some/directory/file.html?query=string#fragment",
    "subdomain": "",
    "domain": "",
    "tld": ""
  },
  {
    "name": "path-relative: URL",
    "url": "../some/directory/file.html?query=string#fragment",
    "subdomain": "",
    "domain": "",
    "tld": ""
  },
  {
    "name": "missing scheme",
    "url": "user:pass@www.example.org:123/some/directory/file.html?query=string#fragment",
    "subdomain": "www",
    "domain": "example.org",
    "tld": "org"
  },
  {
    "name": "file://",
    "url": "file:///foo/bar/baz.html",
    "subdomain": "",
    "domain": "",
    "tld": ""
  },
  {
    "name": "Path containing @",
    "url": "http://www.example.org/@foobar",
    "subdomain": "www",
    "domain": "example.org",
    "tld": "org"
  },
  {
    "name": "mailto:",
    "url": "mailto:hello@example.org?subject=hello",
    "subdomain": "",
    "domain": "example.org",
    "tld": "org"
  },
  {
    "name": "magnet:",
    "url": "magnet:?xt=urn:btih:f8c020dac7a083defda1769a1196a13facc38ef6&dn=Linux+64x+server+11.10+Pt+Pt&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Ftracker.publicbt.com%3A80&tr=udp%3A%2F%2Ftracker.ccc.de%3A80",
    "subdomain": "",
    "domain": "",
    "tld": ""
  },
  {
    "name": "javascript:",
    "url": "javascript:alert(\"hello world\");",
    "subdomain": "",
    "domain": "",
    "tld": ""
  },
  {
    "name": "colon in path",
    "url": "http://en.wikipedia.org/wiki/Help:IPA",
    "subdomain": "en",
    "domain": "wikipedia.org",
    "tld": "org"
  },
  {
    "name": "colon in path without protocol",
    "url": "/wiki/Help:IPA",
    "subdomain": "",
    "domain": "",
    "tld": ""
  }
]

if(module && module.exports) module.exports = urls