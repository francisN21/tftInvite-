module.exports = (sequelize, DataTypes) => {
  const UserBank = sequelize.define("UserBank", {
    userbank_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    cashamount: { type: DataTypes.INTERGER, defaultValue: 0 },
  });
  return UserBank;
};
