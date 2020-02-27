/*
 The USER-TAG RELATIONSHIP:
 A user can have many unique tags. In turn, tags are not bound to users.
 This is known as the 'many to many relationship'.
*/

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Tag', {
        // Model attributes are defined here
        tag_name: {
            // a tag must be unique
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },

        timestamps: false
    });



}