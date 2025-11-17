// src/services/professional.service.js
const { Professional, User } = require('../models');

async function listProfessionals() {
  return Professional.findAll({
    include: [{ model: User, as: 'user', attributes: ['email', 'role', 'active'] }]
  });
}

async function getProfessionalById(id) {
  const prof = await Professional.findByPk(id, {
    include: [{ model: User, as: 'user', attributes: ['email', 'role', 'active'] }]
  });

  if (!prof) {
    const err = new Error('Profissional não encontrado.');
    err.statusCode = 404;
    throw err;
  }

  return prof;
}

async function updateProfessional(id, data) {
  const prof = await Professional.findByPk(id);

  if (!prof) {
    const err = new Error('Profissional não encontrado.');
    err.statusCode = 404;
    throw err;
  }

  await prof.update(data);
  return prof;
}

async function deleteProfessional(id) {
  const prof = await Professional.findByPk(id);

  if (!prof) {
    const err = new Error('Profissional não encontrado.');
    err.statusCode = 404;
    throw err;
  }

  await prof.destroy();
}

module.exports = {
  listProfessionals,
  getProfessionalById,
  updateProfessional,
  deleteProfessional,
};
