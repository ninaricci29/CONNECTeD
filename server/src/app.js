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

require('./routes')(app)
app.use('/connect', express.static(path.join(__dirname, 'dist')))
console.log(`${path.join(__dirname, "/dist")}`)

app.get("/connect/*", (req, res) => { 
	res.sendFile(path.join(__dirname, '/dist/index.html'))})
app.use("/connect/", history())
models.sequelize.sync()
  .then( () => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })
  
