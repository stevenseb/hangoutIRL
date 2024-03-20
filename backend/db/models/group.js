'use strict';
const {
  Model,
  Validator
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Group.hasMany(models.Venue, { foreignKey: 'groupId' });
      Group.hasMany(models.Event, { foreignKey: 'groupId' });
      Group.hasMany(models.GroupImage, { foreignKey: 'groupId'});
      Group.belongsTo(models.User, { foreignKey: 'organizerId'});
      Group.belongsToMany(
        models.User,
        {
          through: models.Member,
          foreignKey: 'groupId',
          otherKey: 'userId'
        });
      
    }
  }
  Group.init({
    organizerId: {
      type: DataTypes.INTEGER,
        allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        max: 60,
      }
    },
    about: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 50,
      }
    },
    type: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [['Online', 'In person']],
    }
    },
    private: DataTypes.BOOLEAN,
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2,2],
      }
    },
  }, {
    sequelize,
    modelName: 'Group',
    tableName: 'Groups',
  });
  return Group;
};
