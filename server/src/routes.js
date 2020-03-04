const ProfileController = require('./controllers/ProfilesController')
const ProjectController = require('./controllers/ProjectsController')
module.exports = (app) => {
  app.get('/profile', ProfileController.retrieve), 

  app.post('/profile', ProfileController.register);
  app.get('/tags', ProfileController.tags);
  
  app.post('/profile', ProfileController.register),
  app.post('/updateprofile', ProfileController.update_profile);

  app.post('/post-projects',ProjectController.addProject);
  app.post('/update-project',ProjectController.updateProject);

 
}