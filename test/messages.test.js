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

  it('should post messages', (done) => {
    const data = { name: 'Cheryl Riley', message: 'Hashim is forever mine.' };
    server
      .post(`${BASE_URL}/messages`)
      .send(data)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.messages).to.be.instanceof(Array);
        res.body.messages.forEach((m) => {
          expect(m).to.have.property('id');
          expect(m).to.have.property('name', data.name);
          expect(m).to.have.property('message', `SAYS: ${data.message}`);
        });
        done();
      });
  });
});
