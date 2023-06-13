const request = require('supertest');
const app = require('../app');
const fs = require('fs');
const path = require('path');
const assert = require('assert');

const resetData = path.join(__dirname, 'fakeDataReset.json');
const originalData = '/home/sergio/Documentos/vagas/fakeData.json';

const resetTestData = () => {
  fs.copyFileSync(resetData, originalData);
};

describe('Testing HTTP /users/access requests', () => {
  beforeEach(() => {
    resetTestData();
  });
  
  after(() => {
    resetTestData();
  });

  it('Should return user access count and code 200', async () => {
    const name = 'João Oliveira';

    const response = await request(app)
      .get('/users/access')
      .query({ name });

    const { body } = response;
    assert.strictEqual(response.statusCode, 200);
    assert.strictEqual(body.message, 'Usuário João Oliveira foi lido 0 vezes.');
  });

  it('Should return status 400 when it does not receive query "name" in the url', async () => {
    const response = await request(app)
      .get('/users/access');

    const { body } = response;
    assert.strictEqual(response.statusCode, 400);
    assert.strictEqual(body.message, 'The "name" parameter is mandatory.');
  });
});
