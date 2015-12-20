'use strict';

var crossOperationOnTwoArrays = require('./cross-operation-on-two-arrays');

function addition(val1, val2) {
    return val1 + val2;
}

module.exports = crossOperationOnTwoArrays.bind(null, addition);
