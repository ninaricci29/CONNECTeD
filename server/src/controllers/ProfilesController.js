const User = require('../models').User

module.exports = {
  async retrieve (req, res){
    try{
      user = await User.findOne({
        where: {
          id: req.query.id
        }
      })
      res.send(user)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'an error has occured trying to fetch the user'
      })
    }
  }, 

  async register(req, res){
    try{
      query = await User.create(req.body);
      res.send({user: query.toJSON()})
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: 'an error has occured trying to fetch the user'
      })
    }
  }
}