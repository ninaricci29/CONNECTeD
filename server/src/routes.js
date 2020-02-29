const ProfileController = require('./controllers/ProfilesController')
module.exports = (app, upload) => {
  app.get('/profile', ProfileController.retrieve), 

  app.post('/profile', upload.single('profile_picture'), ProfileController.register);
  app.get('/tags', ProfileController.tags);
  app.post('/updateprofile', ProfileController.update_profile)

}