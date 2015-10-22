var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var frameworkSchema = new Schema({
    name: String,
    version: String,
    language: String
});


module.exports = mongoose.model('Framework', frameworkSchema);
