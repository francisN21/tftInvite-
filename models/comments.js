module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define(
    "Comment",
    {
      comment_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      // in reference to the post
      post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      // who made the comment
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      text: { type: DataTypes.TEXT, allowNull: true },
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
  return Comments;
};
