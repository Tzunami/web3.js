var chai = require('chai');
var utils = require('../lib/utils/utils');
var assert = chai.assert;

describe('lib/utils/utils', function () {
    describe('toSeed', function () {
        it('should return the correct value', function () {
            
            assert.equal(utils.toSeed(1, 'seed'),      '1');
            assert.equal(utils.toSeed(1, 'little'),    '10');
            assert.equal(utils.toSeed(1, 'so'),        '100');
            assert.equal(utils.toSeed(1, 'maes'),      '1000');
            assert.equal(utils.toSeed(1, 'skydancer'), '10000');
            assert.equal(utils.toSeed(1, 'nottaway'),  '100000');
            assert.equal(utils.toSeed(1, 'jack'),      '1000000');			
            assert.equal(utils.toSeed(1, 'tien'),      '10000000');
            assert.equal(utils.toSeed(1, 'luck'),      '100000000');			
            assert.equal(utils.toSeed(1, 'chief'),     '1000000000');
            assert.equal(utils.toSeed(1, 'wawatie'),   '10000000000');
            assert.equal(utils.toSeed(1, 'ratt'),      '100000000000');			
            assert.equal(utils.toSeed(1, 'rajpal'),    '1000000000000');
            assert.equal(utils.toSeed(1, 'fish'),      '10000000000000');
            assert.equal(utils.toSeed(1, 'tilly'),     '100000000000000');
            assert.equal(utils.toSeed(1, 'kam'),       '1000000000000000');			
            assert.equal(utils.toSeed(1, 'penny'),     '10000000000000000');
            assert.equal(utils.toSeed(1, 'nickel'),    '50000000000000000');
            assert.equal(utils.toSeed(1, 'dime'),      '100000000000000000');
			assert.equal(utils.toSeed(1, 'quarter'),   '250000000000000000');
			assert.equal(utils.toSeed(1, 'tree'),      '1000000000000000000');
			
            assert.throws(function () {utils.toSeed(1, 'seed1');}, Error);
        });
    });
});
