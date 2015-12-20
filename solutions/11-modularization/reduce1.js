var reduce2 = require('./reduce2');

function reduce1(operation, list2, memo, val) {
    return memo.concat(list2.reduce(reduce2.bind(null, operation, val), []));
}

module.exports = reduce1;
