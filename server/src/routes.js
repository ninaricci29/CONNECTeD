const ProfileController = require('./controllers/ProfilesController')
const RedirectController = require('./controllers/RedirectController')

module.exports = (app) => {
  app.get('/connect/profile_info', ProfileController.retrieve),
  app.get('/connect/tags', ProfileController.tags), 
  app.post('/connect/create_profile', ProfileController.register),
  app.post('/connect/updateprofile', ProfileController.update_profile),
  app.get('/connect/register', RedirectController.register_redirect) 
}