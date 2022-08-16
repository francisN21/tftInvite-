module.exports = (sequelize, DataTypes) => {
  const Goal = sequelize.define(
    "Goal",
    {
      goal_id: {
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
      taget_date: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
      },
      hasMet: { type: DataTypes.BOOLEAN, defaultValue: false },
      title: { type: DataTypes.TEXT, allowNull: true },
      text: { type: DataTypes.TEXT, allowNull: true },
      //   birthday: { type: DataTypes.DATEONLY, allowNull: false },
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
  Goal.associate = (models) => {
    Goal.belongsTo(models.Group, {
      targetKey: "group_id",
      foreignKey: "group_id",
    });
  };
  return Goal;
};
