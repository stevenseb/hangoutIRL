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
    eventId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Attendee',
  });
  return Attendee;
};
