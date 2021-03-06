# Migration 0.13.0 -> 0.14.0

web3.js version 0.14.0 supports [multiple instances of web3](https://github.com/Tzunami/web3.js/issues/297) object.
To migrate to this version, please follow the guide:

```diff
-var web3 = require('web3');
+var Web3 = require('web3');
+var web3 = new Web3();
```


# Earthdollar JavaScript API

[![Join the chat at https://gitter.im/earthdollar/web3.js](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/earthdollar/web3.js?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This is the Earthdollar compatible [JavaScript API](https://github.com/Tzunami/wiki/wiki/JavaScript-API)
which implements the [Generic JSON RPC](https://github.com/Tzunami/wiki/wiki/JSON-RPC) spec. It's available on npm as a node module, for bower and component as an embeddable js and as a meteor.js package.

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![dependency status][dep-image]][dep-url] [![dev dependency status][dep-dev-image]][dep-dev-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Stories in Ready][waffle-image]][waffle-url]

<!-- [![browser support](https://ci.testling.com/earthdollar/earthdollar.js.png)](https://ci.testling.com/earthdollar/earthdollar.js) -->

You need to run a local Earthdollar node to use this library.

[Documentation](https://github.com/Tzunami/wiki/wiki/JavaScript-API)

## Installation

### Node.js

```bash
npm install web3
```

### Meteor.js

```bash
meteor add earthdollar:web3
```

### As Browser module
Bower

```bash
bower install web3
```

Component

```bash
component install earthdollar/web3.js
```

* Include `web3.min.js` in your html file. (not required for the meteor package)

## Usage
Use the `web3` object directly from global namespace:

```js
console.log(web3); // { .., shh: ...} // it's here!
```

Set a provider (HttpProvider)

```js
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8811'));
```

There you go, now you can use it:

```js
var coinbase = web3.ed.coinbase;
var balance = web3.ed.getBalance(coinbase);
```

You can find more examples in [`example`](https://github.com/Tzunami/web3.js/tree/master/example) directory.


## Contribute!

### Requirements

* Node.js
* npm

```bash
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm
sudo apt-get install nodejs-legacy
```

### Building (gulp)

```bash
npm run-script build
```


### Testing (mocha)

```bash
npm test
```

[npm-image]: https://badge.fury.io/js/web3.png
[npm-url]: https://npmjs.org/package/web3
[travis-image]: https://travis-ci.org/earthdollar/web3.js.svg
[travis-url]: https://travis-ci.org/earthdollar/web3.js
[dep-image]: https://david-dm.org/earthdollar/web3.js.svg
[dep-url]: https://david-dm.org/earthdollar/web3.js
[dep-dev-image]: https://david-dm.org/earthdollar/web3.js/dev-status.svg
[dep-dev-url]: https://david-dm.org/earthdollar/web3.js#info=devDependencies
[coveralls-image]: https://coveralls.io/repos/earthdollar/web3.js/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/r/earthdollar/web3.js?branch=master
[waffle-image]: https://badge.waffle.io/earthdollar/web3.js.svg?label=ready&title=Ready
[waffle-url]: http://waffle.io/earthdollar/web3.js

