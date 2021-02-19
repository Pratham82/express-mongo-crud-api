const express = require('express')
const getAllUsers = require('../controllers/getAllUsers')
const getUser = require('../controllers/getUser')
const createNewUser = require('../controllers/createNewUser')
const updateUser = require('../controllers/updateUser')
const deleteUser = require('../controllers/deletUser')

const router = express.Router()

router.get('/', getAllUsers)
router.get('/:id', getUser)
router.post('/', createNewUser)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router
