import dotenv from 'dotenv';

dotenv.config();
export const testEnvironmentVariable = process.env.TEST_ENV_VARIABLE;
export const petfinderClientId = process.env.PETFINDER_API_KEY;
export const petfinderClientSecret = process.env.PETFINDER_API_SECRET;
export const connectionString = process.env.CONNECTION_STRING;
