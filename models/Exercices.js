const moment = require("moment");
const Exercices = (sequelize, DataTypes) => {
  const Exercices = sequelize.define(
    "Exercices",
    {
      // name of Model
      id: { type: DataTypes.INTEGER, primaryKey: true },
      units_id: { type: DataTypes.INTEGER },
      title: { type: DataTypes.STRING },
      description: { type: DataTypes.TEXT },
      sound: { type: DataTypes.STRING },
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
    { timestamps: false, tableName: "exercices" }
  );
  Exercices.associate = function(models) {
    Exercices.belongsTo(models.Units, {
      foreignKey: "units_id",
      targetkey: "id"
    });
  };

  return Exercices;
};

module.exports = Exercices;
