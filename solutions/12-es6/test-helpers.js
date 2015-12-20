import chai from 'chai';
import dirtyChai from 'dirty-chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';


chai.use(dirtyChai);
chai.use(sinonChai);


export default {
    expect: chai.expect,
    spy: sinon.spy,
    stub: sinon.stub,

    addition: (val1, val2) => val1 + val2,
    substraction: (val1, val2) => val1 - val2
};
