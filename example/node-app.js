#!/usr/bin/env node

var Web3 = require('../index.js');
var web3 = new Web3();

web3.setProvider(new web3.providers.HttpProvider('http://localhost:8811'));

var coinbase = web3.ed.coinbase;
console.log(coinbase);

var balance = web3.ed.getBalance(coinbase);
console.log(balance.toString(10));

