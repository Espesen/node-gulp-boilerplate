const mockery = require('mockery');
const sinon = require('sinon');
const mocks = require('./mocks');

const catchFail = done => { return (err) => { done.fail(err); }; };

describe('', () => {

  beforeEach(() => {
    mockery.enable();
    //mockery.registerMock() etc...
  });

  afterEach(function () {
    mockery.deregisterAll();
    mockery.disable();
  });

});