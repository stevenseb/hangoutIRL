'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Event.belongsTo(models.Venue, { foreignKey: 'venueId'});
      Event.belongsTo(models.Group, { foreignKey: 'groupId'});
      Event.hasMany(models.Image, { foreignKey: 'eventId'});
      Event.belongsToMany(
        models.Attendee,
        {
          through: models.Attendee,
          foreignKey: 'eventId',
          otherKey: 'userId'
        });
    }
  }
  Event.init({
    groupId: DataTypes.INTEGER,
    venueId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    type: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};
