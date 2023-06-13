const assert = require('assert');
const request = require('supertest');
const app = require('../app');

describe('Testing HTTP /user requests', function () {
  it('It should return status 200 and the correct user', async function () {
    const name = 'João Oliveira';

    const response = await request(app)
    .get('/user')
      .query({ name });
    
    const { body } = response;
    assert.strictEqual(response.status, 200);
    assert.strictEqual(body.name, name);
  });

  it('Should return status 404 when given a non-existent name', async function () {
    const name = 'joaozinhodede';

    const response = await request(app)
      .get('/user')
      .query({ name });
    
    assert.strictEqual(response.status, 404);
  });

  it('It should return status 400 when it does not receive query "name" in the url', async function () {
    const response = await request(app)
      .get('/user')
    
    assert.strictEqual(response.status, 400);
  });
});