const User = require('../models').User
const Tag = require('../models').Tag
const UsersTag = require('../models').UsersTag

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
        err: 'an error has occurred trying to fetch the user'
      })
    }
  }, 

  async register(req, res){
    try {
      if (req.file == null){
        req.body.profile_picture = '/images/default.jpg'
      } else {
        req.body.profile_picture = '/images/' + req.file.filename
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
      tags = await Tag.findAll({})
      res.send(tags)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'an error has occurred trying to fetch tags'
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
      if (req.file != null){
        user.profile_picture = '/images/' + req.file.filename
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
