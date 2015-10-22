var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var languageSchema = new Schema({
    name: String,
})

var languageModel = mongoose.model('Language', languageSchema)

module.exports = languageModel