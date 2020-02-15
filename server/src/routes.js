const ProfileController = require('./controllers/ProfilesController')
const path = require('path')

module.exports = (app) => {
  app.get('/connect/profile_info', ProfileController.retrieve), 
  app.post('/connect/create_profile', ProfileController.register),
  app.post('/updateprofile', ProfileController.update_profile),
  app.get('/connect/register', function(req, res){
    console.log(req.headers.utorid);
    if (req.headers.utorid){
      //let hdrs = {utorid: req.headers.utorid}
      res.cookie('utorid', req.headers.utorid)
      res.sendFile(path.join(__dirname, '/dist/index.html'))
    }
  }) 
}