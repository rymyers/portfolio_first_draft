// Require mongoose
var mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

// Require file-system so that we can load, read, require all of the model files
var fs = require('fs');
var path = require('path');

// Connect to the database
mongoose.connect('mongodb://localhost/prep');

// Specify the path to all of the models
var models_path = path.join(__dirname, '/../models');

// Read all of the files in the models_path and for each one check if it is a javascript file before requiring it
fs.readdirSync(models_path).forEach(function(file){
    if (file.indexOf(".js") >= 0) {
        require(path.join(models_path, file));
    }
})
