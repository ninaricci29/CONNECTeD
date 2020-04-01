const Project = require('../models').Project
const User = require('../models').User
const UsersProject = require('../models').UsersProject
const Tag = require('../models').Tag
const ProjectTag = require('../models').ProjectTag


module.exports = {
    async getProject(req, res) {
        try {
          project = await Project.findOne({
            where: {
              id: req.query.id
            },
            include: {
              model: Tag
            }
          })
          res.send(project);
        } catch (err) {
          console.log(err)
          res.status(500).send({
            err: 'an error has occurred trying to fetch projects'
          })
        }},
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
          }, 
          include: [{
            model:User,
          },
          {
            model:Tag,
          }]
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
      if (req.file == null){
        req.body.picture = '/connect/images/default_project.jpg'
      } else {
        req.body.picture = '/connect/images/' + req.file.filename
      }
      project = await Project.create(req.body);
      console.log(project)
      lst1 = JSON.parse(req.body.collab)
        for (var i = 0; i <lst1.length; i++){
            user = await User.findOne({
                where:{utorid:lst1[i]}
            });
            uid = user.id
            const uid_pid = {
                UserId: uid,
                ProjectId: project.id
            }
            await UsersProject.create(uid_pid)
        }
      const uid_pid = {
        UserId: req.body.userid,
        ProjectId: project.id
      }
      console.log(uid_pid.body)
      await UsersProject.create(uid_pid)

      lst = JSON.parse(req.body.tags)
      for (var i = 0; i < lst.length; i++) {
           tag = await Tag.findOne({where: {
             tag_name: lst[i]
             }});
           tid = tag.id;
           const pid_tid = {
             ProjectId: project.id,
             TagId: tid
           }
           await ProjectTag.create(pid_tid)
      }
      res.send("Successfully Updated")
    } catch (err) {
      console.log(req.body);
      console.log(err)
      res.status(500).send({
        err: 'an error has occurred trying to add the project'
      })
    }
  },

  async deleteProject(req,res){
    try{
      const project = await Project.findOne({where:{
        id: req.body.id
      }})
      project.destroy()
      res.send("Successfully deleted")
    }
    catch (err) {
      console.log(req.body);
      console.log(err)
      res.status(500).send({
        err: 'an error has occurred trying to delete the project'
    })
    }
  },

  async updateProject(req,res){
    try {
      console.log(req.body);
      const project = await Project.findOne({where:{
        id: req.body.id
      }
      })
      project.project_name = req.body.project_name;
      project.desc = req.body.desc;
      project.website = req.body.website;
      lst = JSON.parse(req.body.tags)
      tags = await Tag.findAll({
        where: {
          tag_name: lst
        }
      })
      project.setTags(tags)
      if (req.file != null){
        project.picture = '/connect/images/' + req.file.filename
      }
      await project.save();
      res.send("Project successfully updated")
    } catch (error) {
        console.log(error);
        res.status(500).send({
            error: 'An error has occurred trying to update the project'
        })
    }
  },

  async getTag(req,res){
    console.log('hi');
    try {
      const tag_id = await Tag.findOne({where:{
        tag_name: req.query.tag
      }})
      res.send({tag_id})
    } catch (error) {
      console.log(error)
      res.status(500).send({
        error: 'An error has occurred trying to fetch the tag'
      })
    }
  },

  async searchProject(req,res){
      try {
        const tag_ids = JSON.parse(req.query.tag_ids)
        const project = await Project.findAll({ include: [{
            model: Tag,
            where: {
              id: tag_ids
            }
          },
          {
            model:User,
          }]});
        res.send({project})
      } catch (error) {
          res.status(500).send({
            error: 'Error'
          })
      }
  }
}