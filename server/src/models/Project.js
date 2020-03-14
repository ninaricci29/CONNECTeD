/*
 The USER-PROJECT RELATIONSHIP:
 As with tags, users can have many projects, and projects many users.
 This is known as the 'many to many relationship'.
*/

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Project', {
        /* Model attributes are defined here. We define the project_name attribute as
        not necessarily unique, because collaborators may share a project. The object also
        has a description attribute, desc, that summarizes the project.
         */

        project_name: {

        type: DataTypes.STRING,
        allowNull: false,
        unique: false
},
    desc: DataTypes.TEXT,
    picture: DataTypes.STRING
}, {
    timestamps: false
});

}