const moment = require("moment");

const Feedbacks = (sequelize, DataTypes) => {
  const Feedbacks = sequelize.define(
    "Feedbacks",
    {
      // name of Model
      id: { type: DataTypes.INTEGER, primaryKey: true },
      users_id: { type: DataTypes.INTEGER },
      units_id: { type: DataTypes.INTEGER },
      comment: { type: DataTypes.STRING },
      note: { type: DataTypes.INTEGER },
      createdAt: {
        type: DataTypes.DATE,
        get() {
          const date = moment(this.getDataValue("createdAt")).format(
            " Do MMMM YYYY"
          );
          return date;
        }
      }
    },
    {
      timestamps: false,
      tableName: "feedbacks"
    }
  );

  Feedbacks.associate = function(models) {
    Feedbacks.belongsTo(models.Units, {
      foreignKey: "units_id",
      targetkey: "id"
    });
    Feedbacks.belongsTo(models.Users, {
      foreignKey: "users_id",
      targetkey: "id"
    });
  };

  return Feedbacks;
};

module.exports = Feedbacks;
