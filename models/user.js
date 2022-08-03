module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    email: { type: DataTypes.STRING, allowNull: false },
    password: DataTypes.STRING,
  });
  return Users;
};
