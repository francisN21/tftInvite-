module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("UserBank", {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    username: { type: DataTypes.STRING, allowNull: false, unique: true },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    birthday: { type: DataTypes.DATEONLY, allowNull: false },
  });
  return Users;
};