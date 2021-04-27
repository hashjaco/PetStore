import supertest from 'supertest';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import app from '../src/app';

// With this file, we won't have to initialize everything
//  inside each of our test files. So we import the necessary
//  packages and export what we initialized, which we can
//  then import in the files that need them.
chai.use(sinonChai);

export const { expect } = chai;
export const server = supertest.agent(app, {});
export const BASE_URL = '/v1';
