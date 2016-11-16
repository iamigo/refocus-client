const expect = require('chai').expect;
const RefocusClient = require('../index');

describe('globalconfig', () => {
  const rc = new RefocusClient('test', 'v1', 'abcdefg');

  it('getGlobalConfigItems', (done) => {
    rc.getGlobalConfigItems()
    .then((res) => done('Uh oh'))
    .catch((err) => {
      const opts = err.options;
      expect(opts.headers).to.have.property('Authorization', 'abcdefg');
      expect(opts.json).to.be.true;
      expect(opts).to.have.property('method', 'GET');
      expect(opts.resolveWithFullResponse).to.be.false;
      expect(opts.simple).to.be.false;
      expect(opts).to.have.property('uri', 'test/v1/globalconfig');
      expect(opts.transform).to.be.undefined;
      expect(opts.transform2xxOnly).to.be.false;
      done();
    });
  }); // getGlobalConfigItems

  it('getGlobalConfigItem', (done) => {
    rc.getGlobalConfigItem('a')
    .then((res) => done('Uh oh'))
    .catch((err) => {
      const opts = err.options;
      expect(opts.headers).to.have.property('Authorization', 'abcdefg');
      expect(opts.json).to.be.true;
      expect(opts).to.have.property('method', 'GET');
      expect(opts.resolveWithFullResponse).to.be.false;
      expect(opts.simple).to.be.false;
      expect(opts).to.have.property('uri', 'test/v1/globalconfig/a');
      expect(opts.transform).to.be.undefined;
      expect(opts.transform2xxOnly).to.be.false;
      done();
    });
  }); // getGlobalConfigItem

  it('addGlobalConfigItem', (done) => {
    rc.addGlobalConfigItem({ name: 'b', timeout: '10s' })
    .then((res) => done('Uh oh'))
    .catch((err) => {
      const opts = err.options;
      expect(opts.body).to.have.property('name', 'b');
      expect(opts.body).to.have.property('timeout', '10s');
      expect(opts.headers).to.have.property('Authorization', 'abcdefg');
      expect(opts.json).to.be.true;
      expect(opts).to.have.property('method', 'POST');
      expect(opts.resolveWithFullResponse).to.be.false;
      expect(opts.simple).to.be.false;
      expect(opts).to.have.property('uri', 'test/v1/globalconfig');
      expect(opts.transform).to.be.undefined;
      expect(opts.transform2xxOnly).to.be.false;
      done();
    });
  }); // addGlobalConfigItem

  it('patchGlobalConfigItem', (done) => {
    rc.patchGlobalConfigItem('a', 'Lorem ipsum dolor')
    .then((res) => done('Uh oh'))
    .catch((err) => {
      const opts = err.options;
      expect(opts.body).to.have.property('value', 'Lorem ipsum dolor');
      expect(opts.headers).to.have.property('Authorization', 'abcdefg');
      expect(opts.json).to.be.true;
      expect(opts).to.have.property('method', 'PATCH');
      expect(opts.resolveWithFullResponse).to.be.false;
      expect(opts.simple).to.be.false;
      expect(opts).to.have.property('uri', 'test/v1/globalconfig/a');
      expect(opts.transform).to.be.undefined;
      expect(opts.transform2xxOnly).to.be.false;
      done();
    });
  }); // patchGlobalConfigItem

  it('deleteGlobalConfigItem', (done) => {
    rc.deleteGlobalConfigItem('a')
    .then((res) => done('Uh oh'))
    .catch((err) => {
      const opts = err.options;
      expect(opts.headers).to.have.property('Authorization', 'abcdefg');
      expect(opts.json).to.be.true;
      expect(opts).to.have.property('method', 'DELETE');
      expect(opts.resolveWithFullResponse).to.be.false;
      expect(opts.simple).to.be.false;
      expect(opts).to.have.property('uri', 'test/v1/globalconfig/a');
      expect(opts.transform).to.be.undefined;
      expect(opts.transform2xxOnly).to.be.false;
      done();
    });
  }); // deleteGlobalConfigItem
}); // globalconfig
