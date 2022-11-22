const mongodb = require("mongodb");
const db = require("../util/database");

const ObjectId = mongodb.ObjectId;

class User {
  constructor(username, email) {
    this.name = username;
    this.email = email;
  }

  save() {
    const db = getDB();

    return db.collection("users").insertOne(this);
  }

  static findById(userId) {
    const db = getDB();

    return db.collection("users").findOne({ _id: new ObjectId(userId) });
  }
}

// const Sequelize = require('sequelize');

// const sequelize = require('../util/database');

// const User = sequelize.define('user', {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true
//   },
//   name: Sequelize.STRING,
//   email: Sequelize.STRING
// });

module.exports = User;
