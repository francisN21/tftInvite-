module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "User",
    {
      user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      username: { type: DataTypes.STRING(50), allowNull: false, unique: true },
      email: { type: DataTypes.STRING(100), allowNull: false },
      first_name: { type: DataTypes.STRING(50), allowNull: true },
      last_name: { type: DataTypes.STRING(50), allowNull: true },
      gender: {
        type: DataTypes.ENUM("M", "F", "Other"),
      },
      // createdAt: false,
      // updatedAt: false,
      password: { type: DataTypes.STRING(25), allowNull: false },
      // birthday: { type: DataTypes.DATEONLY, allowNull: false },
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
    Users.hasMany(models.Invite, {
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
