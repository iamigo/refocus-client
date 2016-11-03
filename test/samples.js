const expect = require('chai').expect;
const RefocusClient = require('../index');

describe('samples', () => {
  const rc = new RefocusClient('test', 'v1', 'abcdefg');

  it('bulkUpsertSamples', (done) => {
    rc.bulkUpsertSamples([
      { name: 'a.b.c|abc', value: '1' },
      { name: 'a.b.c|def', value: '2' },
      { name: 'a.b|xyz', value: '3' },
    ])
    .then((res) => done('Uh oh'))
    .catch((err) => {
      const opts = err.options;
      expect(opts).to.have.property('body').to.have.length(3);
      expect(opts.headers).to.have.property('Authorization', 'abcdefg');
      expect(opts.json).to.be.true;
      expect(opts).to.have.property('method', 'POST');
      expect(opts.resolveWithFullResponse).to.be.false;
      expect(opts.simple).to.be.false;
      expect(opts).to.have.property('uri', 'test/v1/samples/upsert/bulk');
      expect(opts.transform).to.be.undefined;
      expect(opts.transform2xxOnly).to.be.false;
      done();
    });
  }); // bulkUpsertSamples
}); // samples
