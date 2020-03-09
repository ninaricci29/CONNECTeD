const ProfileController = require('./controllers/ProfilesController')
const RedirectController = require('./controllers/RedirectController')
const ProjectController = require('./controllers/ProjectsController')

module.exports = (app) => {
  app.get('/connect/profile_info', ProfileController.retrieve),
  app.get('/connect/tags', ProfileController.tags), 
  app.post('/connect/create_profile', ProfileController.register),
  app.post('/connect/updateprofile', ProfileController.update_profile),
  app.get('/connect/register', RedirectController.register_redirect),
  app.post('/connect/post-projects',ProjectController.addProject);
  app.post('/connect/update-project',ProjectController.updateProject); 
  app.get('/connect/search',ProjectController.searchProject);
}