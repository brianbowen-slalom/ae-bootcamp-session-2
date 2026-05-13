const request = require('supertest');
const { app, db } = require('../../src/app');

afterAll(() => {
  if (db) {
    db.close();
  }
});

const createItem = async (name = 'Temp Item') => {
  const response = await request(app)
    .post('/api/items')
    .send({ name })
    .set('Accept', 'application/json');

  expect(response.status).toBe(201);
  return response.body;
};

describe('TODO API integration tests', () => {
  describe('GET /api/items', () => {
    it('returns all seeded items', async () => {
      const response = await request(app).get('/api/items');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
      expect(response.body[0]).toMatchObject({
        id: expect.any(Number),
        name: expect.any(String),
      });
      expect(response.body[0]).toHaveProperty('created_at');
    });
  });

  describe('POST /api/items', () => {
    it('creates a new item', async () => {
      const response = await request(app)
        .post('/api/items')
        .send({ name: 'Integration Test Item' })
        .set('Accept', 'application/json');

      expect(response.status).toBe(201);
      expect(response.body).toMatchObject({
        id: expect.any(Number),
        name: 'Integration Test Item',
      });
      expect(response.body).toHaveProperty('created_at');
    });

    it('returns 400 when name is missing', async () => {
      const response = await request(app)
        .post('/api/items')
        .send({})
        .set('Accept', 'application/json');

      expect(response.status).toBe(400);
      expect(response.body).toEqual({ error: 'Item name is required' });
    });

    it('returns 400 when name is empty', async () => {
      const response = await request(app)
        .post('/api/items')
        .send({ name: '   ' })
        .set('Accept', 'application/json');

      expect(response.status).toBe(400);
      expect(response.body).toEqual({ error: 'Item name is required' });
    });
  });

  describe('DELETE /api/items/:id', () => {
    it('deletes an existing item', async () => {
      const item = await createItem('Delete Me');

      const deleteResponse = await request(app).delete(`/api/items/${item.id}`);
      expect(deleteResponse.status).toBe(200);
      expect(deleteResponse.body).toEqual({
        message: 'Item deleted successfully',
        id: item.id,
      });

      const secondDelete = await request(app).delete(`/api/items/${item.id}`);
      expect(secondDelete.status).toBe(404);
      expect(secondDelete.body).toEqual({ error: 'Item not found' });
    });

    it('returns 404 for unknown item id', async () => {
      const response = await request(app).delete('/api/items/999999');

      expect(response.status).toBe(404);
      expect(response.body).toEqual({ error: 'Item not found' });
    });

    it('returns 400 for invalid item id', async () => {
      const response = await request(app).delete('/api/items/not-a-number');

      expect(response.status).toBe(400);
      expect(response.body).toEqual({ error: 'Valid item ID is required' });
    });
  });
});
