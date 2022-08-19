module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,

        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      username: { type: DataTypes.STRING(50), allowNull: false, unique: true },
      email: { type: DataTypes.STRING(100), allowNull: false },
      first_name: { type: DataTypes.STRING(50), allowNull: true },
      last_name: { type: DataTypes.STRING(50), allowNull: true },
      // gender: {
      //   type: DataTypes.ENUM("M", "F", "Other"),
      // },
      password: { type: DataTypes.STRING(25), allowNull: false },
      // birthday: { type: DataTypes.DATEONLY, allowNull: false },

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

  Users.associate = (models) => {
    Users.hasMany(models.Friend, {
      onDelete: "cascade",
    });
  };

  Users.associate = (models) => {
    Users.hasMany(models.Post, {
      onDelete: "cascade",
    });
  };
  Users.associate = (models) => {
    Users.hasMany(models.Group, {
      onDelete: "cascade",
    });
  };

  Users.associate = (models) => {
    Users.hasOne(models.UserBank, {
      onDelete: "cascade",
    });
  };
  return Users;
};
