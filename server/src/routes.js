const ProfileController = require('./controllers/ProfilesController')
module.exports = (app) => {
  app.get('/profile', ProfileController.retrieve), 
  app.post('/profile', ProfileController.register),
  app.post('/info', ProfileController.update_profile)
}