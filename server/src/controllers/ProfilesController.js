const User = require('../models').User

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
      res.send("succesfully updated")
    } 
    catch (err) {
      console.log(err);
      res.status(500).send({
        error: 'an error has occurred trying to update the user'
      })
    }
  }
}
