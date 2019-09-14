'use strict';
module.exports = (sequelize, DataTypes) => {
  const TimeLog = sequelize.define('TimeLog', {
    timeInHour: DataTypes.DECIMAL
  }, {});
  TimeLog.associate = function(models) {
    // associations can be defined here
  };
  return TimeLog;
};