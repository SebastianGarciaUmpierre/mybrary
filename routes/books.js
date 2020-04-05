const express = require('express')
const router = express.Router()
const Author = require('../models/book')


// All Authors Route
router.get('/', async (req, res) => {

    res.send('All books')
})
// New Author Route
router.get('/new', (req,res) => {
    res.send('New Books')
})
// Create Author Route
router.post('/', async(req, res) => {
    res.send('Create Book')
})


module.exports = router