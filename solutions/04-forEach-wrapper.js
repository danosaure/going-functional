function crossSumOfTwoArrays(list1, list2) {
    var solution = [];

    function forEach2(val1) {
        return function(val2, index2, list2) {
            solution.push(val1 + val2);
        };
    }

    function forEach1(val1, index1, list1) {
        list2.forEach(forEach2(val1));
    }

    list1.forEach(forEach1);
    return solution;
}

module.exports = crossSumOfTwoArrays;
