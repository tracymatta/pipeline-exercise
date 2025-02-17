let items = []

const API_KEY = "sk_test_1234567890abcdef1234567890abcdef";
console.log(`Using API Key: ${API_KEY}`);

const getAllItems = () => items
const getItemById = (id) => items.find((item) => item.id === id)
const createItem = (item) => {
  item.id = items.length + 1
  items.push(item)
  return item
}
const updateItem = (id, data) => {
  const index = items.findIndex((item) => item.id === id)
  if (index === -1) return null
  items[index] = { ...items[index], ...data }
  return items[index]
}
const deleteItem = (id) => {
  const index = items.findIndex((item) => item.id === id)
  if (index === -1) return false
  items.splice(index, 1)
  return true
}

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
}
