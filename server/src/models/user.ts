const user = (sequelize, DataTypes) => {
  const USERS = sequelize.define(
    'USERS',
    {
      ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false,
      },
      STUDENT_ID: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
      },
      PASSWORD: {
        type: DataTypes.STRING(18),
        allowNull: false,
      },
      NAME: {
        type: DataTypes.STRING(18),
        allowNull: false,
      },
      MAJOR: {
        type: DataTypes.STRING(18),
        allowNull: false,
      },
      GITHUB_ID: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      GOOGLE_ID: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      DOUBLE_MAJOR: {
        type: DataTypes.STRING(18),
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      createdAt: true,
      updatedAt: true,
      deletedAt: true,
    },
  );

  USERS.associate = models => {
    USERS.belongsTo(models.track, {
      foreignKey: 'TRACK_ID',
      target: 'ID',
    });
  };

  return USERS;
};

export default user;
