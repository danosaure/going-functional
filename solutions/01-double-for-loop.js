function crossSumOfTwoArrays(list1, list2) {
    var i;
    var j;
    var solution = [];
    for (i = 0; i < list1.length; i++) {
        for (j = 0; j < list2.length; j++) {
            solution.push(list1[i] + list2[j]);
        }
    }
    return solution;
}

module.exports = crossSumOfTwoArrays;
