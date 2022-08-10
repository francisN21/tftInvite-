module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define("Group", {
    invite_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    title: { type: DataTypes.STRING(50), allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    // timestamps: true,
    // createdAt: true,
    // password: { type: DataTypes.STRING, allowNull: false },
    // birthday: { type: DataTypes.DATEONLY, allowNull: false },
  });
  return Group;
};
