// src/services/auth.service.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { sequelize, User, Patient, Professional } = require('../models');

// REGISTRAR PACIENTE
async function registerPatient(data) {
  const { email, password, name, cpf, birthDate, contact, address } = data;

  const exists = await User.findOne({ where: { email } });
  if (exists) throw new Error('E-mail já cadastrado.');

  const passwordHash = await bcrypt.hash(password, 10);

  const t = await sequelize.transaction();

  try {
    const user = await User.create(
      {
        email,
        password: passwordHash,
        role: 'PATIENT',
        active: true,
      },
      { transaction: t }
    );

    const patient = await Patient.create(
      {
        userId: user.id,
        name,
        cpf,
        birthDate,
        contact,
        address,
      },
      { transaction: t }
    );

    await t.commit();
    return { user, patient };
  } catch (err) {
    await t.rollback();
    throw err;
  }
}

// REGISTRAR PROFISSIONAL
async function registerProfessional(data) {
  const { email, password, name, registry, specialty } = data;

  const exists = await User.findOne({ where: { email } });
  if (exists) throw new Error('E-mail já cadastrado.');

  const passwordHash = await bcrypt.hash(password, 10);

  const t = await sequelize.transaction();

  try {
    const user = await User.create(
      {
        email,
        password: passwordHash,
        role: 'PROFESSIONAL',
        active: true,
      },
      { transaction: t }
    );

    const professional = await Professional.create(
      {
        userId: user.id,
        name,
        registry,
        specialty,
      },
      { transaction: t }
    );

    await t.commit();
    return { user, professional };
  } catch (err) {
    await t.rollback();
    throw err;
  }
}

// LOGIN
async function login(email, password) {
  const user = await User.findOne({ where: { email } });
  if (!user) throw new Error('Usuário ou senha inválidos.');

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error('Usuário ou senha inválidos.');

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '8h' }
  );

  return { token, user };
}

module.exports = {
  registerPatient,
  registerProfessional,
  login,
};
