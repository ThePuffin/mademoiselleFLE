const moment = require("moment");
const Careers = (sequelize, DataTypes) => {
  const Careers = sequelize.define(
    "Careers",
    {
      // name of Model
      id: { type: DataTypes.INTEGER, primaryKey: true },
      users_id: { type: DataTypes.INTEGER },
      units_id: { type: DataTypes.INTEGER },
      date_begin: {
        type: DataTypes.DATE,
        get() {
          const date = moment(this.getDataValue("date_begin")).format(
            " Do MMMM YYYY"
          );
          return date;
        }
      },
      date_end: {
        type: DataTypes.DATE,
        get() {
          const date = moment(this.getDataValue("date_end")).format(
            " Do MMMM YYYY"
          );
          return date;
        }
      }
    },
    {
      timestamps: false,
      tableName: "careers",
      getterMethods: {
        dateFr() {
          function pad(s) {
            return;
            s < 10 ? "0" + s : s;
          }
          var d = new Date(this.datePublication);
          return [
            pad(d.getDate()),
            pad(d.getMonth() + 1),
            d.getFullYear()
          ].join("/");
        }
      }
    }
  );

  Careers.associate = function(models) {
    Careers.belongsTo(models.Units, {
      foreignKey: "units_id",
      targetkey: "id"
    });
    Careers.belongsTo(models.Users, {
      foreignKey: "users_id",
      targetkey: "id"
    });
  };

  return Careers;
};

module.exports = Careers;
