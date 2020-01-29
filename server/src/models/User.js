module.exports = (sequelize, DataTypes) => {
  return sequelize.define('User', {
    utorid: { 
      type: DataTypes.STRING,
      unique: true, 
    }, 
    full_name: DataTypes.STRING,
    description: DataTypes.TEXT,
  });
}
