const request = require('supertest')
const { app, server } = require('../server')

test('POST /items - should create an item', async () => {
  const response = await request(app).post('/items').send({ name: 'New Item' })
  expect(response.status).toBe(201)
  expect(response.body.name).toBe('New Item')
})

test('GET /items - should retrieve all items', async () => {
  await request(app).post('/items').send({ name: 'Test Item' })
  const response = await request(app).get('/items')

  expect(response.status).toBe(200)
  expect(response.body.length).toBeGreaterThan(0)
})

test('PUT /items/:id - should update an item', async () => {
  const createResponse = await request(app)
    .post('/items')
    .send({ name: 'Item' })
  const itemId = createResponse.body.id

  const updateResponse = await request(app)
    .put(`/items/${itemId}`)
    .send({ name: 'Updated Item' })

  expect(updateResponse.status).toBe(200)
  expect(updateResponse.body.name).toBe('Updated Item')
})

test('DELETE /items/:id - should delete an item', async () => {
  const createResponse = await request(app)
    .post('/items')
    .send({ name: 'Item to Delete' })
  const itemId = createResponse.body.id

  const deleteResponse = await request(app).delete(`/items/${itemId}`)
  expect(deleteResponse.status).toBe(204)

  const getResponse = await request(app).get(`/items/${itemId}`)
  expect(getResponse.status).toBe(404)
})

afterAll(() => {
  server.close() // Close the Express server
})
