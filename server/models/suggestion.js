module.exports = (sequelize, DataTypes) => {
  const Suggestion = sequelize.define(
    "Suggestion",
    {
      suggestion_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      group_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      suggestedby_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      hasMet: { type: DataTypes.BOOLEAN, defaultValue: false },
      text: { type: DataTypes.TEXT, allowNull: true },
      isConsidered: { type: DataTypes.BOOLEAN, defaultValue: false },
      isApproved: { type: DataTypes.BOOLEAN, defaultValue: false },
      createdAt: {
        field: "created_at",
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        field: "updated_at",
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    {
      timestamps: true,
    }
  );
  Suggestion.associate = (models) => {
    Suggestion.belongsTo(models.Group, {
      targetKey: "group_id",
      foreignKey: "group_id",
    });
  };
  return Suggestion;
};
