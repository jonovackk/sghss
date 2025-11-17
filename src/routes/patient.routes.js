// src/routes/patient.routes.js
const { Router } = require('express');
const patientController = require('../controllers/patient.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = Router();

// TODAS essas rotas exigem token
router.use(authMiddleware);

router.get('/', patientController.getAll);
router.get('/:id', patientController.getById);
router.patch('/:id', patientController.update);
router.delete('/:id', patientController.remove);

module.exports = router;
