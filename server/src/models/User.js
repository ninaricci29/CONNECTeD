module.exports = (sequelize, DataTypes) => {
  return sequelize.define('User', {
    utorid: { 
      type: DataTypes.STRING,
      unique: true, 
    }, 
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    major: DataTypes.STRING,
    bio: DataTypes.TEXT,
    year: DataTypes.INTEGER,
  });
}
