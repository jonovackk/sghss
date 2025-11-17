// src/routes/appointment.routes.js
const { Router } = require('express');
const controller = require('../controllers/appointment.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = Router();

router.use(authMiddleware);

router.post('/', controller.create);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.patch('/:id/cancel', controller.cancel);

module.exports = router;
