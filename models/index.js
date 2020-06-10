const Sequelize = require("sequelize");
const db = require("../db");

export default class User extends S.Model {}

User.init(
  {
    email: {
      type: S.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: S.STRING,
      allowNull: false,
    },
    salt: {
      type: S.STRING,
    },
  },
  { sequelize: db, modelName: "User" }
);

User.addhook("beforeCreate", (user) => {
  user.salt = crypto.randomBytes(20).toString("hex");
  user.password = hashPassword(user.password);
});

User.prototype.hashPassword = function (password) {
  return crypto.createHmac("sha1", salt).update(password).digest("hex");
};

user.prototype.validpassword = function (password) {
  return this.password === this.hashPassword(password);
};


var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;