module.exports = (sequelize, DataTypes) => {
  const GroupBank = sequelize.define("GroupBank", {
    groupbank_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    // in reference to group
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    cashamount: { type: DataTypes.INTEGER, defaultValue: 0 },
  });
  return GroupBank;
};
