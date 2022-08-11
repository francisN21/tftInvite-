module.exports = (sequelize, DataTypes) => {
  const Goal = sequelize.define("Goal", {
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
    hasMet: { type: DataTypes.BOOLEAN, defaultValue: false },
    text: { type: DataTypes.TEXT, allowNull: true },
    //   birthday: { type: DataTypes.DATEONLY, allowNull: false },
  });
  Goal.associate = (models) => {
    Goal.belongsTo(models.Group, {
      targetKey: "group_id",
      foreignKey: "group_id",
    });
  };
  return Goal;
};
