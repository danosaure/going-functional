var testHelpers = require('./../test-helpers');

var reduce2 = require('./reduce2');


var expect = testHelpers.expect;

describe("reduce2", function() {
    it("should be a function.", function() {
        expect(reduce2).to.be.a('function');
    });

    it("should call the injected operation.", function() {
        var operation = testHelpers.stub().returns(5);
        var results = reduce2(operation, 1, [], 2);
        expect(operation).to.have.been.calledOnce();
        expect(operation).to.have.been.calledWith(1, 2);
        expect(results).to.deep.equal([5]);
    });

    it("should add when inject addition.", function() {
        var results = reduce2(testHelpers.addition, 1, [], 2);
        expect(results).to.deep.equal([3]);
    });

    it("should substract when inject substraction.", function() {
        var results = reduce2(testHelpers.substraction, 1, [], 2);
        expect(results).to.deep.equal([-1]);
    });

    it("should append addition to a list.", function() {
        var original = [1, 2];
        var results = reduce2(testHelpers.addition, 1, original, 2);
        expect(results).to.deep.equal([1, 2, 3]);
    });

    it("should not modify params (functional).", function() {
        var original = [1, 2];
        reduce2(testHelpers.addition, 1, original, 2);
        expect(original).to.deep.equal([1, 2]);
    });
});
