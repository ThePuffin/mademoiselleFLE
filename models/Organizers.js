const moment = require("moment");
const Organizers = (sequelize, DataTypes) => {
  const Organizers = sequelize.define(
    "Organizers",
    {
      // name of Model
      id: { type: DataTypes.INTEGER, primaryKey: true },
      admin_id: { type: DataTypes.INTEGER },
      date: { type: DataTypes.DATE },
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
    { timestamps: false, tableName: "organizers" }
  );

  Organizers.associate = function(models) {
    Organizers.belongsTo(models.Admin, {
      foreignKey: "admin_id",
      targetkey: "id"
    });
  };

  return Organizers;
};

module.exports = Organizers;
