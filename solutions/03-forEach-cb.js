function crossSumOfTwoArrays(list1, list2) {
    var solution = [];

    function forEach1(val1, index1, list1) {
        function forEach2(val2, index2, list2) {
            solution.push(val1 + val2);
        }

        list2.forEach(forEach2);
    }

    list1.forEach(forEach1);
    return solution;
}

module.exports = crossSumOfTwoArrays;
