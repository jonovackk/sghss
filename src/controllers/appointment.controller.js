// src/controllers/appointment.controller.js
const service = require('../services/appointment.service');

async function create(req, res) {
  try {
    const a = await service.createAppointment(req.body);
    return res.status(201).json(a);
  } catch (err) {
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
}

async function getAll(req, res) {
  try {
    const list = await service.listAppointments(req.query);
    return res.status(200).json(list);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

async function getById(req, res) {
  try {
    const a = await service.getAppointmentById(req.params.id);
    return res.status(200).json(a);
  } catch (err) {
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
}

async function cancel(req, res) {
  try {
    const a = await service.cancelAppointment(req.params.id);
    return res.status(200).json(a);
  } catch (err) {
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
}

module.exports = {
  create,
  getAll,
  getById,
  cancel,
};
