// src/routes/index.js
const { Router } = require('express');
const healthRoutes = require('./health.routes');
const authRoutes = require('./auth.routes');
const patientRoutes = require('./patient.routes');
const professionalRoutes = require('./professional.routes');
const appointmentRoutes = require('./appointment.routes');



const router = Router();

router.use('/health', healthRoutes);
router.use('/auth', authRoutes);
router.use('/patients', patientRoutes);
router.use('/professionals', professionalRoutes);
router.use('/appointments', appointmentRoutes);



module.exports = router;
