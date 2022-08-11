module.exports = (sequelize, DataTypes) => {
  const Participant = sequelize.define("Participant", {
    participant_id: {
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
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    hasAccepted: { type: DataTypes.BOOLEAN, defaultValue: false },
  });
  Participant.associate = (models) => {
    Participant.belongsTo(models.User, {
      targetKey: "user_id",
      foreignKey: "user_id",
    });
  };
  Participant.associate = (models) => {
    Participant.belongsTo(models.Group, {
      targetKey: "group_id",
      foreignKey: "group_id",
    });
  };
  return Participant;
};
