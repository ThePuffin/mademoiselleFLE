const moment = require("moment");
const Users = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      // name of Model
      id: { type: DataTypes.INTEGER, primaryKey: true },
      name: { type: DataTypes.STRING },
      firstname: { type: DataTypes.STRING },
      age: { type: DataTypes.INTEGER },
      email: { type: DataTypes.STRING },
      password: { type: DataTypes.STRING },
      country: { type: DataTypes.STRING },
      native_language: { type: DataTypes.STRING },
      other_language: { type: DataTypes.STRING },
      french_level: { type: DataTypes.STRING },
      objective: { type: DataTypes.STRING },
      last_login: { type: DataTypes.DATE },
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
      },
      deletedAt: {
        type: DataTypes.DATE,
        get() {
          const date = moment(this.getDataValue("deletedAt")).format(
            " Do MMMM YYYY"
          );
          return date;
        }
      },
      picture: { type: DataTypes.STRING },
      newsletter: { type: DataTypes.BOOLEAN },
      skype_id: { type: DataTypes.STRING },
      active: { type: DataTypes.BOOLEAN }
    },
    { timestamps: false, tableName: "users" }
  );

  Users.associate = function(models) {
    //association des tables appointments et users
    Users.hasMany(models.Appointments, {
      foreignKey: "users_id",
      sourcekey: "id"
    });
    //association des tables careers et users
    Users.hasMany(models.Careers, {
      foreignKey: "users_id",
      sourcekey: "id"
    });

    //association des tables feedback et users
    Users.hasMany(models.Feedbacks, {
      foreignKey: "users_id",
      sourcekey: "id"
    });
    //association des tables orders et users
    Users.belongsToMany(models.Units, {
      foreignKey: "users_id",
      through: "orders"
    });
    //association des tables testimony et users
    Users.hasMany(models.Testimonies, {
      foreignKey: "users_id",
      sourcekey: "id"
    });
  };
  return Users;
};

module.exports = Users;
