// src/models/index.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = require('./user.model')(sequelize, DataTypes);
const Patient = require('./patient.model')(sequelize, DataTypes);
const Professional = require('./professional.model')(sequelize, DataTypes);
const Appointment = require('./appointment.model')(sequelize, DataTypes);

// Associações

// User 1 — 0..1 Patient
User.hasOne(Patient, {
  foreignKey: 'userId',
  as: 'patient',
});
Patient.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user',
});

// User 1 — 0..1 Professional
User.hasOne(Professional, {
  foreignKey: 'userId',
  as: 'professional',
});
Professional.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user',
});

// Patient 1 — N Appointment
Patient.hasMany(Appointment, {
  foreignKey: 'patientId',
  as: 'appointments',
});
Appointment.belongsTo(Patient, {
  foreignKey: 'patientId',
  as: 'patient',
});

// Professional 1 — N Appointment
Professional.hasMany(Appointment, {
  foreignKey: 'professionalId',
  as: 'appointments',
});
Appointment.belongsTo(Professional, {
  foreignKey: 'professionalId',
  as: 'professional',
});

module.exports = {
  sequelize,
  User,
  Patient,
  Professional,
  Appointment,
};
