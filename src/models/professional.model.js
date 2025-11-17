// src/models/professional.model.js
module.exports = (sequelize, DataTypes) => {
  const Professional = sequelize.define(
    'Professional',
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
      registry: {
        // CRM ou equivalente
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      specialty: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'professionals',
      timestamps: true,
    }
  );

  return Professional;
};
