'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Member.hasMany(models.User, { foreignKey: 'userId' });
      Member.hasMany(models.Group, { foreignKey: 'groupId' });
    }
  }
  Member.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
        references: {
          model: 'User',
          key: 'id',
        },
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
        references: {
          model: 'Group',
          key: 'id',
        }
      },
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Member',
  });
  return Member;
};
