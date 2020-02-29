const User = require('../models').User
const Tag = require('../models').Tag
const Project = require('../models').Project

module.exports = {
  async retrieve (req, res){
    try {
      user = await User.findOne({
        where: {
          id: req.query.id
        }
      })
      res.send(user)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'an error has occurred trying to fetch the user'
      })
    }
  }, 

  async register(req, res){
    try {
      query = await User.create(req.body);
      res.send({user: query.toJSON()})
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: 'an error has occurred trying to register the user'
      })
    }
  },

  async tags(req, res) {
    try {
      tags = await Tag.findAll({})
      res.send(tags)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'an error has occurred trying to fetch tags'
      })
    }
  },
  async projects(req, res) {
    try {
      projects = await Project.findAll({})
      res.send(projects)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'an error has occurred trying to fetch projects'
      })
    }
  },

  async addProject(req,res){
    try {
      //console.log(req.body);
      query = await Project.create(req.body);
      res.send("Successfully Updated")
    } catch (err) {

      console.log(err)
      res.status(500).send({
        err: 'an error has occurred trying to add the project'
      })
    }
  },

  async updateProject(req,res){
    try {
      const project = await Project.findOne({where:{
        id: req.body.id
      }
      })
      project.project_name = req.body.project_name;
      project.desc = req.body.desc;
      await project.save();
      res.send("Project successfully updated")
    } catch (error) {
        console.log(error);
        res.status(500).send({
            error: 'An error has occurred trying to update the project'
        })
    }
  },

  async update_profile (req, res){
    try{
      console.log(req)
      const user = await User.findOne({where: {
        id: req.body.id
      }})
      user.utorid=req.body.utorid;
      user.first_name=req.body.first_name;
      user.last_name=req.body.last_name;
      user.bio=req.body.bio;
      user.major=req.body.major;
      user.year=req.body.year;
      user.description=req.body.description;
      await user.save();
      res.send("Successfully Updated")
    } 
    catch (err) {
      console.log(err);
      res.status(500).send({
        err: 'an error has occurred trying to update the user'

      })
    }
  }

}
