const expect = require('chai').expect;
const RefocusClient = require('../index');

describe('subjects', () => {
  const rc = new RefocusClient('test', 'v1', 'abcdefg');

  it('getSubjects', (done) => {
    rc.getSubjects()
    .then((res) => done('Uh oh'))
    .catch((err) => {
      const opts = err.options;
      expect(opts.json).to.be.true;
      expect(opts).to.have.property('method', 'GET');
      expect(opts.resolveWithFullResponse).to.be.false;
      expect(opts.simple).to.be.false;
      expect(opts).to.have.property('uri', 'test/v1/subjects');
      expect(opts.transform).to.be.undefined;
      expect(opts.transform2xxOnly).to.be.false;
      done();
    });
  }); // getSubjects

  it('getSubject', (done) => {
    rc.getSubject('a.b.c')
    .then((res) => done('Uh oh'))
    .catch((err) => {
      const opts = err.options;
      expect(opts.json).to.be.true;
      expect(opts).to.have.property('method', 'GET');
      expect(opts.resolveWithFullResponse).to.be.false;
      expect(opts.simple).to.be.false;
      expect(opts).to.have.property('uri', 'test/v1/subjects/a.b.c');
      expect(opts.transform).to.be.undefined;
      expect(opts.transform2xxOnly).to.be.false;
      done();
    });
  }); // getSubject

  it('addChildSubject', (done) => {
    rc.addChildSubject('a.b.c', { name: 'd' })
    .then((res) => done('Uh oh'))
    .catch((err) => {
      const opts = err.options;
      expect(opts.body).to.have.property('name', 'd');
      expect(opts.json).to.be.true;
      expect(opts).to.have.property('method', 'POST');
      expect(opts.resolveWithFullResponse).to.be.false;
      expect(opts.simple).to.be.false;
      expect(opts).to.have.property('uri', 'test/v1/subjects/a.b.c/child');
      expect(opts.transform).to.be.undefined;
      expect(opts.transform2xxOnly).to.be.false;
      done();
    });
  }); // addChildSubject

  it('addRootSubject', (done) => {
    rc.addRootSubject({ name: 'd' })
    .then((res) => done('Uh oh'))
    .catch((err) => {
      const opts = err.options;
      expect(opts.body).to.have.property('name', 'd');
      expect(opts.json).to.be.true;
      expect(opts).to.have.property('method', 'POST');
      expect(opts.resolveWithFullResponse).to.be.false;
      expect(opts.simple).to.be.false;
      expect(opts).to.have.property('uri', 'test/v1/subjects');
      expect(opts.transform).to.be.undefined;
      expect(opts.transform2xxOnly).to.be.false;
      done();
    });
  }); // addRootSubject

  it('patchSubject', (done) => {
    rc.patchSubject('a.b.c', { description: 'Lorem ipsum dolor' })
    .then((res) => done('Uh oh'))
    .catch((err) => {
      const opts = err.options;
      expect(opts.body).to.have.property('description', 'Lorem ipsum dolor');
      expect(opts.json).to.be.true;
      expect(opts).to.have.property('method', 'PATCH');
      expect(opts.resolveWithFullResponse).to.be.false;
      expect(opts.simple).to.be.false;
      expect(opts).to.have.property('uri', 'test/v1/subjects/a.b.c');
      expect(opts.transform).to.be.undefined;
      expect(opts.transform2xxOnly).to.be.false;
      done();
    });
  }); // patchSubject

  it('deleteSubject', (done) => {
    rc.deleteSubject('a.b.c')
    .then((res) => done('Uh oh'))
    .catch((err) => {
      const opts = err.options;
      expect(opts.json).to.be.true;
      expect(opts).to.have.property('method', 'DELETE');
      expect(opts.resolveWithFullResponse).to.be.false;
      expect(opts.simple).to.be.false;
      expect(opts).to.have.property('uri', 'test/v1/subjects/a.b.c');
      expect(opts.transform).to.be.undefined;
      expect(opts.transform2xxOnly).to.be.false;
      done();
    });
  }); // deleteSubject
}); // subjects
