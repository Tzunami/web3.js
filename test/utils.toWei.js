var chai = require('chai');
var utils = require('../lib/utils/utils');
var assert = chai.assert;

describe('lib/utils/utils', function () {
    describe('toSeed', function () {
        it('should return the correct value', function () {
            
            assert.equal(utils.toSeed(1, 'wei'),    '1');
            assert.equal(utils.toSeed(1, 'kwei'),   '1000');
            assert.equal(utils.toSeed(1, 'Kwei'),   '1000');
            assert.equal(utils.toSeed(1, 'babbage'),   '1000');
            assert.equal(utils.toSeed(1, 'mwei'),   '1000000');
            assert.equal(utils.toSeed(1, 'Mwei'),   '1000000');
            assert.equal(utils.toSeed(1, 'lovelace'),   '1000000');
            assert.equal(utils.toSeed(1, 'gwei'),   '1000000000');
            assert.equal(utils.toSeed(1, 'Gwei'),   '1000000000');
            assert.equal(utils.toSeed(1, 'shannon'),   '1000000000');
            assert.equal(utils.toSeed(1, 'szabo'),  '1000000000000');
            assert.equal(utils.toSeed(1, 'finney'), '1000000000000000');
            assert.equal(utils.toSeed(1, 'ether'),  '1000000000000000000');
            assert.equal(utils.toSeed(1, 'kether'), '1000000000000000000000');
            assert.equal(utils.toSeed(1, 'grand'),  '1000000000000000000000');
            assert.equal(utils.toSeed(1, 'mether'), '1000000000000000000000000');
            assert.equal(utils.toSeed(1, 'gether'), '1000000000000000000000000000');
            assert.equal(utils.toSeed(1, 'tether'), '1000000000000000000000000000000');

            assert.equal(utils.toSeed(1, 'kwei'),    utils.toSeed(1, 'femtoether'));
            assert.equal(utils.toSeed(1, 'szabo'),   utils.toSeed(1, 'microether'));
            assert.equal(utils.toSeed(1, 'finney'),  utils.toSeed(1, 'milliether'));
            assert.equal(utils.toSeed(1, 'milli'),    utils.toSeed(1, 'milliether'));
            assert.equal(utils.toSeed(1, 'milli'),    utils.toSeed(1000, 'micro'));

            assert.throws(function () {utils.toSeed(1, 'wei1');}, Error);
        });
    });
});
