const moment = require("moment");
const Appointments = (sequelize, DataTypes) => {
  const Appointments = sequelize.define(
    "Appointments",
    {
      // name of Model
      id: { type: DataTypes.INTEGER, primaryKey: true },
      users_id: { type: DataTypes.INTEGER },
      admin_id: { type: DataTypes.INTEGER },
      units_id: { type: DataTypes.INTEGER },
      date: {
        type: DataTypes.DATE,
        get() {
          const date = moment(this.getDataValue("date")).format(
            " Do MMMM YYYY"
          );
          return date;
        }
      },
      timezone: { type: DataTypes.STRING }
    },
    {
      timestamps: false,
      tableName: "appointments",
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

  Appointments.associate = function(models) {
    //association admin et appointments
    Appointments.belongsTo(models.Admin, {
      foreignKey: "admin_id",
      targetkey: "id"
    });
    //association units et appointments
    Appointments.belongsTo(models.Units, {
      foreignKey: "units_id",
      targetkey: "id"
    });
    //association users et appointments
    Appointments.belongsTo(models.Users, {
      foreignKey: "users_id",
      targetkey: "id"
    });
  };

  return Appointments;
};

module.exports = Appointments;
