module.exports = (sequelize, DataTypes) => {
  const Friends = sequelize.define(
    "Friend",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      // needs to be accepted
      isFriend: { type: DataTypes.BOOLEAN, defaultValue: false },
      isBlocked: { type: DataTypes.BOOLEAN, defaultValue: false },
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
  Friends.associate = (models) => {
    Friends.belongsTo(models.User, {
      targetKey: "user_id",
      foreignKey: "user_id",
      onDelete: "cascade",
    });
  };
  Friends.associate = (models) => {
    Friends.belongsTo(models.User, {
      targetKey: "id",
      foreignKey: "user_id",
      onDelete: "cascade",
    });
  };
  //   Friends.associate = (models) => {
  //   Friends.hasMany(models.Users, {
  //     onDelete: "cascade",
  //   });
  // };
  return Friends;
};

// Friends.associate = (models) => {
//   Users.hasMany(models.Friend, {
//     onDelete: "cascade",
//   });
// };
