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

  async tags(req, res) {
    try {
      tags = await Tag.findAll({
        where: {
          id: req.query.id
        }
      })
      res.send(tags)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'an error has occurred trying to fetch tags'
      })
    }
  }

}
