// src/controllers/auth.controller.js
const authService = require('../services/auth.service');

async function registerPatient(req, res) {
  try {
    const result = await authService.registerPatient(req.body);
    return res.status(201).json(result);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
}

async function registerProfessional(req, res) {
  try {
    const result = await authService.registerProfessional(req.body);
    return res.status(201).json(result);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const result = await authService.login(email, password);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
}

module.exports = {
  registerPatient,
  registerProfessional,
  login,
};
