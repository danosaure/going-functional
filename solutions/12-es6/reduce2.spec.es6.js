import testHelpers from './test-helpers';

import reduce2 from './reduce2';


const expect = testHelpers.expect;


describe("reduce2", () => {
    it("should be a function.", () => {
        expect(reduce2).to.be.a('function');
    });

    it("should call the injected operation.", () => {
        const operation = testHelpers.stub().returns(5);
        const results = reduce2(operation, 1, [], 2);
        expect(operation).to.have.been.calledOnce();
        expect(operation).to.have.been.calledWith(1, 2);
        expect(results).to.deep.equal([5]);
    });

    it("should add when inject addition.", () => {
        const results = reduce2(testHelpers.addition, 1, [], 2);
        expect(results).to.deep.equal([3]);
    });

    it("should substract when inject substraction.", () => {
        const results = reduce2(testHelpers.substraction, 1, [], 2);
        expect(results).to.deep.equal([-1]);
    });

    it("should append addition to a list.", () => {
        const original = [1, 2];
        const results = reduce2(testHelpers.addition, 1, original, 2);
        expect(results).to.deep.equal([1, 2, 3]);
    });

    it("should not modify params (functional).", () => {
        const original = [1, 2];
        reduce2(testHelpers.addition, 1, original, 2);
        expect(original).to.deep.equal([1, 2]);
    });
});
