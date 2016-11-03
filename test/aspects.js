const expect = require('chai').expect;
const RefocusClient = require('../index');

describe('aspects', () => {
  const rc = new RefocusClient('test', 'v1', 'abcdefg');

  it('getAspects', (done) => {
    rc.getAspects()
    .then((res) => done('Uh oh'))
    .catch((err) => {
      const opts = err.options;
      expect(opts.headers).to.have.property('Authorization', 'abcdefg');
      expect(opts.json).to.be.true;
      expect(opts).to.have.property('method', 'GET');
      expect(opts.resolveWithFullResponse).to.be.false;
      expect(opts.simple).to.be.false;
      expect(opts).to.have.property('uri', 'test/v1/aspects');
      expect(opts.transform).to.be.undefined;
      expect(opts.transform2xxOnly).to.be.false;
      done();
    });
  }); // getAspects

  it('getAspect', (done) => {
    rc.getAspect('a')
    .then((res) => done('Uh oh'))
    .catch((err) => {
      const opts = err.options;
      expect(opts.headers).to.have.property('Authorization', 'abcdefg');
      expect(opts.json).to.be.true;
      expect(opts).to.have.property('method', 'GET');
      expect(opts.resolveWithFullResponse).to.be.false;
      expect(opts.simple).to.be.false;
      expect(opts).to.have.property('uri', 'test/v1/aspects/a');
      expect(opts.transform).to.be.undefined;
      expect(opts.transform2xxOnly).to.be.false;
      done();
    });
  }); // getAspect

  it('addAspect', (done) => {
    rc.addAspect({ name: 'b', timeout: '10s' })
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
      expect(opts).to.have.property('uri', 'test/v1/aspects');
      expect(opts.transform).to.be.undefined;
      expect(opts.transform2xxOnly).to.be.false;
      done();
    });
  }); // addAspect

  it('patchAspect', (done) => {
    rc.patchAspect('a', { description: 'Lorem ipsum dolor' })
    .then((res) => done('Uh oh'))
    .catch((err) => {
      const opts = err.options;
      expect(opts.body).to.have.property('description', 'Lorem ipsum dolor');
      expect(opts.headers).to.have.property('Authorization', 'abcdefg');
      expect(opts.json).to.be.true;
      expect(opts).to.have.property('method', 'PATCH');
      expect(opts.resolveWithFullResponse).to.be.false;
      expect(opts.simple).to.be.false;
      expect(opts).to.have.property('uri', 'test/v1/aspects/a');
      expect(opts.transform).to.be.undefined;
      expect(opts.transform2xxOnly).to.be.false;
      done();
    });
  }); // patchAspect

  it('deleteAspect', (done) => {
    rc.deleteAspect('a')
    .then((res) => done('Uh oh'))
    .catch((err) => {
      const opts = err.options;
      expect(opts.headers).to.have.property('Authorization', 'abcdefg');
      expect(opts.json).to.be.true;
      expect(opts).to.have.property('method', 'DELETE');
      expect(opts.resolveWithFullResponse).to.be.false;
      expect(opts.simple).to.be.false;
      expect(opts).to.have.property('uri', 'test/v1/aspects/a');
      expect(opts.transform).to.be.undefined;
      expect(opts.transform2xxOnly).to.be.false;
      done();
    });
  }); // deleteAspect
}); // aspects
