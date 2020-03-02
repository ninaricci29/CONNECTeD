/*
 The USER-PROJECT RELATIONSHIP:
 As with tags, users can have many projects, and projects many users.
 This is known as the 'many to many relationship'.
*/

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Project', {
        // Model attributes are defined here
        project_name: {
            // A Project must be unique
            type: DataTypes.STRING,

            allowNull: false,
            unique: true
        },
        desc: DataTypes.TEXT
    },
    {
        timestamps: false
    }
    );
}