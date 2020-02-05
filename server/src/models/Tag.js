/*
 The USER-TAG RELATIONSHIP:
 A user can have many unique tags. In turn, tags are not bound to users.
 This is known as the 'many to many relationship'.
*/

// I define this model using sequelize.define (as opposted to extending ModeL).
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Tag = sequelize.define('Tag', {
    // Model attributes are defined here
    tag_name: {
        // a tag must be unique
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    // Other model options go here
});

// `sequelize.define` also returns the model
console.log(Tag === sequelize.models.Tag); // true

/* by default, when the table name (Tags) is not given
/ Sequelize automatically pluralizes the model name -> uses it as table name.
 */

/* Now the model is defined, and details about its table are told to Sequelize.
But we need to invoke model synchronization so that a SQL query is automatically
performed to the database (doesn't change the model on JS side, just table in database)
 */

await sequelize.sync({ force: true });
console.log("All models were synchronized successfully.");

// automatically generates the Users_Tag model as the through table with two columns: userId and tagId. 
Tag.belongsToMany(User, { through: 'Users_Tag' });
User.belongsToMany(Tags, { through: 'Users_Tag' });