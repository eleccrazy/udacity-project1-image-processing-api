import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test suite for available endpoints', () => {
  it('Expect the /api endpoint to respond with 200 ok status code', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });
  it('Expect the /api/available endpoint to respond with 200 ok status code', async () => {
    const response = await request.get('/api/available');
    expect(response.status).toBe(200);
  });
  it('Expect the /api/images?filename=fjord&width=200&height=300 to respond with 200 ok status code', async () => {
    const response = await request.get(
      '/api/images?filename=fjord&width=200&height=300'
    );
    expect(response.status).toBe(200);
  });
  it('Expect 400 response code for missing one of query string parameters', async () => {
    const response = await request.get('/api/images?filename=fjord&width=300');
    expect(response.status).toBe(400);
  });
  it('Expect 400 response code for image not found', async () => {
    const response = await request.get(
      '/api/images?filename=invalidName&width=400&height=400'
    );
    expect(response.status).toBe(400);
  });
});
