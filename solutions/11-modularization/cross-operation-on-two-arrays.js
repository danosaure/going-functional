var reduce1 = require('./reduce1');

function crossOperationOnTwoArrays(operation, list1, list2) {
    return list1.reduce(reduce1.bind(null, operation, list2), []);
}

module.exports = crossOperationOnTwoArrays;
