/**
 *  Model Admin
 * @param {*} sequelize
 * @param {*} DataTypes
 */
const Admin = (sequelize, DataTypes) => {
  const Admin = sequelize.define(
    "Admin",
    {
      // name of Model
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING
      },
      firstname: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      country: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      },
      picture: {
        type: DataTypes.STRING
      }
    },
    {
      tableName: "admin",
      timestamps: false
    }
  );

  Admin.associate = function(models) {
    //association des tables appointments et admin
    Admin.hasMany(models.Appointments, {
      foreignKey: "admin_id",
      sourcekey: "id"
    });
    //association des tables organizers et admin
    Admin.hasOne(models.Organizers, {
      foreignKey: "admin_id",
      sourcekey: "id"
    });
  };

  return Admin;
};

module.exports = Admin;
