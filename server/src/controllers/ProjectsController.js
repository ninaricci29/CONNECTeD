const Project = require('../models').Project
const User = require('../models').User
const UsersProject = require('../models').UsersProject

module.exports = {
async projects(req, res) {
    try {
      user = await User.findOne({where: {id: req.query.id}});
      projects = await user.getProjects();
      res.send(projects)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        err: 'an error has occurred trying to fetch projects'
      })
    }
  },

  async addProject(req,res){
    try {
      project = await Project.create(req.body);
      console.log(project.body);
      const uid_pid = {
        UserId: req.body.userid,
        ProjectId: project.id
      }
      await UsersProject.create(uid_pid)
      res.send("Successfully Updated")
    } catch (err) {
      console.log(req.body);
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

  async searchProject(req,res){
      try {
        const project = await Project.findAll({where:{

        }
        })
      } catch (error) {
          
      }
  }
}