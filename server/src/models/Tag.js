/*
 The USER-TAG RELATIONSHIP:
 A user can have many unique tags. In turn, tags are not bound to users.
 This is known as the 'many to many relationship'.
*/

module.exports = async (sequelize, DataTypes) => {
    return sequelize.define('Tag', {
        // Model attributes are defined here
        tag_name: {
            // a tag must be unique
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    }, {
    });


// The Users_Tag model is generated as the through table with two columns: userId and tagId.
    Tag.belongsToMany(User, {through: 'Users_Tag'});
    User.belongsToMany(Tags, {through: 'Users_Tag'});

}