function reduce2(val1, memo2, val2, index2, list2) {
    return memo2.concat([val1 + val2]);
}

function reduce1(list2, memo1, val1, index1, list1) {
    var reduced2 = list2.reduce(reduce2.bind(null, val1), []);
    return memo1.concat(reduced2);
}

function crossSumOfTwoArrays(list1, list2) {
    return list1.reduce(reduce1.bind(null, list2), []);
}

module.exports = crossSumOfTwoArrays;
