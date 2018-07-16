const moment = require("moment");
const Testimonies = (sequelize, DataTypes) => {
  const Testimonies = sequelize.define(
    "Testimonies",
    {
      // name of Model
      id: { type: DataTypes.INTEGER, primaryKey: true },
      users_id: { type: DataTypes.INTEGER },
      comment: { type: DataTypes.TEXT },
      note: { type: DataTypes.INTEGER },
      active: { type: DataTypes.BOOLEAN },
      createdAt: {
        type: DataTypes.DATE,
        get() {
          const date = moment(this.getDataValue("createdAt")).format(
            " Do MMMM YYYY"
          );
          return date;
        }
      },
      updateAt: {
        type: DataTypes.DATE,
        get() {
          const date = moment(this.getDataValue("updatedAt")).format(
            " Do MMMM YYYY"
          );
          return date;
        }
      }
    },
    {
      timestamps: false,
      tableName: "testimonies"
    }
  );
  Testimonies.associate = function(models) {
    Testimonies.belongsTo(models.Users, {
      foreignKey: "users_id",
      targetkey: "id"
    });
  };

  return Testimonies;
};

module.exports = Testimonies;
