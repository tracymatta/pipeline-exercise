const service = require('../service')

beforeEach(() => {
  service.items = []
})

test('should create a new item', () => {
  const item = service.createItem({ name: 'Test Item' })
  expect(item).toHaveProperty('id')
  expect(item.name).toBe('Test Item')
})

test('should get all items', () => {
  service.createItem({ name: 'Item 1' })
  service.createItem({ name: 'Item 2' })

  const items = service.getAllItems()
  // console.log(items);
  expect(items.length).toBe(3)
})

test('should update an existing item', () => {
  const item = service.createItem({ name: 'Old Item' })
  const updatedItem = service.updateItem(item.id, { name: 'Updated Item' })

  expect(updatedItem.name).toBe('Updated Item')
})

test('should delete an item', () => {
  const item = service.createItem({ name: 'Item to Delete' })
  const deleted = service.deleteItem(item.id)

  expect(deleted).toBe(true)
  expect(service.getItemById(item.id)).toBeUndefined()
})

test('should fail', () => {
  expect(true).toBe(false)
})
