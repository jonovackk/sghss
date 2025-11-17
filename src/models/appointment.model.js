// src/models/appointment.model.js
module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define(
    'Appointment',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      patientId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      professionalId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      startsAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endsAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      status: {
        type: DataTypes.ENUM('SCHEDULED', 'CANCELLED'),
        defaultValue: 'SCHEDULED',
      },
      reason: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: 'appointments',
      timestamps: true,
    }
  );

  return Appointment;
};
