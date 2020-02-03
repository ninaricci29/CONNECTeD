const express = require('express')
const bodyParser = require('body-parser')
const morgan = require("morgan")
const cors = require('cors')
const models = require('./models')
const app = express()
const config = require("./config/config")
const serveStatic = require('serve-static')
const path = require('path')
var history = require('connect-history-api-fallback');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors())
//app.use(serveStatic(path.join(__dirname,'/dist')))
app.use('/connect', express.static(path.join(__dirname, 'dist')))
console.log(`${path.join(__dirname, "/dist")}`)
require('./routes')(app)
app.use(history())
models.sequelize.sync()
  .then( () => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })
  