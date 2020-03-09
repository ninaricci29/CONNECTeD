const Project = require('../models').Project
const UsersProject = require('../models').UsersProject
const Tag = require('../models').Tag

module.exports = {
async projects(req, res) {
    try {
      projects = await Project.findAll({})
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
        const project = await Project.findAll({ include: Tag});
        console.log(project);
        const projects = []
        for (var i=0;i<project.length;i++){
          for(var j=0;j<project[i].Tags.length;j++){
            for(var k=0;k<req.body.tag_ids.length;k++){
              if(project[i].Tags[j].id==req.body.tag_ids[k]){
                projects.push(project[i])
              }
            }
          }
        }
        res.send({projects})
      } catch (error) {
          res.status(500).send({
            error: 'Error'
          })
      }
  }
}