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

describe('Testing POST HTTP /users requests', () => {
  beforeEach(() => {
    resetTestData();
  });
  
  after(() => {
    resetTestData();
  });

  it('Should return status 200 if successfully created', async () => {
    const user = {
      name: 'John',
      job: 'Desenvolvedor',
    };

    const response = await request(app)
      .post('/users')
      .send(user)
      .expect(201);

    const { body } = response;
    assert.strictEqual(response.status, 201);
    assert.strictEqual(body.id, 2);
    assert.strictEqual(body.name, 'John');
    assert.strictEqual(body.job, 'Desenvolvedor');
  });

  it('Should return status 400 when it does not receive body "name" in the url', async () => {
    const user = {
      job: 'Desenvolvedor',
    };

    const response = await request(app)
      .post('/users')
      .send(user)
      .expect(400);
    
    const { body } = response;

    assert.strictEqual(response.status, 400);
    assert.strictEqual(body.message, 'O parâmetro "name" é obrigatório.');
  });

  it('Should return status 400 when it does not receive body "job" in the url', async () => {
    const user = {
      name: 'John',
    };

    const response = await request(app)
      .post('/users')
      .send(user)
      .expect(400);
    
    const { body } = response;

    assert.strictEqual(response.status, 400);
    assert.strictEqual(body.message, 'O parâmetro "job" é obrigatório.');
  });
});
