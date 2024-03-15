'use strict';
const {
  Model,
  Validator
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Venue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Venue.belongsTo(models.Group, { foreignKey: 'groupId' });
      Venue.hasMany(models.Event, { foreignKey: 'venueId'});
    }
  }
  Venue.init({
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
        references: {
          model: 'Group',
          key: 'id',
        },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
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
    lat: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    lng: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Venue',
  });
  return Venue;
};
