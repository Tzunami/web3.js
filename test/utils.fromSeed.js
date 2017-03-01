var assert = require('assert');
var utils = require('../lib/utils/utils.js');

describe('lib/utils/utils', function () {
    describe('fromSeed', function () {
        it('should return the correct value', function () {
            
            assert.equal(utils.fromSeed(1000000000000000000, 'seed'),    '1000000000000000000');
            assert.equal(utils.fromSeed(1000000000000000000, 'kseed'),   '1000000000000000');
            assert.equal(utils.fromSeed(1000000000000000000, 'mseed'),   '1000000000000');
            assert.equal(utils.fromSeed(1000000000000000000, 'gseed'),   '1000000000');
            assert.equal(utils.fromSeed(1000000000000000000, 'szabo'),  '1000000');
            assert.equal(utils.fromSeed(1000000000000000000, 'finney'), '1000');
            assert.equal(utils.fromSeed(1000000000000000000, 'tree'),  '1');
            assert.equal(utils.fromSeed(1000000000000000000, 'ktree'), '0.001');
            assert.equal(utils.fromSeed(1000000000000000000, 'grand'),  '0.001');
            assert.equal(utils.fromSeed(1000000000000000000, 'mtree'), '0.000001');
            assert.equal(utils.fromSeed(1000000000000000000, 'gtree'), '0.000000001');
            assert.equal(utils.fromSeed(1000000000000000000, 'ttree'), '0.000000000001');
        });
    });
});
