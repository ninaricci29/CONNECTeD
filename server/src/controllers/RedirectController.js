const User = require('../models').User
const path = require('path')

module.exports = {
    async register_redirect(req, res){
      console.log(req.headers.utorid);
      res.cookie('utorid', req.headers.utorid)
      if (req.headers.utorid == undefined){
        res.sendFile(path.join(__dirname, '../dist/index.html'))
      }
      user = await User.findOne({
        where: {
          utorid: req.headers.utorid
        }
      })
      if (user){
        res.redirect('/connect/profile/' + user.id)
      }else{
        res.sendFile(path.join(__dirname, '../dist/index.html'))
      }
    }
} 