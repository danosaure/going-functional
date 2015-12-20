var testHelpers = require('./../test-helpers');

var crossOperationOnTwoArrays = require('./cross-operation-on-two-arrays');

var expect = testHelpers.expect;


describe("crossOperationOnTwoArrays", function() {
    it("should be a function.", function() {
        expect(crossOperationOnTwoArrays).to.be.a('function');
    });

    it("should have the right numbers of results.", function() {
        var list1 = [1, 2, 3];
        var list2 = [6, 7];
        var operation = testHelpers.stub().returns(5);
        var results = crossOperationOnTwoArrays(operation, list1, list2);
        expect(operation).to.have.been.called(list1.length * list2.length);
        expect(results).to.be.an('array').to.have.length(list1.length * list2.length);
    });
});
