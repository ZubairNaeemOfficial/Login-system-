const db = require("./db");
const { DataTypes } = require("sequelize");

const Userprofile = db.define(
  "Userprofile",
  {
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
        as: 'userId',
      }
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: {
        args: true,
        msg: 'Pease enter a gender'
      }
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: {
        args: true,
        msg: 'Pease enter your name'
      }
    },
    lasttname: {
      type: DataTypes.STRING,
      allowNull: {
        args: true,
        msg: 'Pease enter your name'
      }
    },
  },
  {
    tableName: "Userprofiles",
  }
);

module.exports = Userprofile;