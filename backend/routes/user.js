import express from 'express';

const router = express.Router();
const userController = require('../controllers/user');

router.get('/test', userController.test);

router.post('/create', userController.create);

router.get('/list', userController.list);

router.get('/:id', userController.details);

router.put('/:id/update', userController.update);

router.delete('/:id/delete', userController.delete);

module.exports = router;