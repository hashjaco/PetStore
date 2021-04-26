import { expect, server, BASE_URL } from './setup';
import { petfinderClientId, petfinderClientSecret } from '../src/settings';

// Make a request to get the base endpoint and assert
//  that the res.body object has a message key with a value
//  of "Environment variable is coming across."
describe('Index page test', () => {
  it('gets base url', (done) => {
    server
      .get(`${BASE_URL}/`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal(
          'Environment variable is coming across.'
        );
        done();
      });
  });
});

describe('Auth page test', () => {
  it('gets auth url', (done) => {
    server
      .get(`${BASE_URL}/auth`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal(
          `ID: ${petfinderClientId}   SECRET: ${petfinderClientSecret}`
        );
        done();
      });
  });
});

// With the test command, our tests are executed with "nyc"
//  and also generates three kinds of coverage reports:
//  1) an HTML report, outputted to the coverage folder
//  2) a text report outputted to the terminal
//  3) an lcov report outputted to the .nyc_output/ folder
