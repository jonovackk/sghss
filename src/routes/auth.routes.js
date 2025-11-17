// src/routes/auth.routes.js
const { Router } = require('express');
const authController = require('../controllers/auth.controller');

const router = Router();

// cadastro de paciente
router.post('/register/patient', authController.registerPatient);

// cadastro de profissional
router.post('/register/professional', authController.registerProfessional);

// login
router.post('/login', authController.login);

module.exports = router;
