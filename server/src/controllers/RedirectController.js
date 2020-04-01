const User = require('../models').User
const path = require('path')

module.exports = {
    async register_redirect(req, res){
      console.log(req.headers.utorid);
      res.cookie('utorid', req.headers.utorid)
      if (req.headers.utorid == undefined){
        res.redirect('/connect/404')
      }
      user = await User.findOne({
        where: {
          utorid: req.headers.utorid
        }
      })
      if (user){
        res.cookie('id', user.id)
        res.redirect('/connect/profile/' + user.id)
      }else{
        res.sendFile(path.join(__dirname, '../dist/index.html'))
      }
    },

    async profile_redirect(req, res){
      console.log(req.params.id);

      user = await User.findOne({
        where: {
          id: req.params.id
        }
      })
      if (user){
        res.sendFile(path.join(__dirname, '../dist/index.html'))

      }else{
        res.redirect('/connect/404')
      }
    }
} 