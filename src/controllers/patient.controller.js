// src/controllers/patient.controller.js
const patientService = require('../services/patient.service');

async function getAll(req, res) {
  try {
    const patients = await patientService.listPatients();
    return res.status(200).json(patients);
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message || 'Erro ao listar pacientes.' });
  }
}

async function getById(req, res) {
  try {
    const patient = await patientService.getPatientById(req.params.id);
    return res.status(200).json(patient);
  } catch (error) {
    return res
      .status(error.statusCode || 500)
      .json({ message: error.message || 'Erro ao buscar paciente.' });
  }
}

async function update(req, res) {
  try {
    const patient = await patientService.updatePatient(req.params.id, req.body);
    return res.status(200).json(patient);
  } catch (error) {
    return res
      .status(error.statusCode || 500)
      .json({ message: error.message || 'Erro ao atualizar paciente.' });
  }
}

async function remove(req, res) {
  try {
    await patientService.deletePatient(req.params.id);
    return res.status(204).send();
  } catch (error) {
    return res
      .status(error.statusCode || 500)
      .json({ message: error.message || 'Erro ao remover paciente.' });
  }
}

module.exports = {
  getAll,
  getById,
  update,
  remove,
};
