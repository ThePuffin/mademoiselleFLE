const moment = require("moment");
const Units = (sequelize, DataTypes) => {
  const Units = sequelize.define(
    "Units",
    {
      // name of Model
      id: { type: DataTypes.INTEGER, primaryKey: true },
      title: { type: DataTypes.STRING },
      description: { type: DataTypes.TEXT },
      video: { type: DataTypes.STRING },
      thumbnail: { type: DataTypes.STRING },
      price: { type: DataTypes.INTEGER },
      badge: { type: DataTypes.STRING },
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
      tableName: "units",
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

  Units.associate = function(models) {
    //association des tables appointments et units
    Units.hasMany(models.Appointments, {
      foreignKey: "units_id",
      sourcekey: "id"
    });
    //association des tables careers et units
    Units.hasMany(models.Careers, {
      foreignKey: "units_id",
      sourcekey: "id"
    });
    //association des tables exercices et units
    Units.hasMany(models.Exercices, {
      foreignKey: "units_id",
      sourcekey: "id"
    });
    //association des tables feedback et units
    Units.hasMany(models.Feedbacks, {
      foreignKey: "units_id",
      sourcekey: "id"
    });
    //association des tables orders et units
    Units.belongsToMany(models.Users, {
      foreignKey: "units_id",
      through: "orders"
    });
  };
  return Units;
};

module.exports = Units;
