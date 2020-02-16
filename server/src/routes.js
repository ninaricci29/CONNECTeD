const ProfileController = require('./controllers/ProfilesController')
const User = require('./models').User
const path = require('path')

module.exports = (app) => {
  app.get('/connect/profile_info', ProfileController.retrieve), 
  app.post('/connect/create_profile', ProfileController.register),
  app.post('/updateprofile', ProfileController.update_profile),
  app.get('/connect/register', async function(req, res){
    console.log(req.headers.utorid);
    res.cookie('utorid', req.headers.utorid)
    user = await User.findOne({
      where: {
        utorid: req.headers.utorid
      }
    })
    if (user){
      res.redirect('/connect/profile/' + user.id)
    }else{
      res.sendFile(path.join(__dirname, '/dist/index.html'))
    }}) 
}