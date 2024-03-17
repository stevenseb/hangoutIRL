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
      //Member.hasMany(models.User, { foreignKey: 'userId' });
      //Member.hasMany(models.Group, { foreignKey: 'groupId' });
    }
  }
  Member.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['member', 'co-host', 'pending']],
      }
    },
  }, {
    sequelize,
    modelName: 'Member',
  });
  return Member;
};
