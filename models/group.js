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
      title: { type: DataTypes.STRING, allowNull: false },
      taget_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      description: { type: DataTypes.TEXT, allowNull: false },
      isCompleted: { type: DataTypes.BOOLEAN, defaultValue: false },
      isMainAdmin: { type: DataTypes.INTEGER },
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
    Group.hasMany(models.User, {
      onDelete: "cascade",
    });
  };
  Group.associate = (models) => {
    Group.hasMany(models.Participant, {
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
