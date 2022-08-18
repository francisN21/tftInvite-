module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define("Task", {
    Task_id: {
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
    assignedTo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    task: { type: DataTypes.STRING, allowNull: false },
    isCompleted: { type: DataTypes.BOOLEAN, defaultValue: false },
    //   birthday: { type: DataTypes.DATEONLY, allowNull: false },
  });
  Task.associate = (models) => {
    Task.belongsTo(models.Group, {
      targetKey: "group_id",
      foreignKey: "group_id",
    });
  };
  Task.associate = (models) => {
    Task.belongsTo(models.User, {
      targetKey: "user_id",
      foreignKey: "assignedTo_id",
    });
  };
  return Task;
};
