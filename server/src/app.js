const express = require('express')
const bodyParser = require('body-parser')
const morgan = require("morgan")
const cors = require('cors')
const crypto = require('crypto');
const multer  = require('multer');
const serveStatic = require('serve-static')
var path = require('path');
const models = require('./models')
const app = express()
const config = require("./config/config")
var history = require('connect-history-api-fallback');
const cookieParser = require('cookie-parser')

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors())
app.use(cookieParser());

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src/images')
  },
  filename: function (req, file, callback) {
    crypto.pseudoRandomBytes(16, function(err, raw) {
      if (err) return callback(err);
      callback(null, raw.toString('hex') + path.extname(file.originalname));
    });
  }
})


var upload = multer({ storage: storage , limits: {fileSize: 1000000 }}) //limit 1MB

require('./routes')(app, upload)
app.use('/connect/images', express.static(path.join(__dirname, 'images')))
  
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
  