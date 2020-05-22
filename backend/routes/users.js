const express = require('express');
const router = express.Router();
const userController = require('../app/api/controllers/users');
router.post('/register', userController.create);
router.post('/authenticate', userController.authenticate);
router.get('/all', userController.getAll);
router.delete('/:userId', userController.deleteById);
module.exports = router;