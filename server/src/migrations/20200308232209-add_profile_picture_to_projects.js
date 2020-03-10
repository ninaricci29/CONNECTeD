module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Projects', 'picture', {
          type: Sequelize.DataTypes.STRING,
          defaultValue: '/images/default_project.jpg'
        })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Projects', 'picture')
  }
};
