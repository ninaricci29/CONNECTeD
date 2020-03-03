const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const UserModel = require('./User')
const TagModel = require('./Tag')
const ProjectModel = require('./Project')
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
const Tag = TagModel(sequelize, Sequelize)
const Project = ProjectModel(sequelize, Sequelize)

// Creating associations for each model-to-model many-to-many relationship;
// there are databases for the following relationships: User-Tag, User-Project, Project-Tag.
const User_Tag = sequelize.define('User_Tag', {}, { timestamps: false} )
const User_Project = sequelize.define('User_Project', {}, {timestamps: false} )
const Project_Tag = sequelize.define('Project_Tag', {}, {timestamps: false} )

User.belongsToMany(Tag, {through: User_Tag});
Tag.belongsToMany(User, {through: User_Tag});

User.belongsToMany(Project, {through: User_Project});
Project.belongsToMany(User, {through: User_Project});

Project.belongsToMany(Tag, {through: Project_Tag});
Tag.belongsToMany(Project, {through: Project_Tag});

db.User = User
db.Tag = Tag
db.Project = Project
db.UsersTag = Users_Tag

module.exports = db
