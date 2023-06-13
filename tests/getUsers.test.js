const assert = require('assert');
const request = require('supertest');
const app = require('../app');

describe('Testing HTTP GET /users requests', function () {
  it('Should return status 200 and the correct users', async function () {
    const response = await request(app)
      .get('/users');

    const { body } = response;
    assert.strictEqual(response.status, 200);
    assert.strictEqual(body.length, 1);
    assert.strictEqual(body[0].id, 1);
    assert.strictEqual(body[0].name, 'João Oliveira');
  });
});
