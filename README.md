RankCFB
=======

RankCFB - interactive college football polling

Setup
-----

* Install OS dependencies
 * [git](http://www.git-scm.com/)
 * [Node.js](http://nodejs.org/)
 * [mongoDB](http://www.mongodb.org/)
* Install global Node.js modules
 * bower: ([Bower](http://bower.io/))
* Get code
 * `$ git clone github.com/peap/rankcfb.git`
* Prepare environment
 * `$ cp config/env/template.js config/env/dev.js`
 * `$ vim config/env/dev.js  # edit settings as necessary`
 * `$ cp config/env/dev.js config/env/test.js`
 * `$ vim config/env/test.js  # edit settings as necessary`
 * `$ npm update`
 * `$ bower update`
 * `$ npm start`
* Try it!
 * http://127.0.0.1:3000/
* Running tests
 * `$ ./node_modules/.bin/webdriver-manager update`
 * `$ npm test`
