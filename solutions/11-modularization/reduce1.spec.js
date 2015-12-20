var testHelpers = require('./../test-helpers');

var reduce1 = require('./reduce1');

var expect = testHelpers.expect;


describe("reduce1", function() {
    it("should be a function.", function() {
        expect(reduce1).to.be.a('function');
    });

    it("should call the injected operation.", function() {
        var operation = testHelpers.stub().returns(5);
        var results = reduce1(operation, [1], [], 7);
        expect(operation).to.have.been.calledOnce();
        expect(operation).to.have.been.calledWith(7, 1);
        expect(results).to.deep.equal([5]);
    });

    it("should not modify params (functional).", function() {
        var original = [1, 2, 3];
        var list2 = [4, 5, 6];
        var results = reduce1(testHelpers.addition, list2, original, 9);
        expect(results).to.deep.equal([1, 2, 3, 13, 14, 15]);
        expect(original).to.deep.equal([1, 2, 3]);
        expect(list2).to.deep.equal([4, 5, 6]);
    });
});
