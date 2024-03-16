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
      Event.hasMany(models.EventImage, { foreignKey: 'eventId'});
      Event.belongsToMany(
        models.User,
        {
          through: models.Attendee,
          foreignKey: 'eventId',
          otherKey: 'userId'
        });
    }
  }
  Event.init({
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      },
    venueId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      },
    name: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    capacity: { 
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    startDate: { 
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: { 
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};
