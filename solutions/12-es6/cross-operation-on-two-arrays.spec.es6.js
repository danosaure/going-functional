import testHelpers from './test-helpers';

import crossOperationOnTwoArrays from './cross-operation-on-two-arrays';

const expect = testHelpers.expect;


describe("crossOperationOnTwoArrays", () => {
    it("should be a function.", () => {
        expect(crossOperationOnTwoArrays).to.be.a('function');
    });

    it("should have the right numbers of results.", () => {
        const list1 = [1, 2, 3];
        const list2 = [6, 7];
        const operation = testHelpers.stub().returns(5);
        const results = crossOperationOnTwoArrays(operation, list1, list2);
        expect(operation).to.have.been.called(list1.length * list2.length);
        expect(results).to.be.an('array').to.have.length(list1.length * list2.length);
    });
});
