const moment = require("moment");
const Orders = (sequelize, DataTypes) => {
  const Orders = sequelize.define(
    "Orders",
    {
      // name of Model
      id: { type: DataTypes.INTEGER, primaryKey: true },
      users_id: { type: DataTypes.INTEGER },
      units_id: { type: DataTypes.INTEGER },
      bill: { type: DataTypes.STRING },
      validate: { type: DataTypes.INTEGER },
      createdAt: {
        type: DataTypes.DATE,
        get() {
          const date = moment(this.getDataValue("createdAt")).format(
            " Do MMMM YYYY"
          );
          return date;
        }
      },
      updatedAt: {
        type: DataTypes.DATE,
        get() {
          const date = moment(this.getDataValue("updatedAt")).format(
            " Do MMMM YYYY"
          );
          return date;
        }
      }
    },
    { timestamps: false, tableName: "orders" }
  );

  Orders.associate = function(models) {
    //association des tables units et Orders
    Orders.belongsTo(models.Units, {
      foreignKey: "units_id",
      targetkey: "id"
    });
    //association des tables Users et Orders
    Orders.belongsTo(models.Users, {
      foreignKey: "users_id",
      targetkey: "id"
    });
  };

  return Orders;
};

module.exports = Orders;
