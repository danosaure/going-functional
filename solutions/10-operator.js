function reduce2(operation, val1, memo, val) {
    return memo.concat([operation(val1, val)]);
}

function reduce1(operation, list2, memo, val) {
    return memo.concat(list2.reduce(reduce2.bind(null, operation, val), []));
}

function addition(val1, val2) {
    return val1 + val2;
}

function crossOperationOfTwoArrays(operation, list1, list2) {
    return list1.reduce(reduce1.bind(null, operation, list2), []);
}

var crossSumOfTwoArrays = crossOperationOfTwoArrays.bind(null, addition);

module.exports = crossSumOfTwoArrays;
