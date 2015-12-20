var chai = require('chai');
var dirtyChai = require('dirty-chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');


chai.use(dirtyChai);
chai.use(sinonChai);


function addition(val1, val2) {
    return val1 + val2;
}


function substraction(val1, val2) {
    return val1 - val2;
}


module.exports = {
    expect: chai.expect,
    spy: sinon.spy,
    stub: sinon.stub,

    addition: addition,
    substraction: substraction
};
