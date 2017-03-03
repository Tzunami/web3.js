/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/** @file config.js
 * @authors:
 *   Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */

/**
 * Utils
 * 
 * @module utils
 */

/**
 * Utility functions
 * 
 * @class [utils] config
 * @constructor
 */


/// required to define ED_BIGNUMBER_ROUNDING_MODE
var BigNumber = require('bignumber.js');

var ED_UNITS = [
    'tree',
    'quarter',
    'dime',
    'nickel',
    'penny',
    'kam',
    'tilly',
    'fish',
    'rajpal',
    'ratt',
    'wawatie',
    'chief',
    'luck',
    'tien',
    'jack',
    'nottaway',
    'skydancer',
    'maes',
    'so',
    'little',
    'seed'	
];

module.exports = {
    ED_PADDING: 32,
    ED_SIGNATURE_LENGTH: 4,
    ED_UNITS: ED_UNITS,
    ED_BIGNUMBER_ROUNDING_MODE: { ROUNDING_MODE: BigNumber.ROUND_DOWN },
    ED_POLLING_TIMEOUT: 1000/2,
    defaultBlock: 'latest',
    defaultAccount: undefined
};

