const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const UserModel = require('./User')
const db = {}

  const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options,
  )
db.sequelize = sequelize
db.Sequelize = Sequelize

const User = UserModel(sequelize, Sequelize)
module.exports = {sequelize, Sequelize, User}