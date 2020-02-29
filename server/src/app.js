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

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors())

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
app.use('/images', express.static(path.join(__dirname, 'images')))
  
models.sequelize.sync()
  .then( () => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })
  