'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attendee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Attendee.hasMany(models.User, { foreignKey: 'userId' });
      Attendee.hasMany(models.Event, { foreignKey: 'eventId'});
    }
  }
  Attendee.init({
    eventId: {
      type: DataTypes.INTEGER,
      allowNull: false,
        references: {
          model: 'Event',
          key: 'id',
        },
      },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
        references: {
          model: 'User',
          key: 'id',
        },
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Attendee',
  });
  return Attendee;
};
