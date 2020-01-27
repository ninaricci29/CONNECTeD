const express = require('express')
const bodyParser = require('body-parser')
const morgan = require("morgan")
const cors = require('cors')
const models = require('./models')
const app = express()
const config = require("./config/config")

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors())

require('./routes')(app)

models.sequelize.sync()
  .then( () => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })
  