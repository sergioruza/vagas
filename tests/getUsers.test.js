const assert = require('assert');
const request = require('supertest');
const app = require('../app');

const mockUsers = [
	{
		id: 1,
		name: "João Oliveira",
		job: "Desenvolvedor",
		counter: 1
	}
]

describe('Testing HTTP GET /users requests', function () {
  it('It should return status 200 and the correct users', async function () {
    const response = await request(app)
      .get('/users');
    
    const { body } = response;
    assert.strictEqual(response.status, 200);
    assert.strictEqual(body.length, 1);
    assert.strictEqual(body[0].id, 1);
    assert.strictEqual(body[0].name, 'João Oliveira');
  });
});