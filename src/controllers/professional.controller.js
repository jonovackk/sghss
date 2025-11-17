// src/controllers/professional.controller.js
const professionalService = require('../services/professional.service');

async function getAll(req, res) {
  try {
    const profs = await professionalService.listProfessionals();
    return res.status(200).json(profs);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

async function getById(req, res) {
  try {
    const prof = await professionalService.getProfessionalById(req.params.id);
    return res.status(200).json(prof);
  } catch (err) {
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
}

async function update(req, res) {
  try {
    const prof = await professionalService.updateProfessional(req.params.id, req.body);
    return res.status(200).json(prof);
  } catch (err) {
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
}

async function remove(req, res) {
  try {
    await professionalService.deleteProfessional(req.params.id);
    return res.status(204).send();
  } catch (err) {
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
}

module.exports = {
  getAll,
  getById,
  update,
  remove,
};
