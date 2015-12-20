function reduce2(val1, memo, val) {
    return memo.concat([val1 + val]);
}

function reduce1(list2, memo, val) {
    var reduced2 = list2.reduce(reduce2.bind(null, val), []);
    return memo.concat(reduced2);
}

function crossSumOfTwoArrays(list1, list2) {
    return list1.reduce(reduce1.bind(null, list2), []);
}

module.exports = crossSumOfTwoArrays;
