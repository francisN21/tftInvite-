module.exports = (sequelize, DataTypes) => {
  const Suggestion = sequelize.define("Suggestion", {
    suggestion_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    hasMet: { type: DataTypes.BOOLEAN, defaultValue: false },
    text: { type: DataTypes.TEXT, allowNull: true },
    //   birthday: { type: DataTypes.DATEONLY, allowNull: false },
  });
  Suggestion.associate = (models) => {
    Suggestion.belongsTo(models.Group, {
      targetKey: "group_id",
      foreignKey: "group_id",
    });
  };
  return Suggestion;
};
