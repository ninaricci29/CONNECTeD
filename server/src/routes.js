const ProfileController = require('./controllers/ProfilesController')
module.exports = (app) => {
  app.get('/profile', ProfileController.retrieve), 

  app.post('/profile', ProfileController.register);
  app.get('/tags', ProfileController.tags);
  
  app.post('/profile', ProfileController.register),
  app.post('/updateprofile', ProfileController.update_profile)

}