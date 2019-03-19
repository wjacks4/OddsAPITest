module.exports = (sequelize, DataTypes) => {
  const Events = sequelize.define('Event', {
  },
  {
    timestamps: false,
    freezeTableName: true,
    tableName: 'events' // eslint-disable-line camelcase
  })

  return Events
}
  