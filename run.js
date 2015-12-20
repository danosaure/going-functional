var chai = require('chai');
var crossSumOfTwoArrays = require('./' + process.argv[2]);

// This is added for ES6 code.
if (crossSumOfTwoArrays.default) {
    crossSumOfTwoArrays = crossSumOfTwoArrays.default;
}

var expect = chai.expect;

var LIST1 = [11, 19, 10];
var LIST2 = [11, 17, 12];
var expected = [22, 28, 23, 30, 36, 31, 21, 27, 22];


try {
    expect(crossSumOfTwoArrays(LIST1, LIST2)).to.deep.equal(expected);
    console.log("Pass example");
} catch (e) {
    console.log("Failed example:", e.message || e);
}

try {
    expected = [22, 30, 21, 28, 36, 27, 23, 31, 22];
    expect(crossSumOfTwoArrays(LIST2, LIST1)).to.deep.equal(expected);
    console.log("Pass QA anti-smartass");
} catch (e) {
    console.log("Failed QA anti-smartass:", e.message || e);
}
