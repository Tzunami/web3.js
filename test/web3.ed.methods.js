var chai = require('chai');
var assert = chai.assert; 
var Web3 = require('../index.js');
var web3 = new Web3();
var u = require('./helpers/test.utils.js');

describe('web3.ed', function() {
    describe('methods', function() {
        u.methodExists(web3.ed, 'getBalance');
        u.methodExists(web3.ed, 'getStorageAt');
        u.methodExists(web3.ed, 'getTransactionCount');
        u.methodExists(web3.ed, 'getCode');
        u.methodExists(web3.ed, 'sendTransaction');
        u.methodExists(web3.ed, 'call');
        u.methodExists(web3.ed, 'getBlock');
        u.methodExists(web3.ed, 'getTransaction');
        u.methodExists(web3.ed, 'getUncle');
        u.methodExists(web3.ed, 'getCompilers');
        u.methodExists(web3.ed.compile, 'lll');
        u.methodExists(web3.ed.compile, 'solidity');
        u.methodExists(web3.ed.compile, 'serpent');
        u.methodExists(web3.ed, 'getBlockTransactionCount');
        u.methodExists(web3.ed, 'getBlockUncleCount');
        u.methodExists(web3.ed, 'filter');
        u.methodExists(web3.ed, 'contract');

        u.propertyExists(web3.ed, 'coinbase');
        u.propertyExists(web3.ed, 'mining');
        u.propertyExists(web3.ed, 'gasPrice');
        u.propertyExists(web3.ed, 'accounts');
        u.propertyExists(web3.ed, 'defaultBlock');
        u.propertyExists(web3.ed, 'blockNumber');
    });
});

