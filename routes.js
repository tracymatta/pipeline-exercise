const express = require('express')
const router = express.Router()
const service = require('./service')

router.get('/', (req, res) => {
  res.json(service.getAllItems())
})

router.get('/:id', (req, res) => {
  const item = service.getItemById(parseInt(req.params.id))
  if (!item) return res.status(404).json({ message: 'Item not found' })
  res.json(item)
})

router.post('/', (req, res) => {
  const item = service.createItem(req.body)
  res.status(201).json(item)
})

router.put('/:id', (req, res) => {
  const updatedItem = service.updateItem(parseInt(req.params.id), req.body)
  if (!updatedItem) return res.status(404).json({ message: 'Item not found' })
  res.json(updatedItem)
})

router.delete('/:id', (req, res) => {
  const deleted = service.deleteItem(parseInt(req.params.id))
  if (!deleted) return res.status(404).json({ message: 'Item not found' })
  res.status(204).send()
})

module.exports = router
