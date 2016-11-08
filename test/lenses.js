const expect = require('chai').expect;
const RefocusClient = require('../index');

describe('lenses', () => {
  const rc = new RefocusClient('test', 'v1', 'abcdefg');

  it('getLenses', (done) => {
    rc.getLenses()
    .then((res) => done('Uh oh'))
    .catch((err) => {
      const opts = err.options;
      expect(opts.headers).to.have.property('Authorization', 'abcdefg');
      expect(opts.json).to.be.true;
      expect(opts).to.have.property('method', 'GET');
      expect(opts.resolveWithFullResponse).to.be.false;
      expect(opts.simple).to.be.false;
      expect(opts).to.have.property('uri', 'test/v1/lenses');
      expect(opts.transform).to.be.undefined;
      expect(opts.transform2xxOnly).to.be.false;
      done();
    });
  }); // getLenses

  it('getLens', (done) => {
    rc.getLens('a')
    .then((res) => done('Uh oh'))
    .catch((err) => {
      const opts = err.options;
      expect(opts.headers).to.have.property('Authorization', 'abcdefg');
      expect(opts.json).to.be.true;
      expect(opts).to.have.property('method', 'GET');
      expect(opts.resolveWithFullResponse).to.be.false;
      expect(opts.simple).to.be.false;
      expect(opts).to.have.property('uri', 'test/v1/lenses/a');
      expect(opts.transform).to.be.undefined;
      expect(opts.transform2xxOnly).to.be.false;
      done();
    });
  }); // getLens

  it('addLens', (done) => {
    rc.addLens('./test/MultiTable.zip', { isPublished: true })
    .then((res) => done('Uh oh'))
    .catch((err) => {
      const opts = err.options;
      expect(opts.formData).to.have.property('isPublished', 'true');
      expect(opts.headers).to.have.property('Authorization', 'abcdefg');
      expect(opts.json).to.be.true;
      expect(opts).to.have.property('method', 'POST');
      expect(opts.resolveWithFullResponse).to.be.false;
      expect(opts.simple).to.be.false;
      expect(opts).to.have.property('uri', 'test/v1/lenses');
      expect(opts.transform).to.be.undefined;
      expect(opts.transform2xxOnly).to.be.false;
      done();
    });
  }); // addLens

  it('deleteLens', (done) => {
    rc.deleteLens('a')
    .then((res) => done('Uh oh'))
    .catch((err) => {
      const opts = err.options;
      expect(opts.headers).to.have.property('Authorization', 'abcdefg');
      expect(opts.json).to.be.true;
      expect(opts).to.have.property('method', 'DELETE');
      expect(opts.resolveWithFullResponse).to.be.false;
      expect(opts.simple).to.be.false;
      expect(opts).to.have.property('uri', 'test/v1/lenses/a');
      expect(opts.transform).to.be.undefined;
      expect(opts.transform2xxOnly).to.be.false;
      done();
    });
  }); // deleteLens
}); // lenses
