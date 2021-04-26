import { expect, server, BASE_URL } from './setup';

describe('Messages', () => {
  it('gets messages page', (done) => {
    server
      .get(`${BASE_URL}/messages`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.messages).to.be.instanceof(Array);
        res.body.messages.forEach((m) => {
          expect(m).to.have.property('name');
          expect(m).to.have.property('message');
        });
        done();
      });
  });
});
