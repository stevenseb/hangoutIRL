'use strict';
const {
  Model,
  Validator
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
      validate: {
        min: 5,
      }
    },
    type: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['Online', 'In person']],
      }
    },
    capacity: { 
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^\d*(.\d{2})?$/,
      },
    },
    description: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    startDate: { 
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isFuture(value) {
          if (new Date(value) < new Date()) {
            throw new Error("Start date must be in the future");
          }
        },
      },
    },
    endDate: { 
      type: DataTypes.DATE,
      allowNull: false,
      isLater(value) {
        if (new Date(value) < new Date(startDate)) {
          throw new Error("End date is less than start date");
        }
      },
    },
  }, {
    sequelize,
    modelName: 'Event',
    tableName: 'Events',
  });
  return Event;
};
