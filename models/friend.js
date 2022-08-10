module.exports = (sequelize, DataTypes) => {
  const Friends = sequelize.define("Friend", {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    friend_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isMutual: { type: DataTypes.BOOLEAN, defaultValue: false },
  });
  Friends.associate = (models) => {
    Friends.belongsTo(models.User, {
      targetKey: "user_id",
      foreignKey: "user_id",
    });
  };
  Friends.associate = (models) => {
    Friends.belongsTo(models.User, {
      targetKey: "user_id",
      foreignKey: "friend_id",
    });
  };
  return Friends;
};
