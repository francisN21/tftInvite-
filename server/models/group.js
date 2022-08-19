module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define(
    "Group",
    {
      group_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      // Only one main moderator of the group in reference to the user who created it
      isCreator_id: { type: DataTypes.INTEGER },
      areParticipants_id: { type: DataTypes.INTEGER },
      title: { type: DataTypes.STRING, allowNull: false },
      taget_date: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
      },
      description: { type: DataTypes.TEXT, allowNull: true },
      isCompleted: { type: DataTypes.BOOLEAN, defaultValue: false },
      isPrivate: { type: DataTypes.BOOLEAN, defaultValue: false },

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
  Group.associate = (models) => {
    Group.hasOne(models.User, {
      targetKey: "user_id",
      foreignKey: "isCreator_id",
      onDelete: "cascade",
    });
  };

  Group.associate = (models) => {
    Group.hasMany(models.Participant, {
      targetKey: "group_id",
      foreignKey: "areParticipants_id",
      onDelete: "cascade",
    });
  };
  Group.associate = (models) => {
    Group.hasMany(models.Goal, {
      onDelete: "cascade",
    });
  };
  Group.associate = (models) => {
    Group.hasMany(models.Suggestion, {
      onDelete: "cascade",
    });
  };
  Group.associate = (models) => {
    Group.hasMany(models.Task, {
      onDelete: "cascade",
    });
  };
  return Group;
};
