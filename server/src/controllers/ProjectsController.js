const Project = require('../models').Project
const User = require('../models').User
const UsersProject = require('../models').UsersProject
const Tag = require('../models').Tag


module.exports = {
async getProjects(req, res) {
  try {
    user = await UsersProject.findAll({
      where: {
        UserId: req.query.id
      }
    })
    var projects_list = []
    for (var i = 0; i < user.length; i++) {
      projects_list.push(user[i].ProjectId)
    }
    projects = await Project.findAll({
          where: {
            id: projects_list
          }
        })
    res.send(projects);
  } catch (err) {
    console.log(err)
    res.status(500).send({
      error: 'an error has occurred trying to fetch projects'
    })
  }},

  async addProject(req,res){
    try {
      project = await Project.create(req.body);
      console.log(project.body);
      const uid_pid = {
        UserId: req.body.userid,
        ProjectId: project.id
      }
      console.log(uid_pid.body)
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
        const tags = []
        for (var i=0;i<req.body.tag_ids.length;i++){
          tags.push(req.body.tag_ids[i])
        }
        const project = await Project.findAll({ include: {
          model: Tag,
          where: {
            id: tags
          }
        }});
        res.send({project})
      } catch (error) {
          res.status(500).send({
            error: 'Error'
          })
      }
  }
}