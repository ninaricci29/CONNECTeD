const User = require('../models').User
const Tag = require('../models').Tag
const UsersTag = require('../models').UsersTag

module.exports = {
  async retrieve (req, res){
    try {
      user = await User.findOne({
        where: {
          id: req.query.id
        },
        include: {
          model: Tag,
        }
      })
      res.send(user)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        err: 'an error has occurred trying to fetch the user'
      })
    }
  }, 

  async register(req, res){
    try {
      if (req.file == null){
        req.body.profile_picture = '/connect/images/default.jpg'
      } else {
        req.body.profile_picture = '/connect/images/' + req.file.filename
      }
      console.log(req.body);
      tag_ids = JSON.parse(req.body.tag_ids);
      user = await User.create(req.body);
      
      for (var i = 0; i < tag_ids.length; i++){
        var tag = await Tag.findOne({
          where:{
            id : tag_ids[i]}});
        const uid_tid = {
          UserId: user.id,
          TagId: tag_ids[i]
        }
        console.log(uid_tid)
        const saved_uid_tid = await UsersTag.create(uid_tid)
      }
      res.send({user: user.toJSON()})
    } catch (err) {
      console.log(err);
      res.status(500).send({
        err: 'an error has occurred trying to register the user'
      })
    }
  },

  async tags(req, res) {
    try {
      tags = await Tag.findAll({
        order: [['tag_name', 'ASC']],
      })
      res.send(tags)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'an error has occurred trying to fetch tags'
      })
    }
  },
  
  async create_tag(req, res){
    try {
      tag = await Tag.create(req.body)
      res.send({tag: tag.toJSON()})
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'an error has occurred trying to create tag'
      })
    }
  },

  /* This method updates the profile information of a user
     with the new data provided by the user. The profile
     information is updated with a given user id, by looking 
     up the id in the database.  */

  async update_profile (req, res){
    try{
      const user = await User.findOne({where: {
        utorid: req.body.utorid
      }})
      user.first_name=req.body.first_name;
      user.last_name=req.body.last_name;
      user.bio=req.body.bio;
      user.major=req.body.major;
      user.year=req.body.year;
      user.description=req.body.description;
      user.website=req.body.website;
      lst = JSON.parse(req.body.tags)
      tags = await Tag.findAll({
        where: {
          tag_name: lst
        }
      })
      user.setTags(tags)
      if (req.file != null){
        user.profile_picture = '/connect/images/' + req.file.filename
      }
      await user.save();
      res.send(user.toJSON())
    } 
    catch (err) {
      console.log(err);
      res.status(500).send({
        err: 'an error has occurred trying to update the user'

      })
    }
  }

}
