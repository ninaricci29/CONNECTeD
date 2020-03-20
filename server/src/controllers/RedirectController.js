const User = require('../models').User
const UsersProject = require('../models').UsersProject
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
    async update_profile_redirect(req, res){
      try {
        console.log(req.headers.utorid)
        if (req.headers.utorid == null){
          res.redirect('/connect/404')
        }
        user = await User.findOne({
          where: {
            utorid: req.headers.utorid
          }
        })
        res.cookie('utorid', req.headers.utorid)
        if (user!= null && user.id == req.params.id){
          res.cookie('id', user.id)
          res.sendFile(path.join(__dirname, '../dist/index.html'))
        }else{
          res.redirect('/connect/register')
        }
      } catch(error){
        console.log(error)
        res.redirect('/connect/404')
      }
    },
    async update_project_redirect(req, res){
      console.log(req.cookies)
      if (req.cookies.utorid == undefined){
        res.redirect('/connect/register')
      }
      user = await User.findOne({
        where: {
          utorid: req.cookies.utorid
        }
      })
      if (user == null){
        res.redirect('/connect/register')
      }
      project = await UsersProject.findOne({
        where:{
          ProjectId: req.params.id,
          UserId: user.id
        }
      })
      if (project){
        res.sendFile(path.join(__dirname, '../dist/index.html'))
      }else{
        res.redirect('/connect/404')
      }

    },
    async new_project_redirect(req, res){
      console.log(req.cookies)
      if (req.cookies.utorid == null){
        res.redirect('/connect/register')
      }
      user = await User.findOne({
        where: {
          utorid: req.cookies.utorid
        }
      })
      if (user!= null){
        res.sendFile(path.join(__dirname, '../dist/index.html'))
      }else{
        res.redirect('/connect/register')
      }
    },
    async search_redirect(req, res){
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
        res.sendFile(path.join(__dirname, '../dist/index.html'))
      }else{
        res.redirect('/connect/register')
      }
    },
    async profile_redirect(req, res){
      console.log(req.params.id);
      res.cookie('id', req.params.id)

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