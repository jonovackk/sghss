// src/services/patient.service.js
const { Patient, User } = require('../models');

async function listPatients() {
  return Patient.findAll({
    include: [{ model: User, as: 'user', attributes: ['email', 'role', 'active'] }],
  });
}

async function getPatientById(id) {
  const patient = await Patient.findByPk(id, {
    include: [{ model: User, as: 'user', attributes: ['email', 'role', 'active'] }],
  });

  if (!patient) {
    const error = new Error('Paciente não encontrado.');
    error.statusCode = 404;
    throw error;
  }

  return patient;
}

async function updatePatient(id, data) {
  const patient = await Patient.findByPk(id);

  if (!patient) {
    const error = new Error('Paciente não encontrado.');
    error.statusCode = 404;
    throw error;
  }

  await patient.update(data);
  return patient;
}

async function deletePatient(id) {
  const patient = await Patient.findByPk(id);

  if (!patient) {
    const error = new Error('Paciente não encontrado.');
    error.statusCode = 404;
    throw error;
  }

  await patient.destroy();
}

module.exports = {
  listPatients,
  getPatientById,
  updatePatient,
  deletePatient,
};
