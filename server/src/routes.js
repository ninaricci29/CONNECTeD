const ProfileController = require('./controllers/ProfilesController')
const RedirectController = require('./controllers/RedirectController')
const ProjectController = require('./controllers/ProjectsController')

module.exports = (app, upload) => {
  app.get('/connect/profile_info', ProfileController.retrieve),
  app.get('/connect/tags', ProfileController.tags), 
  app.post('/connect/create_tag', ProfileController.create_tag),
  app.post('/connect/create_profile', upload.single('profile_picture'), ProfileController.register),
  app.post('/connect/updateprofile', upload.single('profile_picture'), ProfileController.update_profile),
  app.get('/connect/register', RedirectController.register_redirect),
  app.get('/connect/profile/:id/edit', RedirectController.update_profile_redirect),
  app.get('/connect/search', RedirectController.search_redirect),
  app.get('/connect/post-projects', RedirectController.new_project_redirect),
  app.get('/connect/projects/:id/update', RedirectController.update_project_redirect),
  app.post('/connect/post-projects',upload.single('picture'), ProjectController.addProject);
  app.get('/connect/getproject', ProjectController.getProject),
  app.post('/connect/update-projects', upload.single('picture'), ProjectController.updateProject); 
  app.get('/connect/search-projects',ProjectController.searchProject);
  app.get('/connect/discover-projects',ProjectController.discoverProjects);
  app.get('/connect/project', ProjectController.getProjects);
  app.get('/connect/get-tag',ProjectController.getTag);
  app.get('/connect/get_utorids', ProjectController.get_utorids)
  app.get('/connect/profile/:id',RedirectController.profile_redirect);
  app.post('/connect/delete-project', ProjectController.deleteProject);

}