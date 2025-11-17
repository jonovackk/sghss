// src/models/patient.model.js
module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define(
    'Patient',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      birthDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      contact: {
        type: DataTypes.JSONB,
        allowNull: true,
      },
      address: {
        type: DataTypes.JSONB,
        allowNull: true,
      },
    },
    {
      tableName: 'patients',
      timestamps: true,
    }
  );

  return Patient;
};
