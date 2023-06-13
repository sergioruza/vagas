const request = require('supertest');
const app = require('../app');
const sinon = require('sinon');
const { expect } = require('chai');
const { log } = require('console');

const expectedResponse = {
  status: 200,
  body: {
    id: 1,
    name: "João Oliveira",
    job: "Desenvolvedor",
    counter: 1
  }
};

describe('Testing HTTP /user requests', function () {
  it('It should return status 200 and the correct user', async function () {
    const stub = sinon.stub(request(app), 'get').resolves(expectedResponse);
    const name = 'João Oliveira';

    const response = await request(app)
    .get('/user')
      .query({ name });
    
    const { body } = response;
    expect(response.status).to.equal(expectedResponse.status);
    expect(body).to.be.deep.equal(expectedResponse.body)
    

    stub.restore()
  });

  it('Should return status 404 when given a non-existent name', async function () {
    const mockExpect = {status: 404, body: {message: 'Sorry, the requested record was not found.'}}
    const stub = sinon.stub(request(app), 'get').resolves(mockExpect);
    const name = 'joaozinhodede';

    const response = await request(app)
      .get('/user')
      .query({ name });
    
    expect(response.status).to.equal(mockExpect.status);
    expect(response.body).to.be.deep.equal(mockExpect.body);

    stub.restore;
  });

  it('It should return status 400 when it does not receive query "name" in the url', async function () {
    const mockExpect = { status: 400, body: { message: 'The "name" parameter is mandatory.' } };
    const stub = sinon.stub(request(app), 'get').resolves(mockExpect);
    const response = await request(app)
      .get('/user');
    
    expect(response.status).to.equal(mockExpect.status);
    expect(response.body).to.be.deep.equal(mockExpect.body);
    
    stub.restore();
  });
});