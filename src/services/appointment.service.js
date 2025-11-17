// src/services/appointment.service.js
const { Appointment, Patient, Professional } = require('../models');

async function createAppointment(data) {
  const { patientId, professionalId, startsAt, endsAt, reason, location } = data;

  const patient = await Patient.findByPk(patientId);
  if (!patient) {
    const err = new Error('Paciente não encontrado.');
    err.statusCode = 400;
    throw err;
  }

  const professional = await Professional.findByPk(professionalId);
  if (!professional) {
    const err = new Error('Profissional não encontrado.');
    err.statusCode = 400;
    throw err;
  }

  const appointment = await Appointment.create({
    patientId,
    professionalId,
    startsAt,
    endsAt,
    reason,
    location,
    status: 'SCHEDULED'
  });

  return appointment;
}

async function listAppointments(filters = {}) {
  const where = {};

  if (filters.patientId) where.patientId = filters.patientId;
  if (filters.professionalId) where.professionalId = filters.professionalId;
  if (filters.status) where.status = filters.status;

  return Appointment.findAll({
    where,
    include: [
      { model: Patient, as: 'patient' },
      { model: Professional, as: 'professional' }
    ],
  });
}

async function getAppointmentById(id) {
  const appointment = await Appointment.findByPk(id, {
    include: [
      { model: Patient, as: 'patient' },
      { model: Professional, as: 'professional' }
    ]
  });

  if (!appointment) {
    const err = new Error('Agendamento não encontrado.');
    err.statusCode = 404;
    throw err;
  }

  return appointment;
}

async function cancelAppointment(id) {
  const appointment = await Appointment.findByPk(id);

  if (!appointment) {
    const err = new Error('Agendamento não encontrado.');
    err.statusCode = 404;
    throw err;
  }

  appointment.status = 'CANCELLED';
  await appointment.save();

  return appointment;
}

module.exports = {
  createAppointment,
  listAppointments,
  getAppointmentById,
  cancelAppointment,
};
